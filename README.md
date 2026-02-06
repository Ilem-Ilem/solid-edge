<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Solid Edge Construction Canada

This is a construction company website with contact form functionality powered by EmailJS.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Setup EmailJS for Contact Form

To enable the contact form to send emails:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.) in the EmailJS dashboard
3. Create a new email template with the following variables:
   - `from_name` (sender's name)
   - `from_email` (sender's email)
   - `subject` (email subject)
   - `message` (email message content)
   - `to_name` (recipient name)
4. Note your:
   - Public Key (Account → API Keys)
   - Service ID (Email Templates → Your Service → Copy ID)
   - Template ID (Email Templates → Your Template → Copy ID)
5. Update the Contact.tsx file with your actual credentials:
   - Replace `YOUR_PUBLIC_KEY` with your actual public key
   - Replace `YOUR_SERVICE_ID` with your actual service ID
   - Replace `YOUR_TEMPLATE_ID` with your actual template ID
