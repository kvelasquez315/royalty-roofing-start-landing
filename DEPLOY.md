# Vercel Deployment Guide — Royalty Roofing Landing Page

This is a static React + Vite site. No server or database is required.

---

## Prerequisites

- A [Vercel account](https://vercel.com) (free tier is sufficient)
- The project code pushed to a GitHub repository (see Step 1 below)

---

## Step 1 — Push to GitHub

If you have not already done so, create a GitHub repository and push the project:

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create royalty-roofing-landing --private --source=. --push
```

Or use the **Settings → GitHub** panel in the Manus Management UI to export directly to a new GitHub repo.

---

## Step 2 — Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** and select your GitHub repo
3. Vercel will auto-detect the `vercel.json` settings — no manual configuration needed

**Build settings (already set in `vercel.json`, no changes required):**

| Setting | Value |
|---|---|
| Build Command | `pnpm run build` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install` |
| Framework Preset | Other (None) |

---

## Step 3 — Environment Variables

In Vercel: **Project → Settings → Environment Variables**

| Variable | Required | Description |
|---|---|---|
| `VITE_FORM_WEBHOOK_URL` | Optional | Webhook URL for lead form submissions. When set, form data is POSTed as JSON on submit. Works with Zapier, Make, n8n, or any webhook endpoint. Leave blank to disable. |

> **Note:** The `VITE_` prefix is required for Vite to expose the variable to the browser bundle.

---

## Step 4 — Deploy

Click **Deploy**. Vercel will build and publish the site in about 30–60 seconds.

---

## Step 5 — Custom Domain

1. In Vercel: **Project → Settings → Domains**
2. Add `royaltyroofing.org` (or your preferred subdomain such as `lp.royaltyroofing.org`)
3. Follow the DNS instructions Vercel provides (add a CNAME or A record at your registrar)

---

## Connecting the Lead Form

The form POSTs a JSON payload to `VITE_FORM_WEBHOOK_URL` on submission:

```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "(402) 555-1234",
  "address": "123 Main St, Omaha NE 68102",
  "consentMessages": true,
  "consentPrivacy": true,
  "submittedAt": "2026-04-23T18:00:00.000Z"
}
```

**Recommended integrations:**

- **Zapier** — Create a "Catch Hook" trigger, then send to Gmail, Slack, HubSpot, or your CRM
- **Make (Integromat)** — Webhook module → Email / Google Sheets / GoHighLevel
- **n8n** — Webhook node → any downstream action

---

## Redeployment

Push any code change to the connected GitHub branch and Vercel will automatically rebuild and redeploy.

---

## Image Assets

All images are served from `https://files.manuscdn.com` (permanent public CDN). No additional asset hosting is required.
