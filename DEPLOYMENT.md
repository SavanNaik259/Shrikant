# Deployment Guide

## Option 1: Netlify (Recommended)

### Method A: Static Site (Simple)
1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `npm install`
   - Publish directory: `.`
3. Deploy

**Note**: The 89MB video file may need to be hosted externally (YouTube, Vimeo, or cloud storage) and embedded instead for optimal performance.

### Method B: Netlify Functions (Full Node.js)
- Uses the `netlify.toml` and `netlify/functions/` setup I created
- Supports video streaming with range requests
- Better for large video files

## Option 2: Vercel
1. Import project from GitHub
2. Framework preset: Other
3. Build command: `npm install`
4. Output directory: `.`

## Option 3: GitHub Pages (Static only)
1. Enable GitHub Pages in repository settings
2. Source: Deploy from a branch (main)
3. Video will need external hosting

## Video Optimization Recommendations

For better performance across all platforms:

1. **Compress your video**: Use tools like HandBrake to reduce file size
2. **External hosting**: 
   - Upload to YouTube/Vimeo and embed
   - Use cloud storage (AWS S3, Cloudinary) with CDN
3. **Multiple formats**: Provide WebM and MP4 formats

## Current Setup
- Node.js Express server with video streaming
- Responsive design optimized for all devices  
- Transparent navigation overlay
- Clean contact form design
- Portfolio section with hover effects

## Files Ready for Deployment
- ✅ `netlify.toml` - Netlify configuration
- ✅ `_redirects` - Simple redirect rules
- ✅ `server.js` - Node.js server
- ✅ `package.json` - Dependencies
- ✅ All assets and styles organized