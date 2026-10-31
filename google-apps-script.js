/**
 * Google Apps Script for Nishant Surve Portfolio Contact Form
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Extensions > Apps Script
 * 3. Replace all code in Code.gs with this script
 * 4. Click Save, then click "Deploy" > "Manage deployments" > Edit (pencil icon) > Version: "New version" > Deploy
 */

function formatIndianTimestamp(date) {
  return Utilities.formatDate(date || new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Format timestamp as DD/MM/YYYY HH:MM:SS
    var timestamp = data.timestamp || formatIndianTimestamp(new Date());
    var name = data.name || "Anonymous";
    var email = data.email || "No email";
    var message = data.message || "No content";
    var recipientEmail = "nishantsurve254@gmail.com";

    // 1. Append row to Google Sheets (formatted timestamp)
    sheet.appendRow([timestamp, name, email, message]);

    // 2. Send instant email notification to Nishant Surve
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
        "<blockquote style='background:#f4f4f5;padding:12px;border-left:4px solid #00f2fe;'>" + 
          message.replace(/\n/g, "<br>") + 
        "</blockquote>" +
        "<hr><p style='color:#71717a;font-size:12px;'>Delivered via Nishant Surve Portfolio Webhook</p>"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow(), "timestamp": timestamp }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
