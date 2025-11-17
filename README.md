# K & C Traders - Solar & Inverter Solutions Website

A fully responsive, modern website for K & C Traders, a business specializing in solar panel installations and inverter services.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with solar-themed color palette (yellow, blue, white)
- **SEO-Friendly** - Proper meta tags, semantic HTML structure
- **Fast & Lightweight** - Optimized CSS and JavaScript
- **Accessible** - Proper ARIA labels and semantic markup

## 📁 Project Structure

```
k-c-traders/
│
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── products.html       # Products page
├── contact.html        # Contact Us page
│
├── css/
│   ├── shared.css      # Shared styles (navigation, footer, buttons)
│   ├── home.css        # Home page specific styles
│   ├── about.css       # About page specific styles
│   ├── services.css    # Services page specific styles
│   ├── products.css    # Products page specific styles
│   └── contact.css     # Contact page specific styles
│
├── js/
│   ├── main.js         # Main JavaScript (navigation, animations)
│   └── contact.js      # Contact form handling
│
└── README.md           # This file
```

## 🚀 How to Run

### Option 1: Simple HTTP Server (Recommended)

1. **Using Python** (if installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if installed):
   ```bash
   npx http-server -p 8000
   ```

3. **Using PHP** (if installed):
   ```bash
   php -S localhost:8000
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Option 2: Direct File Opening

Simply open `index.html` in your web browser. Note that some features may be limited when opening files directly.

### Option 3: Live Server (VS Code Extension)

If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with tagline and CTA button
- Services overview (Solar, Inverter, Products)
- Why Choose Us section

### About Us (`about.html`)
- Company introduction
- Mission statement
- Expertise areas
- Company values

### Services (`services.html`)
- Solar panel installations
- Solar water heater setup
- Solar street lights installation
- Inverter installation & servicing
- Battery replacement & repair
- Annual Maintenance Contracts (AMC)
- Additional services

### Products (`products.html`)
- Solar panels
- Inverters (all brands)
- Batteries
- Solar accessories
- Grid and off-grid solutions
- Product placeholders for images and pricing

### Contact Us (`contact.html`)
- Contact form (Name, Phone, Email, Message)
- Business contact information
- Map placeholder for Google Maps embed

## 🎨 Color Palette

- **Primary Yellow**: `#FFD700` - Used for accents, CTAs, and highlights
- **Primary Blue**: `#0066CC` - Used for headings and primary elements
- **Dark Blue**: `#004499` - Used for gradients and dark sections
- **White**: `#FFFFFF` - Background and text on dark sections
- **Light Gray**: `#F5F5F5` - Section backgrounds
- **Dark Gray**: `#333333` - Primary text color

## 🔧 Customization

### Updating Contact Information

1. **Phone Number**: Search for `+91-XXXXXXXXXX` in all HTML files and replace with your actual phone number
2. **Email**: Search for `info@kctraders.com` and replace with your actual email
3. **Address**: Update the address in `contact.html` under the contact info section

### Adding Google Maps

In `contact.html`, replace the map placeholder with your Google Maps embed code:

```html
<div class="map-container">
    <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
    </iframe>
</div>
```

### Adding Product Images

Replace the product image placeholders in `products.html`:

```html
<div class="product-image">
    <img src="path/to/your/image.jpg" alt="Product Name">
</div>
```

### Form Submission

The contact form currently shows an alert on submission. To make it functional:

1. **Option 1**: Use a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
2. **Option 2**: Integrate with your backend API
3. **Option 3**: Use server-side processing (PHP, Node.js, etc.)

Update the form action in `contact.html` and modify `js/contact.js` accordingly.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions for each page
- Proper heading hierarchy (H1, H2, H3)
- Alt text placeholders for images
- Descriptive link text
- Mobile-friendly viewport meta tag

## 📝 Notes

- All icons are from Font Awesome (loaded via CDN)
- The website uses modern CSS (Grid, Flexbox, CSS Variables)
- JavaScript is vanilla JS (no frameworks required)
- All pages share the same navigation and footer for consistency

## 🛠️ Future Enhancements

- Add actual product images
- Integrate with a backend for form submissions
- Add a blog section
- Implement a gallery for completed projects
- Add customer testimonials section
- Include a quote calculator

## 📞 Support

For questions or issues, please contact the development team.

---

**© 2024 K & C Traders. All rights reserved.**

