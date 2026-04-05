# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup EmailJS for Contact Form

The contact form requires EmailJS configuration to send messages. Follow these steps:

#### Step 1: Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Click "Sign Up Free"
- Create your account using email or Google

#### Step 2: Add Email Service
1. In your EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add Service"**
3. Select your email provider:
   - **Gmail**: Requires "App Password" (not regular password)
   - **Outlook**: Use your email and app-specific password
   - **Other**: Follow provider's guidelines
4. Connect and save - copy the **SERVICE ID**

#### Step 3: Create Email Template
1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Use these template variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{message}}` - Visitor's message
   - `{{to_name}}` - Your name (auto-filled)

Example template:
```
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **TEMPLATE ID**

#### Step 4: Get Public API Key
1. Click your **profile icon** → **Account**
2. Go to **"API Keys"** section
3. Copy your **Public Key** (starts with "public_")

#### Step 5: Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Restart your dev server** after updating `.env`

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` and test the contact form!

---

## ✨ New Features & Improvements

### Smooth Animations
- **Staggered section animations** - Elements cascade in smoothly
- **Enhanced component transitions** - Form fields, buttons, and elements have spring physics
- **Scroll-based animations** - Components animate in as they enter viewport
- **Improved hover effects** - Interactive elements respond with refined animations
- **Contact info cards** - Smooth entrance animations with hover effects

### Components Updated
1. **Skills Section** - Staggered skill tags with hover scale effects
2. **Projects Section** - Enhanced card animations with improved transitions
3. **Contact Section** - Better form field animations and toast notifications
4. **About Section** - Improved education timeline and language tags
5. **Experience Section** - Refined experience cards with timeline effects
6. **Navbar** - Smoother animations for desktop and mobile menus

---

## 🛠️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📋 Troubleshooting

### Contact Form Not Working?
1. Check `.env` file exists and is properly configured
2. Verify EmailJS credentials are correct
3. Open browser console (F12) for error messages
4. Restart dev server after changing `.env`

### Animations Not Smooth?
- Ensure you have the latest Framer Motion installed
- Check browser performance settings
- Try disabling browser extensions that affect animations

### Email Not Arriving?
1. Check EmailJS dashboard for failed attempts
2. Verify email service is properly connected
3. Check spam folder
4. Ensure template has correct variable names

---

## 📚 Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Contact form ready?** Test it and watch the smooth animations in action! 🎉
