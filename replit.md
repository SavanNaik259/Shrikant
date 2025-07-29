# Vedic Vows - South Indian Wedding Photography Website

## Overview
Vedic Vows is a specialized South Indian wedding photography platform that captures authentic traditions with modern artistry. Based in Bangalore, the website showcases expertise in Kannada, Tamil, Telugu, and Kerala-style weddings through sophisticated design and immersive digital storytelling.

## Technology Stack
- Advanced responsive HTML5/CSS3 design
- Glassmorphism and contemporary UI principles
- JavaScript for dynamic interactive elements
- Micro-interaction and animation frameworks
- Responsive image and performance optimization

## Project Architecture

### Current Features
- **Hero Section**: Video background with elegant overlay
- **Modern Trends Section**: Company description and philosophy
- **Portfolio Section**: Interactive grid showcasing wedding photography work
- **About Section**: Professional photographer introduction
- **Contact Section**: Modern floating label form with professional styling
- **Footer**: Contact information and social links

### Recent Changes (July 28, 2025)

#### Complete Portfolio Architecture Overhaul
- ✅ **Separate Portfolio System**: Completely removed portfolio from homepage, created dedicated portfolio.html page
- ✅ **Video-First Structure**: Each couple has dedicated video page as primary content destination
- ✅ **Separate Photo Galleries**: Individual photo gallery pages accessible via "View Photo Gallery" buttons
- ✅ **Navigation Refinement**: Logo positioned left, nav links centered on large devices
- ✅ **Contact Form Straightening**: Removed zigzag pattern, made all form inputs straight and center-aligned

#### Individual Video Pages Implementation
- ✅ **Dedicated Video Pages**: Created kavya-arjun-video.html, ananya-rohan-video.html, meera-karthik-video.html, lakshmi-aditya-video.html
- ✅ **YouTube Integration**: Direct YouTube iframe embedding for each couple's wedding video
- ✅ **View Photo Gallery Buttons**: Golden styled buttons with icons linking to photo galleries
- ✅ **Consistent Header Design**: Couple names, wedding details, and navigation buttons

#### Photo Gallery Pages System
- ✅ **Individual Photo Galleries**: Separate photo pages for each couple (kavya-arjun-photos.html, etc.)
- ✅ **Lightbox Functionality**: Full-screen photo viewing with navigation controls
- ✅ **Responsive Grid Layout**: 2-column mobile, 3-column desktop with varied aspect ratios
- ✅ **Navigation Between Pages**: Back to video and portfolio navigation buttons
- ✅ **Keyboard Controls**: Arrow keys and escape key support for lightbox navigation

#### Advanced Interactive Features
- **Modal Navigation**: Smooth animations with backdrop blur effects
- **Dynamic Content**: Each portfolio generates unique photo galleries
- **Performance Optimized**: Lazy loading for photos and on-demand YouTube video loading
- **Accessibility**: Full ARIA labels, keyboard navigation, and focus management

### Previous Changes (July 20, 2025)

