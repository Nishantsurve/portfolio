import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// File path to store hit counters locally when running in Node.js
const viewsFilePath = path.join(process.cwd(), ".views-count.json");

function getStoredViews(): number {
  try {
    if (fs.existsSync(viewsFilePath)) {
      const data = fs.readFileSync(viewsFilePath, "utf8");
      const parsed = JSON.parse(data);
      return Number(parsed.views) || 128;
    }
  } catch {
    // ignore
  }
  return 128; // initial starting baseline
}

function saveViews(count: number) {
  try {
    fs.writeFileSync(viewsFilePath, JSON.stringify({ views: count }), "utf8");
  } catch {
    // ignore
  }
}

export async function GET() {
  const current = getStoredViews();
  return NextResponse.json({ views: current });
}

export async function POST() {
  const next = getStoredViews() + 1;
  saveViews(next);
  return NextResponse.json({ views: next });
}

