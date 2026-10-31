import { NextResponse } from "next/server";

function formatTimestamp(): string {
  // Format as DD/MM/YYYY HH:MM:SS in Indian Standard Time (IST)
  const now = new Date();
  return now.toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).replace(",", "");
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "nishantsurve254@gmail.com";
    const appScriptUrl = process.env.GOOGLE_APPSCRIPT_URL;
    const readableTimestamp = formatTimestamp();

    // 1. Forward data to Google Sheets via Google Apps Script (if configured)
    if (appScriptUrl) {
      try {
        await fetch(appScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: readableTimestamp,
            name,
            email,
            message,
            targetEmail: recipientEmail,
          }),
        });
      } catch (err) {
        console.error("Failed to forward message to Google Apps Script:", err);
      }
    }

    // 2. Also log the contact payload for audit
    console.log(`[Contact Submission] At: ${readableTimestamp} | To: ${recipientEmail} | From: ${name} <${email}> | Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: `Message transmitted to ${recipientEmail}`,
      timestamp: readableTimestamp,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