#### Contact Form Complete Redesign (Final Implementation)
- ✅ **Minimalist Underline Design**: Implemented clean underline-style inputs matching exact screenshot design
- ✅ **Separate Form Background**: Added cream/beige background (#f5f3f0) for form while maintaining original section background
- ✅ **Golden Submit Button**: Simple golden button (#b8860b) with subtle hover effects as shown in screenshot
- ✅ **Enhanced Form Fields**: Added all required fields including location, days selector, and proper phone formatting
- ✅ **Phone Number Integration**: Added Indian flag, country code (+91), and WhatsApp number field
- ✅ **Date Input Enhancement**: Calendar icon and proper date field styling
- ✅ **Form Validation**: Proper name attributes for all input fields (name, email, phone, location, wedding-date, days, message)
- ✅ **Responsive Design**: Mobile-optimized layout with stacked phone inputs
- ✅ **Removed Complex Effects**: Eliminated floating animations and particles for clean minimalist approach

#### Design Improvements
- ✅ **Decorative Lines Removal**: Completely eliminated all decorative underlines from headings (portfolio, about, contact)
- ✅ **Footer Typography Enhancement**: Enhanced footer fonts with elegant Cormorant Garamond for headings and Inter for body text
- ✅ **Interactive Elements**: Added subtle hover animations and improved visual hierarchy across footer sections

#### Technical Implementation
- **Form Structure**: Clean minimalist design with underline borders
- **CSS Styling**: Simple transitions and golden color scheme
- **Input Types**: Text, email, tel, date, textarea, and select elements
- **Responsive Breakpoints**: Mobile-first approach with simplified phone group layout

## User Preferences
- **Design Style**: Professional and clean, avoiding overly fancy elements
- **Form Approach**: Modern floating labels with proper form validation
- **Button Design**: Clean and professional, not too elaborate
- **Responsiveness**: Mobile-first approach with seamless experience across devices

## File Structure
```
├── index.html                    # Main homepage (no portfolio section)
├── portfolio.html               # Dedicated portfolio page
├── kushiki-sandeep-video.html   # Kushiki & Sandeep video page
├── kushiki-sandeep-photos.html  # Kushiki & Sandeep photo gallery
├── kushiki-sandeep-detail-page.html # Kushiki & Sandeep detail page
├── himanshu-priyanka-video.html # Himanshu & Priyanka video page
├── himanshu-priyanka-photos.html # Himanshu & Priyanka photo gallery
├── himanshu-priyanka-detail-page.html # Himanshu & Priyanka detail page
├── alice-jai-video.html         # Alice & Jai video page
├── alice-jai-photos.html        # Alice & Jai photo gallery
├── alice-jai-detail-page.html   # Alice & Jai detail page
├── images/
│   ├── kushiki-sandeep/        # Kushiki & Sandeep wedding photos (17 images)
│   ├── himanshu-priyanka/      # Himanshu & Priyanka wedding photos (55 images)
│   └── alice-jai/              # Alice & Jai wedding photos (77 images)
├── styles/
│   └── main.css                # Main stylesheet with photo gallery and lightbox design
├── scripts/
│   ├── main.js                 # Core JavaScript functionality
│   ├── contact.js              # Contact form handling
│   └── button-effects.js       # Interactive particle effects
└── replit.md                   # Project documentation
```

## Current Status
The portfolio architecture has been completely restructured with separate video and photo pages for each couple. The homepage no longer contains portfolio content, instead linking to a dedicated portfolio page. All three couples (Kushiki & Sandeep, Himanshu & Priyanka, Alice & Jai) have individual video pages that showcase their wedding videos, with easy navigation to separate photo galleries featuring lightbox functionality and responsive design. The project now contains 149 total wedding photos across all three couples, organized in dedicated folders with professional naming and structure.

### Recent Updates (July 29, 2025)

#### First Couple Update (Kushiki & Sandeep)
- ✅ **Couple Name Update**: Changed first portfolio couple from "Kavya & Arjun" to "Kushiki & Sandeep" across all pages
- ✅ **Image Gallery Refresh**: Replaced old wedding photos (1000819xxx series) with new wedding photos (1000822689-1000822705 series) - 17 new images total
- ✅ **File Cleanup**: Removed old unused image files to optimize project structure
- ✅ **Image Organization**: Moved all wedding photos to `images/kushiki-sandeep/` folder for better organization
- ✅ **Path Updates**: Updated all image references across HTML files to use new organized folder structure
- ✅ **File Renaming**: Renamed all couple-specific files:
  - `kavya-arjun-photos.html` → `kushiki-sandeep-photos.html`
  - `kavya-arjun-video.html` → `kushiki-sandeep-video.html`
  - `kavya-arjun-detail-page.html` → `kushiki-sandeep-detail-page.html`

#### Second Couple Update (Himanshu & Priyanka)
- ✅ **Couple Name Update**: Changed second portfolio couple from "Ananya & Rohan" to "Himanshu & Priyanka" across all pages
- ✅ **Massive Image Gallery**: Added 55 new wedding photos (1000822738-1000822802 series) organized in `images/himanshu-priyanka/` folder
- ✅ **File Renaming**: Renamed all second couple files:
  - `ananya-rohan-photos.html` → `himanshu-priyanka-photos.html`
  - `ananya-rohan-video.html` → `himanshu-priyanka-video.html`
  - `ananya-rohan-detail-page.html` → `himanshu-priyanka-detail-page.html`
- ✅ **Complete Content Update**: Updated titles, descriptions, headers, and navigation across all pages
- ✅ **Portfolio Grid Update**: Updated portfolio thumbnail and couple information
- ✅ **JavaScript Navigation**: Added global functions for openVideoPage() and openPhotoGallery() with new couple mappings
- ✅ **Link Updates**: Updated internal navigation links and JavaScript functions to work with new filenames

#### Third Couple Update (Alice & Jai)
- ✅ **Couple Name Update**: Changed third portfolio couple from "Meera & Karthik" to "Alice & Jai" across all pages
- ✅ **Extensive Image Gallery**: Added 77 new wedding photos (1000822858-1000822953 series) organized in `images/alice-jai/` folder
- ✅ **File Renaming**: Renamed all third couple files:
  - `meera-karthik-photos.html` → `alice-jai-photos.html`
  - `meera-karthik-video.html` → `alice-jai-video.html`
  - `meera-karthik-detail-page.html` → `alice-jai-detail-page.html`
- ✅ **Complete Content Update**: Updated titles, descriptions, headers, and navigation across all pages
- ✅ **Portfolio Grid Update**: Updated portfolio thumbnail with new couple image and information
- ✅ **JavaScript Navigation**: Updated global functions for openVideoPage() and openPhotoGallery() with alice-jai mapping
- ✅ **File Organization**: Moved all 77 new images from root directory to organized `images/alice-jai/` folder
- ✅ **Old File Cleanup**: Removed old wedding photo files to optimize project structure

## Next Steps
- Consider adding form submission backend integration
- Potential SEO optimization
- Performance optimization for particle effects on lower-end devices