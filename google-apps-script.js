// ============================================
// GOOGLE APPS SCRIPT — Email Signup to Sheet
// ============================================
// HOW TO SET UP:
//
// 1. Go to https://sheets.google.com and create a new spreadsheet
// 2. Name it "LLC Projects - Email Signups"
// 3. In cell A1 type "Email" and in B1 type "Date"
// 4. Click Extensions > Apps Script
// 5. Delete any code in the editor and paste EVERYTHING below this comment block
// 6. Click Deploy > New deployment
// 7. Select type: "Web app"
// 8. Set "Execute as": Me
// 9. Set "Who has access": Anyone
// 10. Click Deploy and authorize when prompted
// 11. Copy the Web App URL it gives you
// 12. Give that URL to Cael to put in the site!
// ============================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.email, new Date()]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
