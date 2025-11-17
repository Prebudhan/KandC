# Quick Guide: Add Your Google Maps Location

## Your Google Maps Link
**Link:** https://maps.app.goo.gl/R8AqDRotp9vE8rEc8

## Easy Steps to Get Embed Code:

### Method 1: Direct from Your Link (Recommended)

1. **Open your link in a browser:**
   - Click or paste: https://maps.app.goo.gl/R8AqDRotp9vE8rEc8
   - This will open Google Maps with your location

2. **Get the Embed Code:**
   - Click the **"Share"** button (usually in the left sidebar or top menu)
   - Select the **"Embed a map"** tab
   - Choose your preferred size (Medium or Large works well)
   - Click **"Copy HTML"**

3. **Update contact.html:**
   - Open `contact.html` in a text editor
   - Find the `<iframe>` tag (around line 136)
   - Replace the entire iframe tag with your copied code
   - OR just replace the `src` attribute value

### Method 2: Alternative Steps

1. Open: https://maps.app.goo.gl/R8AqDRotp9vE8rEc8
2. The link will redirect to Google Maps
3. Look for the "Share" icon/button
4. Click it → Select "Embed a map"
5. Copy the iframe code
6. Paste it in contact.html

## What to Replace in contact.html

**Find this section (around line 136-145):**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769..."
    ...
></iframe>
```

**Replace with your embed code** (it will look similar but with your location's coordinates)

## Quick Test

After updating:
1. Save `contact.html`
2. Refresh your browser at: http://localhost:8000/contact.html
3. Scroll to "Find Us" section
4. You should see your actual location on the map!

---

**That's it! Your map will be live! 🗺️**

