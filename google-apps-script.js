/**
 * Google Apps Script for Nishant Surve Portfolio:
 * 1. Contact Form Submissions (writes to "Messages" tab & sends Email Notification)
 * 2. Realtime Page Views & Location-wise Analytics (writes to "Views" tab)
 * 3. GET / POST API returning real-time view counts & location breakdown
 *
 * Setup Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/
 * 2. Click Extensions > Apps Script
 * 3. Paste this entire code into Code.gs (replacing whatever was there)
 * 4. Click Save (Ctrl+S or floppy icon)
 * 5. Click "Deploy" > "Manage deployments"
 * 6. Click Edit (pencil icon) -> under Version select "New version" -> click Deploy
 */

function formatIndianTimestamp(date) {
  return Utilities.formatDate(date || new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
}

function getOrCreateSheet(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
  }
  return sheet;
}

function getStats(ss) {
  var viewsSheet = getOrCreateSheet(ss, "Views", ["Timestamp", "City", "Region", "Country", "Country Code", "IP", "User Agent"]);
  var lastRow = viewsSheet.getLastRow();
  
  // Starting baseline count (e.g. 150) + recorded views in sheet
  var baseline = 150;
  var recordedViews = Math.max(0, lastRow - 1); // exclude header row
  var totalViews = baseline + recordedViews;

  // Compute location-wise aggregation
  var countryCounts = {};
  var cityCounts = {};
  var recentLocations = [];

  if (lastRow > 1) {
    var numRows = lastRow - 1;
    // Read City (col 2), Region (col 3), Country (col 4), Country Code (col 5)
    var data = viewsSheet.getRange(2, 2, numRows, 4).getValues();
    
    for (var i = 0; i < data.length; i++) {
      var city = (data[i][0] || "Unknown").toString().trim();
      var country = (data[i][2] || "Unknown").toString().trim();
      var code = (data[i][3] || "").toString().trim();
      
      if (country && country !== "Unknown") {
        countryCounts[country] = (countryCounts[country] || 0) + 1;
      }
      if (city && city !== "Unknown") {
        var cityKey = city + (country ? ", " + country : "");
        cityCounts[cityKey] = (cityCounts[cityKey] || 0) + 1;
      }
    }

    // Get last up to 5 unique recent locations
    var seen = {};
    for (var j = data.length - 1; j >= 0 && recentLocations.length < 5; j--) {
      var c = (data[j][0] || "").toString().trim();
      var cntry = (data[j][2] || "").toString().trim();
      var locStr = c && cntry ? (c + ", " + cntry) : (cntry || c);
      if (locStr && !seen[locStr]) {
        seen[locStr] = true;
        recentLocations.push({ city: c, country: cntry });
      }
    }
  }

  // Format top countries
  var topCountries = Object.keys(countryCounts).map(function(k) {
    return { name: k, count: countryCounts[k] };
  }).sort(function(a, b) { return b.count - a.count; }).slice(0, 5);

  // Format top cities
  var topCities = Object.keys(cityCounts).map(function(k) {
    return { name: k, count: cityCounts[k] };
  }).sort(function(a, b) { return b.count - a.count; }).slice(0, 5);

  return {
    views: totalViews,
    recordedViews: recordedViews,
    topCountries: topCountries,
    topCities: topCities,
    recentLocations: recentLocations
  };
}

// Handle GET requests (returns current view counts & stats without incrementing)
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var stats = getStats(ss);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", stats: stats }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests:
// - If data.type === "view" (or action === "view"): log view to "Views" tab and return updated stats
// - Otherwise: log contact message to "Messages" tab and send email notification
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var contents = e.postData && e.postData.contents ? e.postData.contents : "{}";
    var data = JSON.parse(contents);
    var timestamp = data.timestamp || formatIndianTimestamp(new Date());

    // 1. PAGE VIEW EVENT
    if (data.type === "view" || data.action === "view") {
      var viewsSheet = getOrCreateSheet(ss, "Views", ["Timestamp", "City", "Region", "Country", "Country Code", "IP", "User Agent"]);
      
      var city = data.city || "Unknown";
      var region = data.region || "";
      var country = data.country || "Unknown";
      var countryCode = data.countryCode || "";
      var ip = data.ip || "";
      var userAgent = data.userAgent || "";

      viewsSheet.appendRow([timestamp, city, region, country, countryCode, ip, userAgent]);
      
      var updatedStats = getStats(ss);
      return ContentService
        .createTextOutput(JSON.stringify({
          result: "success",
          type: "view",
          views: updatedStats.views,
          stats: updatedStats
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. CONTACT MESSAGE SUBMISSION
    var messagesSheet = getOrCreateSheet(ss, "Messages", ["Timestamp", "Name", "Email", "Message"]);
    var name = data.name || "Anonymous";
    var email = data.email || "No email";
    var message = data.message || "No content";
    var recipientEmail = "nishantsurve254@gmail.com";

    messagesSheet.appendRow([timestamp, name, email, message]);

    // Send instant email notification to Nishant Surve
    try {
      MailApp.sendEmail({
        to: recipientEmail,
        subject: "🚀 New Portfolio Message from " + name,
        replyTo: email,
        htmlBody: 
          "<h3>You received a new inquiry from your portfolio website!</h3>" +
          "<p><strong>Time:</strong> " + timestamp + "</p>" +
          "<p><strong>Name:</strong> " + name + "</p>" +
          "<p><strong>Email:</strong> <a href='mailto:" + email + "'>" + email + "</a></p>" +
          "<p><strong>Message:</strong></p>" +
          "<blockquote style='background:#f4f4f5;padding:12px;border-left:4px solid #a1a1aa;'>" + 
            message.replace(/\n/g, "<br>") + 
          "</blockquote>" +
          "<hr><p style='color:#71717a;font-size:12px;'>Delivered via Nishant Surve Portfolio Webhook</p>"
      });
    } catch (mailErr) {
      // Don't fail the sheet write if mail quota is hit
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        type: "contact",
        row: messagesSheet.getLastRow(),
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
