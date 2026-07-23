# 🧁 Sweet Mystic Bakery

A handcrafted bakery website built with **React.js** and **SCSS**, designed for a magical cottage bakery brand experience. Sweet Mystic Bakery combines a warm, rustic aesthetic with modern web functionality to showcase products, custom orders, gallery items, and customer engagement.

---

## ✨ Project Overview

Sweet Mystic Bakery is a responsive bakery storefront website created to provide customers with an inviting online experience. The site includes product browsing, custom order requests, bakery information, policies, testimonials, and contact functionality.

The design focuses on:

* Handmade artisan bakery branding
* Warm cottage-inspired visuals
* Responsive layouts
* Customer-friendly navigation
* Scalable React component architecture

---

## 🌿 Features

### Public Website

✅ Launch / Coming Soon Page
✅ Responsive Navigation with Mobile Hamburger Menu
✅ Hero Section
✅ Featured Products
✅ Product Cards
✅ Menu Page
✅ Gallery Page
✅ About Page
✅ Custom Orders Page
✅ FAQ Page
✅ Contact Page
✅ Allergen Information Page
✅ Privacy Policy
✅ Bakery Policies
✅ Testimonials Section
✅ Seasonal Promotions

---

## 🧁 Product Features

* Product showcase cards
* Category organization
* Seasonal item highlighting
* Custom order support
* Bakery storytelling sections

---

## 📧 Contact & Orders

Customer inquiries are handled through:

* EmailJS integration
* Contact forms
* Custom order request forms

Customers can request:

* Custom cakes
* Event desserts
* Special occasion treats
* Bakery information

---

# 🛠️ Technologies Used

## Frontend

* React.js
* JavaScript (ES6+)
* React Router
* SCSS
* CSS Grid
* Flexbox

## Styling

* Custom SCSS variables
* Responsive design
* Component-based styling
* Google Fonts

Fonts:

* Cinzel Decorative
* Radley

---

# 🎨 Brand Palette

```scss
$cream: #F6F1E7;
$sage: #A1AD86;
$forest: #66704F;
$brown: #4B2E2A;
$gold: #D9A441;
$fox: #D06E2D;
```

---

# 📂 Project Structure

```
src
│
├── assets
│   └── images
│
├── components
│   ├── Navigation
│   ├── Footer
│   ├── Hero
│   ├── ProductCard
│   ├── FeaturedProducts
│   ├── Testimonials
│   └── ContactCTA
│
├── pages
│   ├── Home
│   ├── About
│   ├── Menu
│   ├── Gallery
│   ├── CustomOrders
│   ├── Contact
│   ├── FAQ
│   ├── Allergens
│   ├── Policies
│   ├── Privacy
│   └── Launch
│
├── styles
│   └── variables.scss
│
├── App.js
└── index.js
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm

Check versions:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd sweet-mystic-bakery
```

Install dependencies:

```bash
npm install
```

---

## Run Development Server

Start the application:

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files will be placed in:

```
build/
```

---

# 🌐 Deployment

This project is configured for deployment with:

* Vercel

Deployment steps:

1. Push project to GitHub
2. Import repository into Vercel
3. Select React framework
4. Deploy

A `vercel.json` file is included for React Router support.

---

# 🔐 Environment Variables

Create a `.env` file:

```
REACT_APP_EMAIL_SERVICE_ID=
REACT_APP_EMAIL_TEMPLATE_ID=
REACT_APP_EMAIL_PUBLIC_KEY=
```

These values are used for EmailJS form submissions.

---

# 🖼️ Image Guidelines

Images should be stored in:

```
src/assets/images
```

Imported into components:

```javascript
import image from "../../assets/images/example.png";
```

Avoid referencing:

```
/src/assets/images/example.png
```

because production builds will not resolve those paths correctly.

---

# 📱 Responsive Design

The website supports:

* Desktop displays
* Tablets
* Mobile devices

Responsive features include:

* Mobile navigation menu
* Flexible product grids
* Scaled hero sections
* Mobile-friendly forms

---

# 🧁 Future Improvements

Possible future features:

* Online ordering system
* Shopping cart
* Customer accounts
* Inventory management
* Admin dashboard
* Product database
* Payment integration
* Order tracking

---

# 📜 License

This project was created for Sweet Mystic Bakery.

All branding, artwork, and bakery content belong to Sweet Mystic Bakery.

---

## 🦊 Sweet Mystic Bakery

*Handcrafted treats with a little bit of magic.*
