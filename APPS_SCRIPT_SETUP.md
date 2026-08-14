# Connect the Contact Form to Google Sheets + Email (Apps Script)

This makes your website's Contact page:
1. Save every submission as a row in a Google Sheet.
2. Auto-email the **customer** a confirmation ("your request has been received...").
3. Auto-email **you** (the owner) so you see new requests immediately.

No paid service, no backend server — just Google Sheets + Apps Script, both free.

## 1. Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like `Divine IT Solutions — Requests`.
3. You don't need to add any headers or tabs manually — the script creates a
   `Requests` tab automatically on the first submission.

## 2. Add the script

1. In the spreadsheet, go to **Extensions → Apps Script**.
2. Delete any starter code in the editor.
3. Open `apps-script/Code.gs` from this project, copy the whole file, and paste it in.
4. Near the top, edit these two lines to match your details:
   ```js
   const OWNER_EMAIL = "ananddivine85@gmail.com"; // where you get notified
   const BUSINESS_PHONE = "+675 7816 2860";
   ```
5. Click the **Save** icon (or Ctrl/Cmd+S).

## 3. Deploy it as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description:** `Contact form endpoint`
   - **Execute as:** `Me (your Google account)`
   - **Who has access:** `Anyone`
     *(This has to be "Anyone" so your website can reach it — it does not
     expose your spreadsheet, only this one script.)*
4. Click **Deploy**.
5. Google will ask you to **authorize** the script the first time:
   - Click **Authorize access**, choose your Google account.
   - You'll see an "unverified app" warning because it's your own personal
     script — click **Advanced → Go to (project name) (unsafe)** → **Allow**.
     This is expected for scripts you write yourself; it's not published for
     public review.
6. After deploying, copy the **Web app URL** shown — it ends in `/exec`.

## 4. Connect it to the website

1. Open `src/data/business.js` in the project.
2. Replace the placeholder with the URL you copied:
   ```js
   export const FORM_ENDPOINT = "https://script.google.com/macros/s/XXXXXXXXXXXX/exec";
   ```
3. Save, then test locally:
   ```bash
   npm run dev
   ```
4. Go to the Contact page, fill out the form with a real email address you can check, and submit.
5. Check:
   - The Google Sheet — a new row should appear in the `Requests` tab.
   - The customer email inbox — a confirmation email should arrive.
   - Your own inbox (`OWNER_EMAIL`) — a notification email should arrive.

## 5. Re-deploying after script changes

If you edit `Code.gs` later (e.g. change the email wording), you must create
a **new version** for it to take effect:

1. **Deploy → Manage deployments**.
2. Click the pencil/edit icon on the existing deployment.
3. Under **Version**, choose **New version**.
4. Click **Deploy**.

(The Web app URL stays the same — you don't need to update `business.js` again.)

## Notes & limits

- Apps Script's free tier allows up to **100 emails/day** sent via a personal
  Gmail account (higher with Google Workspace). That's far more than a small
  repair shop's contact form will generate.
- The sheet keeps every submission, so it doubles as a simple request log —
  add a "Status" workflow (e.g. New → Contacted → Done) by editing that
  column manually, or extend the script later if you want it automated.
- If the confirmation email doesn't arrive, check the customer's spam folder
  first, then check **Apps Script → Executions** (left sidebar) for errors.
