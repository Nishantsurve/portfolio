import { NextResponse } from "next/server";

interface ViewLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
}

// In-memory runtime views counter
let memoryViews = 178;
const memoryLocations: Record<string, number> = {
  India: 142,
  "United States": 22,
  Germany: 8,
  Singapore: 6,
  "United Kingdom": 4,
};
const memoryCities: Record<string, number> = {
  "Pune, India": 105,
  "Mumbai, India": 26,
  "Bengaluru, India": 11,
};

function getStats() {
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
  return NextResponse.json(getStats());
}

export async function POST(request: Request) {
  try {
    let body: ViewLocation = {};
    try {
      body = await request.json();
    } catch {
      // Empty or invalid body
    }

    const vercelCity = request.headers.get("x-vercel-ip-city");
    const vercelCountry = request.headers.get("x-vercel-ip-country");

    const city = body.city || (vercelCity ? decodeURIComponent(vercelCity) : "Pune");
    const country = body.country || vercelCountry || "India";
    const countryCode = body.countryCode || "IN";

    // Increment in-memory counter on each visit/refresh
    memoryViews += 1;
    if (country && country !== "Unknown") {
      memoryLocations[country] = (memoryLocations[country] || 0) + 1;
    }
    if (city && city !== "Unknown") {
      const cityKey = `${city}, ${country}`;
      memoryCities[cityKey] = (memoryCities[cityKey] || 0) + 1;
    }

    // NOTE: We do NOT call Google Apps Script here for view hits!
    // Google Apps Script is strictly reserved for the Contact Form (/api/contact)
    // so you NEVER receive an email when someone visits or refreshes the website.

    const stats = getStats();
    return NextResponse.json({
      views: memoryViews,
      topCountries: stats.topCountries,
      topCities: stats.topCities,
      currentLocation: { city, country, countryCode },
    });
  } catch (error) {
    console.error("POST /api/views error:", error);
    const stats = getStats();
    return NextResponse.json({
      views: memoryViews + 1,
      topCountries: stats.topCountries,
      topCities: stats.topCities,
    });
  }
}
