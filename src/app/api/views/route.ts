import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Local backup storage when developing locally or if external webhook is unreachable
const localViewsFilePath = path.join(process.cwd(), ".views-count.json");

interface ViewLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  flag?: string;
}

interface LocalStats {
  views: number;
  locations: Record<string, number>;
  cities: Record<string, number>;
  recent: Array<{ city?: string; country?: string; flag?: string }>;
}

function readLocalStats(): LocalStats {
  try {
    if (fs.existsSync(localViewsFilePath)) {
      const data = fs.readFileSync(localViewsFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch {
    // ignore
  }
  return {
    views: 156,
    locations: { India: 120, "United States": 18, Germany: 8, Singapore: 6, "United Kingdom": 4 },
    cities: { "Pune, India": 88, "Mumbai, India": 24, "Bengaluru, India": 8 },
    recent: [
      { city: "Pune", country: "India" },
      { city: "San Francisco", country: "United States" },
      { city: "Bengaluru", country: "India" },
    ],
  };
}

function saveLocalStats(stats: LocalStats) {
  try {
    fs.writeFileSync(localViewsFilePath, JSON.stringify(stats, null, 2), "utf8");
  } catch {
    // ignore
  }
}

// GET: Return current view stats
export async function GET() {
  const appScriptUrl = process.env.GOOGLE_APPSCRIPT_URL;

  if (appScriptUrl) {
    try {
      const res = await fetch(appScriptUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.stats) {
          return NextResponse.json(data.stats);
        }
      }
    } catch (err) {
      console.warn("Could not fetch stats from Google Apps Script, using local fallback:", err);
    }
  }

  const local = readLocalStats();
  const topCountries = Object.entries(local.locations)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const topCities = Object.entries(local.cities)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return NextResponse.json({
    views: local.views,
    topCountries,
    topCities,
    recentLocations: local.recent,
  });
}

// POST: Record a new page hit (called on every page load/refresh)
export async function POST(request: Request) {
  const appScriptUrl = process.env.GOOGLE_APPSCRIPT_URL;
  let body: ViewLocation = {};

  try {
    body = await request.json();
  } catch {
    // Empty body or parse error
  }

  // Extract client IP and user-agent from headers (standard on Vercel / reverse proxies)
  const userAgent = request.headers.get("user-agent") || "";
  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";

  // Check Vercel automatic geo headers if available
  const vercelCity = request.headers.get("x-vercel-ip-city");
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  const vercelRegion = request.headers.get("x-vercel-ip-country-region");

  const city = body.city || (vercelCity ? decodeURIComponent(vercelCity) : "Unknown");
  const country = body.country || vercelCountry || "Unknown";
  const region = body.region || vercelRegion || "";
  const countryCode = body.countryCode || vercelCountry || "";

  // 1. Forward to Google Apps Script if configured
  if (appScriptUrl) {
    try {
      const res = await fetch(appScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "view",
          city,
          region,
          country,
          countryCode,
          ip: clientIp,
          userAgent,
        }),
      });

      if (res.ok) {
        const scriptRes = await res.json();
        if (scriptRes && scriptRes.stats) {
          return NextResponse.json(scriptRes.stats);
        }
        if (scriptRes && scriptRes.views) {
          return NextResponse.json({ views: scriptRes.views });
        }
      }
    } catch (err) {
      console.warn("Failed to forward view hit to Google Apps Script:", err);
    }
  }

  // 2. Local fallback increment
  const local = readLocalStats();
  local.views += 1;

  if (country && country !== "Unknown") {
    local.locations[country] = (local.locations[country] || 0) + 1;
  }
  if (city && city !== "Unknown") {
    const cityKey = `${city}, ${country}`;
    local.cities[cityKey] = (local.cities[cityKey] || 0) + 1;
  }

  if (city !== "Unknown" || country !== "Unknown") {
    local.recent = [
      { city, country },
      ...local.recent.filter((r) => r.city !== city || r.country !== country),
    ].slice(0, 5);
  }

  saveLocalStats(local);

  const topCountries = Object.entries(local.locations)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const topCities = Object.entries(local.cities)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return NextResponse.json({
    views: local.views,
    topCountries,
    topCities,
    recentLocations: local.recent,
    currentLocation: { city, country, countryCode },
  });
}
