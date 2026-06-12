# CI/CD Concepts — Complete Beginner's Tutorial

A comprehensive, single-page interactive tutorial covering **CI/CD (Continuous Integration & Continuous Delivery/Deployment)** from the ground up — featuring 10 in-depth sections, plain-English explanations, real-world analogies, and **100 interactive multiple-choice questions** with detailed answer explanations.

---

## 📋 Project Files

| File | Description |
|------|-------------|
| `index.html` | Main tutorial page (all content, layout, Tailwind CSS) |
| `script.js` | All 100 MCQs data + quiz renderer + mobile nav + scroll tracking |
| `CNAME` | Custom domain configuration for GitHub Pages |
| `README.md` | This file — project info and hosting guide |

---

## 🚀 Hosting on GitHub Pages

### ⚠️ Important: Private vs Public Repository

**This project is currently in a private repository.**  
GitHub Pages has different rules depending on your repository visibility and GitHub plan:

| GitHub Plan | Private Repo Pages | Public Repo Pages |
|---|---|---|
| **Free** | ❌ Not available | ✅ Free, unlimited |
| **Pro / Team / Enterprise** | ✅ Available | ✅ Free, unlimited |

You have two options to host this site:

---

### Option A — Make the Repository Public (Recommended for Free Tier)

> **Security Note:** Making a repository public exposes all code, commit history, and branches to anyone on the internet. Only do this if your code contains **no secrets, API keys, private data, or proprietary information.** Check your `.env` files and `.gitignore` carefully before proceeding.

**Step 1: Change repository visibility to Public**

1. Go to your repository on GitHub.
2. Click **Settings** (the gear icon in the top navigation bar of your repo).
3. Scroll all the way down to the **Danger Zone** section at the bottom.
4. Click **"Change repository visibility"**.
5. Select **"Make public"** from the dialog.
6. Type the repository name to confirm, then click **"I understand, make this repository public"**.

**Step 2: Enable GitHub Pages**

1. In the same **Settings** page, click **"Pages"** in the left sidebar (under "Code and automation").
2. Under **"Source"**, select **"Deploy from a branch"**.
3. Under **"Branch"**, select `main` (or `master`) from the dropdown, and set the folder to `/ (root)`.
4. Click **Save**.

**Step 3: Wait for deployment**

- GitHub will build and deploy your site. This typically takes 1–3 minutes.
- A green banner will appear at the top of the Pages settings: **"Your site is live at https://`<username>`.github.io/`<repository-name>`/"**
- Click that URL to view your live tutorial.

**Step 4: Set up your custom domain (optional)**

1. Edit the `CNAME` file and replace `www.yourcustomdomain.com` with your actual domain.
2. Commit and push the change.
3. In **Settings → Pages**, enter your custom domain under **"Custom domain"** and save.
4. In your domain registrar's DNS settings, add a CNAME record pointing your subdomain to `<username>.github.io`.
5. Check **"Enforce HTTPS"** once DNS propagation is complete (may take up to 48 hours).

---

### Option B — Keep Repository Private (Requires GitHub Pro or Team)

If you have a **GitHub Pro, Team, or Enterprise** account and want to keep the repo private:

**Step 1: Verify your plan**

1. Go to [github.com/settings/billing](https://github.com/settings/billing) and confirm you are on Pro, Team, or Enterprise.

**Step 2: Enable GitHub Pages directly**

1. In your private repository, go to **Settings → Pages**.
2. Under **"Source"**, select **"Deploy from a branch"**.
3. Set branch to `main`, folder to `/ (root)`, and click **Save**.
4. The site will be deployed (it is publicly accessible by URL, but the source code remains private).

> **Important:** Even with a private repository, the *deployed website* (the rendered HTML) is **publicly accessible** via the GitHub Pages URL. The *source code* stays private. This is fine for a tutorial like this.

---

## 🏗️ Running Locally

No build tools or dependencies needed! This is a pure HTML/CSS/JS project.

```bash
# Option 1: Open directly in your browser
open index.html

# Option 2: Use a simple local server (prevents font-loading issues)
# With Python 3:
python3 -m http.server 8080
# Then open: http://localhost:8080

# With Node.js (npx):
npx serve .
# Then open: http://localhost:3000

# With VS Code:
# Install "Live Server" extension, right-click index.html → "Open with Live Server"
```

---

## 📁 Project Structure

```
ci-cd-concepts/
├── index.html      ← Single-page tutorial (all sections, Tailwind CDN, responsive layout)
├── script.js       ← Quiz data (100 MCQs) + UI interactivity
├── CNAME           ← Custom domain for GitHub Pages
└── README.md       ← This file
```

---

## 🎨 Tech Stack

- **Styling:** [Tailwind CSS](https://tailwindcss.com/) via CDN (no build step)
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- **JavaScript:** Vanilla JS (no frameworks) — quiz renderer, mobile nav, scroll tracking
- **Deployment:** GitHub Pages (static hosting)

---

## 📚 Tutorial Contents

| # | Section | Questions |
|---|---------|-----------|
| 0 | Prerequisites | — |
| 1 | What is CI/CD? | Q1–Q10 |
| 2 | Version Control & Git | Q11–Q20 |
| 3 | Continuous Integration | Q21–Q30 |
| 4 | Automated Testing | Q31–Q40 |
| 5 | Build Systems & Artifacts | Q41–Q50 |
| 6 | Continuous Delivery | Q51–Q60 |
| 7 | Continuous Deployment | Q61–Q70 |
| 8 | Pipeline Architecture | Q71–Q80 |
| 9 | CI/CD Tools & Platforms | Q81–Q90 |
| 10 | Best Practices & DevOps Culture | Q91–Q100 |

---

## 🔧 Customization

- **Add a question:** In `script.js`, find the relevant section key in `quizData` and add a new object following the existing format `{ id, question, options, answer, explanation }`.
- **Update the CNAME:** Replace `www.yourcustomdomain.com` with your actual domain name.
- **Change accent color:** Search `indigo` in `index.html` and `script.js` and replace with any Tailwind color (e.g., `emerald`, `violet`, `sky`).

---

## 📄 License

This tutorial is provided for educational purposes. Feel free to fork, modify, and share.
