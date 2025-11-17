# How to Add Google Maps to Your Website

## Quick Steps to Get Your Google Maps Embed Code

### Method 1: Using Google Maps Website (Easiest)

1. **Open Google Maps**
   - Go to https://www.google.com/maps
   - Or search "Google Maps" in your browser

2. **Find Your Business Location**
   - Search for your business address in the search bar
   - Or navigate to your location manually

3. **Get the Embed Code**
   - Click the **"Share"** button (left sidebar or menu)
   - Select **"Embed a map"** tab
   - Choose your map size (Small, Medium, Large, or Custom)
   - Click **"Copy HTML"**

4. **Paste in Your Website**
   - Open `contact.html` in a text editor
   - Find the `<iframe>` tag in the Map Section (around line 136)
   - Replace the `src` attribute with your copied embed code's `src` value
   - Or replace the entire iframe tag with your copied code

### Method 2: Using Google My Business (If You Have a Business Listing)

1. **Go to Google My Business**
   - Visit https://www.google.com/business
   - Sign in and select your business

2. **Get Embed Code**
   - Go to your business profile
   - Click on the map
   - Click "Share" → "Embed a map"
   - Copy the code

---

## Example: What Your Code Should Look Like

**Before (Placeholder):**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769..."
    ...
></iframe>
```

**After (Your Location):**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LOCATION_CODE..."
    width="100%" 
    height="400" 
    style="border:0; border-radius: 10px;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="K & C Traders Location">
</iframe>
```

---

## Customization Options

### Change Map Size

In the Google Maps embed dialog, you can choose:
- **Small**: 400x300px
- **Medium**: 600x450px
- **Large**: 800x600px
- **Custom**: Set your own dimensions

Or manually edit the `height` attribute in the iframe:
```html
height="500"  <!-- Change this value -->
```

### Map Styles (Advanced)

You can customize the map appearance by adding parameters to the URL:
- `&maptype=roadmap` - Road map (default)
- `&maptype=satellite` - Satellite view
- `&maptype=hybrid` - Hybrid view
- `&zoom=15` - Zoom level (1-20)

Example:
```
src="https://www.google.com/maps/embed?pb=...&maptype=roadmap&zoom=15"
```

---

## Step-by-Step: Updating contact.html

1. **Get your embed code** from Google Maps (steps above)

2. **Open `contact.html`** in a code editor (VS Code, Notepad++, etc.)

3. **Find the map section** (around line 136):
   ```html
   <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
   ```

4. **Replace the `src` attribute** with your location's embed URL:
   ```html
   <iframe 
       src="YOUR_COPIED_EMBED_URL_HERE"
   ```

5. **Save the file** and refresh your browser

---

## Troubleshooting

### Map Not Showing?
- ✅ Check if the `src` URL is correct
- ✅ Make sure the URL starts with `https://www.google.com/maps/embed?pb=`
- ✅ Verify your internet connection
- ✅ Check browser console for errors (F12)

### Map Shows Wrong Location?
- ✅ Double-check the address you searched in Google Maps
- ✅ Make sure you copied the correct embed code
- ✅ Try getting a fresh embed code

### Map Too Small/Large?
- ✅ Adjust the `height` attribute in the iframe
- ✅ Or get a new embed code with different size from Google Maps

---

## Alternative: Using Google Maps API (Advanced)

If you need more control, you can use Google Maps JavaScript API:

1. Get an API key from: https://console.cloud.google.com/google/maps-apis
2. Add the API script to your HTML
3. Create a custom map with markers, custom styling, etc.

**Note:** This requires API key setup and some JavaScript knowledge.

---

## Quick Test

After adding your map:

1. Open `contact.html` in your browser
2. Scroll to the "Find Us" section
3. You should see your business location on the map
4. Try clicking and dragging to interact with the map

---

## Need Help?

- **Google Maps Help**: https://support.google.com/maps
- **Embed Maps Guide**: https://support.google.com/maps/answer/144361

---

**That's it! Your Google Maps should now be live on your website! 🗺️**

