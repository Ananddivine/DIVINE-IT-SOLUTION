/**
 * Divine IT Solutions — Contact Form backend
 *
 * What this does:
 * 1. Receives the contact form submission from the website (POST request).
 * 2. Appends the request as a new row in this spreadsheet.
 * 3. Emails the CUSTOMER a confirmation that their request was received.
 * 4. Emails the BUSINESS OWNER a notification with the same details.
 *
 * SETUP: see APPS_SCRIPT_SETUP.md in the project root for full instructions.
 */

// ---- EDIT THIS ----
const OWNER_EMAIL = "ananddivine85@gmail.com"; // where YOU get notified of new requests
const BUSINESS_NAME = "Divine IT Solutions";
const BUSINESS_PHONE = "+675 7816 2860";
const SHEET_NAME = "Requests"; // tab name in the spreadsheet
// --------------------

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    const device = (data.device || "").toString().trim();
    const issue = (data.issue || "").toString().trim();
    const submittedAt = data.submittedAt ? new Date(data.submittedAt) : new Date();

    if (!name || !email || !phone || !issue) {
      return jsonResponse({ ok: false, error: "Missing required fields." });
    }

    appendToSheet({ name, email, phone, device, issue, submittedAt });
    sendCustomerConfirmation({ name, email, phone, device, issue });
    sendOwnerNotification({ name, email, phone, device, issue });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

function appendToSheet({ name, email, phone, device, issue, submittedAt }) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Device Type", "Issue", "Status"]);
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
  }

  sheet.appendRow([submittedAt, name, email, phone, device, issue, "New"]);
}

function sendCustomerConfirmation({ name, email, device, issue }) {
  const subject = `We received your repair request — ${BUSINESS_NAME}`;
  const body =
    `Hi ${name},\n\n` +
    `Thanks for reaching out to ${BUSINESS_NAME}. Your request has been received and our ` +
    `team will contact you shortly to arrange a free diagnosis.\n\n` +
    `What you sent us:\n` +
    `  Device: ${device}\n` +
    `  Issue: ${issue}\n\n` +
    `If it's urgent, you can also call or WhatsApp us directly at ${BUSINESS_PHONE}.\n\n` +
    `— ${BUSINESS_NAME}`;

  MailApp.sendEmail({ to: email, subject, body });
}

function sendOwnerNotification({ name, email, phone, device, issue }) {
  const subject = `New repair request — ${name}`;
  const body =
    `New contact form submission:\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Device: ${device}\n` +
    `Issue: ${issue}\n`;

  MailApp.sendEmail({ to: OWNER_EMAIL, subject, body });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: lets you hit the /exec URL in a browser to confirm it's alive.
function doGet() {
  return jsonResponse({ ok: true, message: "Divine IT Solutions contact endpoint is running." });
}
