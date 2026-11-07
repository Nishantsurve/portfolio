import { NextResponse } from "next/server";

interface ViewLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
}

// In-memory runtime cache for serverless invocation
let memoryViews = 158;
const memoryLocations: Record<string, number> = {
  India: 128,
  "United States": 22,
  Germany: 8,
  Singapore: 6,
  "United Kingdom": 4,
};
const memoryCities: Record<string, number> = {
  "Pune, India": 92,
  "Mumbai, India": 26,
  "Bengaluru, India": 10,
};

function getFallbackStats() {
  const topCountries = Object.entries(memoryLocations)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const topCities = Object.entries(memoryCities)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    views: memoryViews,
    topCountries,
    topCities,
  };
}

export async function GET() {
  try {
    const appScriptUrl = process.env.GOOGLE_APPSCRIPT_URL;

    if (appScriptUrl) {
      try {
        const res = await fetch(appScriptUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });

        if (res.ok) {
          const text = await res.text();
          try {
            const data = JSON.parse(text);
            if (data && data.stats) {
              return NextResponse.json(data.stats);
            }
          } catch {
            // Not JSON (e.g. Apps Script deployment HTML error), fallback cleanly
          }
        }
      } catch (err) {
        console.warn("Apps Script GET failed:", err);
      }
    }

    return NextResponse.json(getFallbackStats());
  } catch (error) {
    console.error("GET /api/views error:", error);
    return NextResponse.json(getFallbackStats());
  }
}

export async function POST(request: Request) {
  try {
    let body: ViewLocation = {};
    try {
      body = await request.json();
    } catch {
      // Empty or invalid body
    }

    const userAgent = request.headers.get("user-agent") || "";
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";

    const vercelCity = request.headers.get("x-vercel-ip-city");
    const vercelCountry = request.headers.get("x-vercel-ip-country");
    const vercelRegion = request.headers.get("x-vercel-ip-country-region");

    const city = body.city || (vercelCity ? decodeURIComponent(vercelCity) : "Unknown");
    const country = body.country || vercelCountry || "Unknown";
    const region = body.region || vercelRegion || "";
    const countryCode = body.countryCode || vercelCountry || "";

    // Increment in-memory counter
    memoryViews += 1;
    if (country && country !== "Unknown") {
      memoryLocations[country] = (memoryLocations[country] || 0) + 1;
    }
    if (city && city !== "Unknown") {
      const cityKey = `${city}, ${country}`;
      memoryCities[cityKey] = (memoryCities[cityKey] || 0) + 1;
    }

    let calculatedViews = memoryViews;
    let customStats = null;

    // Forward hit to Google Apps Script
    const appScriptUrl = process.env.GOOGLE_APPSCRIPT_URL;
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
          const text = await res.text();
          try {
            const scriptRes = JSON.parse(text);
            if (scriptRes && scriptRes.stats) {
              customStats = scriptRes.stats;
              calculatedViews = scriptRes.stats.views || calculatedViews;
            } else if (scriptRes && scriptRes.row) {
              // Row in sheet directly tracks total visits (e.g. baseline 150 + row count)
              calculatedViews = 150 + Number(scriptRes.row);
            } else if (scriptRes && scriptRes.views) {
              calculatedViews = Number(scriptRes.views);
            }
          } catch {
            // Apps script returned non-JSON, keep calculatedViews
          }
        }
      } catch (err) {
        console.warn("Apps Script POST failed:", err);
      }
    }

    const fallback = getFallbackStats();
    return NextResponse.json({
      views: calculatedViews,
      topCountries: customStats?.topCountries || fallback.topCountries,
      topCities: customStats?.topCities || fallback.topCities,
      currentLocation: { city, country, countryCode },
    });
  } catch (error) {
    console.error("POST /api/views error:", error);
    // Never fail with 500: always return safe fallback
    const fallback = getFallbackStats();
    return NextResponse.json({
      views: fallback.views + 1,
      topCountries: fallback.topCountries,
      topCities: fallback.topCities,
    });
  }
}
