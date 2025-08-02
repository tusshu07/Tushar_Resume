# 🚀 How to Run Your Portfolio Website Locally

## 🎯 Quick Start (Recommended)

### Method 1: Using Python (Easiest)
```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# For Python 3.x (most common)
python -m http.server 8000

# For Python 2.x (if you have older Python)
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: **http://localhost:8000**

### Method 2: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to your project folder
cd /path/to/your/portfolio

# Start the server
http-server -p 8000
```

Then open your browser and go to: **http://localhost:8000**

### Method 3: Using PHP
```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# Start PHP server
php -S localhost:8000
```

Then open your browser and go to: **http://localhost:8000**

## 📁 Project Structure

Your portfolio folder should look like this:
```
portfolio/
├── index.html              # Main website file
├── styles.css              # All styling and animations
├── script.js               # Interactive functionality
├── README.md              # Documentation
├── HOW-TO-RUN-LOCALLY.md  # This file
├── resume.pdf             # Your resume (replace placeholder)
├── profile-photo.jpg      # Your photo (replace placeholder)
└── assets/                # (Optional) Additional images
```

## 🔧 Requirements

### Minimum Requirements:
- **Web Browser**: Chrome, Firefox, Safari, or Edge
- **Local Server**: Python, Node.js, or PHP (any one)
- **Internet Connection**: For external fonts and icons

### Recommended Setup:
- **Python 3.x** (comes pre-installed on Mac/Linux)
- **Modern Browser** (Chrome recommended for best experience)
- **Code Editor** (VS Code, Sublime Text, or any editor for customization)

## 🎨 Customization Steps

### 1. Replace Your Photo
- Add your professional photo as `profile-photo.jpg`
- Recommended size: 300x300 pixels or larger
- Square aspect ratio works best

### 2. Update Resume
- Replace `resume.pdf` with your actual resume
- Ensure it's named exactly `resume.pdf`

### 3. Update Project Links
- Edit `index.html` to add your actual GitHub repository links
- Update project demo links if you have live versions

### 4. Add Real Blog Posts (Optional)
- Update the blog section with your actual blog posts
- Add real links to your blog articles

## 🌐 Alternative Methods

### Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Using XAMPP/WAMP/MAMP
1. Install XAMPP, WAMP, or MAMP
2. Copy your portfolio folder to the `htdocs` or `www` directory
3. Start the server and visit `http://localhost/portfolio`

### Double-Click Method (Limited)
- You can double-click `index.html` to open in browser
- Some features might not work due to CORS restrictions
- Use local server methods above for full functionality

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your portfolio files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify (Free)
1. Drag and drop your portfolio folder to netlify.com
2. Get instant deployment with custom domain options

### Vercel (Free)
1. Connect your GitHub repository to Vercel
2. Automatic deployments on code changes

## 🎯 Testing Your Website

### Local Testing Checklist:
- [ ] Website loads without errors
- [ ] All navigation links work
- [ ] Animations play smoothly
- [ ] Contact form shows notifications
- [ ] Resume download works (or shows proper error)
- [ ] Mobile responsive design works
- [ ] All social media links are correct

### Cross-Browser Testing:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile Testing:
- [ ] Phone portrait mode
- [ ] Phone landscape mode
- [ ] Tablet view

## 🛠️ Troubleshooting

### Common Issues:

#### 1. Website doesn't load
- **Problem**: CORS errors or file not found
- **Solution**: Use a local server instead of opening HTML directly

#### 2. Images don't show
- **Problem**: Incorrect file paths or missing images
- **Solution**: Ensure `profile-photo.jpg` exists or placeholder will show

#### 3. Animations don't work
- **Problem**: JavaScript errors or missing files
- **Solution**: Check browser console for errors

#### 4. Styling looks broken
- **Problem**: CSS file not loading
- **Solution**: Ensure `styles.css` is in the same directory as `index.html`

#### 5. External fonts/icons don't load
- **Problem**: No internet connection
- **Solution**: Ensure you have internet access for CDN resources

## 📱 Mobile Testing

To test on mobile devices:
1. Start your local server
2. Find your computer's IP address
3. On your phone, go to: `http://YOUR_IP_ADDRESS:8000`

### Finding Your IP Address:
- **Windows**: `ipconfig` in Command Prompt
- **Mac/Linux**: `ifconfig` in Terminal

## 🎨 Performance Tips

### For Best Performance:
- Optimize images before adding them
- Use WebP format for better compression
- Minify CSS and JavaScript for production
- Enable gzip compression on your server

### For Development:
- Use browser dev tools to debug
- Test on different screen sizes
- Check console for any errors

## 🔒 Security Notes

- This is a static website (HTML/CSS/JS only)
- No server-side code or database required
- Safe to host on any static hosting service
- Contact form is client-side only (for demo purposes)

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Ensure all files are in the correct location
3. Try a different browser
4. Check your internet connection
5. Verify local server is running

## 🎉 Success!

Once everything is working:
- Your portfolio will be live at `http://localhost:8000`
- All animations and interactions will work smoothly
- You can share your local IP address for others to view
- Ready for deployment to any hosting service

---

**🚀 Enjoy your beautiful, professional portfolio website!** 