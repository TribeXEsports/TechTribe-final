# Tech TribeX Website

Welcome to the Tech TribeX project! This is your friendly guide to everything you need to know about your new website. We've made it super simple, so even if you're new to this, you'll feel like a pro! 🚀

---

## ⭐️ What's Inside This Guide?

*   [What Your Website Is Made Of](#-what-your-website-is-made-of-the-tech-stack)
*   [Running the Website on Your Computer](#-running-the-website-on-your-computer-local-setup)
*   [Putting Your Website on the Internet](#-putting-your-website-on-the-internet-deployment)
*   [How to Change Your Website's Content](#-how-to-change-your-websites-content)
    *   [Navigation Links (Header)](#1-navigation-links-header---srccomponentslayoutheadertsx)
    *   [Homepage Content](#2-homepage---srccomponentshomepagecontenttsx)
    *   [Services Page](#3-services-page---srcappservicespagetsx)
    *   [Portfolio & Testimonials](#4-portfolio--testimonials---srclibportfolio-datats)
    *   [Founder Page](#5-founder-page---srcappfounderpagetsx)
    *   [Partners & University Logos](#6-partners--university-logos---srcapppartnerspagetsx)
    *   [Sponsorship Page](#7-sponsors-page---srcappsponsorspagetsx)
    *   [Events Page](#8-events-page---srcappeventspagetsx)
    *   [Start a Chapter Page](#9-start-a-chapter-page---srcappchapterspagetsx)
    *   [FAQ Page](#10-faq-page---srcappfaqpagetsx)
    *   [Website Colors](#11-website-colors---srcappglobalscss)
*   [How the Contact Forms Work](#-how-the-contact-forms-work)
*   [Troubleshooting](#-troubleshooting)

---

## 🤖 What Your Website Is Made Of (The Tech Stack)

Your website is built with some of the coolest and most modern tools available! Think of them like super-powered building blocks.

| Tool                | What It Does (In Simple Terms)                                        |
| ------------------- | --------------------------------------------------------------------- |
| **Next.js & React** | The main Lego set for building the pages and buttons.                 |
| **TypeScript**      | A helpful robot that checks our code for mistakes before they happen. |
| **Tailwind CSS**    | A giant box of crayons for styling everything to look amazing.        |
| **ShadCN/UI**       | Pre-made Lego pieces (like buttons and cards) that look great.        |
| **Genkit**          | The "brain" that helps with smart features on the site.               |
| **Discord Webhooks**| A magic mailbox that sends form submissions straight to Discord.      |

---

## 💻 Running the Website on Your Computer (Local Setup)

Want to play around with the website on your own computer? Here’s how!

### **Step 1: Get Your Secret Keys (Important!)**

Your website uses two special "keys" to make its forms work.
-   **AI Service Key:** For the chatbot and "Start a Chapter" form.
-   **Discord Webhook URL:** To send form notifications to your Discord server.

**For this project to work perfectly, you need to tell it what your keys are.**

1.  In the main folder of your project, create a new file and name it exactly: `.env`
2.  Open that `.env` file and copy-paste the following inside it:

    ```
    # You can get an API key from a service like Google AI Studio
    GEMINI_API_KEY="PASTE_YOUR_AI_SERVICE_KEY_HERE"

    # Learn how to create a Discord Webhook here: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
    DISCORD_WEBHOOK_URL="PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE"
    ```

3.  Now, just replace the placeholder text with your real key and URL. **The forms will not work without this step.**

### **Step 2: Install the Parts**

This command is like opening the Lego box and making sure all the pieces are there. It reads a file called `package.json` and downloads all the tools your website needs.

Open your computer's terminal (like Command Prompt, PowerShell, or Terminal) and run this:
```bash
npm install
```

### **Step 3: Start the Engines!**

This command will start the main website application.

```bash
npm run dev
```
You can now see your website by going to `http://localhost:3000` in your web browser. The AI services will run seamlessly within the same development server.

---

## 🌐 Putting Your Website on the Internet (Deployment)

Ready to show your website to the world? You'll use a service like **Vercel** or **Netlify**.

1.  **Connect Your Code:** In Vercel or Netlify, create a new project and connect it to the place where your code is stored (like GitHub). They are smart and will usually know it's a Next.js project.

2.  **CRITICAL STEP: Add Your Secret Keys!**
    Just like you did for your local computer, you **must** tell your hosting service what your secret keys are. If you don't, your forms won't work on the live website.

    In your Vercel or Netlify project settings, find the section for **Environment Variables** and add these two:
    -   `GEMINI_API_KEY` - Paste your AI service key here.
    -   `DISCORD_WEBHOOK_URL` - Paste your Discord Webhook URL here.

---

## ✍️ How to Change Your Website's Content

This is the fun part! You don't need to be a coding expert to update your website. Most of the text and images are stored in simple lists right in the code.

**How to Edit an Item:**
- Find the correct file from the list below.
- Look for a list that starts with `const someName = [...]`.
- Each item in the list is usually inside curly braces `{ ... }`.
- To change text, just edit the words inside the quotes `""`.
- To add a new item, copy an existing one (from `{` to `}`), paste it, and change its content.
- To remove an item, just delete its entire block from `{` to `}`.

---

### **1. Navigation Links (Header) - `src/components/layout/Header.tsx`**
This file controls the links at the top of your website (Home, Services, etc.).
- Find the `navLinks` list.
- Change the `label` to rename a link or change the `href` to change where it goes.

### **2. Homepage - `src/components/HomePageContent.tsx`**
This file controls everything you see on the main homepage.
- **Services:** Find `services` to edit the three main services shown.
- **Featured Projects:** Find `featuredProjects` to change the two projects highlighted.
- **Community Pillars:** Edit the `communityPillars` list.
- **Stats:** Change the `value` in the `stats` list to update the numbers.
- **Gallery Images:** The main gallery image is `galleryImage1` in `src/lib/gallery-images.ts`. The other scrolling images are in the `otherGalleryImages` list in the same file.

### **3. Services Page - `src/app/services/page.tsx`**
This file controls the detailed list of services you offer.
- Find the `services` list. You can edit the icon, title, description, features, and tags for each service.

### **4. Portfolio & Testimonials - `src/lib/portfolio-data.ts`**
This special file holds all the data for your projects and what your clients say.
- **Portfolio Projects:** Find the `portfolioItems` list. Here you can add, remove, or edit any project. You can change the title, description, image, features, and links.
- **Client Testimonials:** Find the `testimonials` list to update the quotes from your clients.

### **5. Founder Page - `src/app/founder/page.tsx`**
This file controls the content on the Founder's page.
- **Journey Items:** Find `journeyItems` to edit milestones.
- **Partners:** Find `partners` to edit the list of collaborators.
- **Image & Text:** You can directly edit the text and image source on this page.

### **6. Partners & University Logos - `src/app/partners/page.tsx`**
This file controls the logos on the Partners page.
- **Company Partners:** Edit the `companyPartners` list.
- **University Chapters:** Edit the `universityChapters` list.

### **7. Sponsors Page - `src/app/sponsors/page.tsx`**
This file controls the content on the sponsorship benefits page.
- Find the `benefits` list to edit the text for each benefit.

### **8. Events Page - `src/app/events/page.tsx`**
This file controls the list of upcoming events.
- Find the `events` list and edit the title, date, location, and description for each event.

### **9. Start a Chapter Page - `src/app/chapters/page.tsx`**
This file controls the perks listed for starting a new chapter.
- Find the `perks` list to edit the title and description for each perk.

### **10. FAQ Page - `src/app/faq/page.tsx`**
This file controls the questions and answers on the FAQ page.
- Find the `faqs` list. Edit the `question` and `answer` for each item.

### **11. Website Colors - `src/app/globals.css`**
Want to change the main color of your website?
- Open this file and look at the very top.
- Find the line that says `--primary: ...`
- You can change the HSL color values here. Use an online tool like a "HSL Color Picker" to find the numbers for the color you want!

---

## 🤔 How the Contact Forms Work

Your website has two forms, and they are both very smart!

**1. The Frontend: A Modern User Experience**
The form is built with **React** and styled beautifully using **ShadCN/UI** and **Tailwind CSS**. For a flawless user experience, it uses:
*   **`react-hook-form`**: For performant and efficient handling of form inputs.
*   **`zod`**: For client-side validation, which provides instant feedback to the user and prevents malformed data from ever hitting the server.

**2. The Backend: Secure & Modern with Next.js Server Actions**
Instead of building a traditional, separate API endpoint, the project utilizes **Next.js Server Actions**. This powerful feature allows backend logic to be written as a simple asynchronous function that can be securely called directly from React components. This co-location of frontend and backend logic simplifies the codebase, enhances security, and improves performance.

**3. The Server Action Logic: Processing & Formatting**
Once the server action is triggered, it:
*   Receives the fully validated and type-safe data from the form.
*   Transforms this data into a structured, easy-to-read message.
*   Constructs a rich **Discord embed**, complete with titles, colors, and neatly organized fields for the submitted information (e.g., Name, Email, Subject, Message).

**4. The Integration: Instant Notifications with Discord Webhooks**
The server action uses the `fetch` API to send a POST request containing the embed to a **Discord Webhook URL**. This URL, stored securely as an environment variable, acts as a direct line to a specific channel in a private Discord server. The result is an instant, real-time notification pushed to the team the moment a user submits the form.

**5. Closing the Loop: Immediate User Feedback**
After successfully sending the message to Discord, the server action returns a success response to the client. The frontend code then uses a custom toast hook to display an elegant "Message Sent!" notification, assuring the user that their inquiry has been received.

## 🚨 Troubleshooting

### **Founder Page Image Not Displaying**
If you are trying to update the founder's profile image and it does not appear on the website after deployment, the most likely cause is an issue with the image hosting or data. The most reliable method is to:
1. Upload your desired image to a stable, public image hosting service (like Imgur, Postimage, or a public cloud storage bucket).
2. Copy the **direct link** to the image file (it should end in `.jpg`, `.png`, etc.).
3. Open `src/app/founder/page.tsx` and replace the placeholder `src` URL in the `<Image>` component with your new direct link.

And that's it! You are now the master of your Tech TribeX website. Go make something amazing! ✨
