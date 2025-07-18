# Wedding Photography Website

## Overview

This is a modern, elegant wedding photography website built with vanilla HTML, CSS, and JavaScript. The site features a sophisticated design with smooth animations, responsive layout, and professional aesthetic suitable for a wedding photographer's portfolio. The website now includes a complete About page with hero section and values presentation, plus a Contact page with an interactive form and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML/CSS/JavaScript implementation without any frameworks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Performance Optimized**: Minimal dependencies, optimized loading with preconnected fonts
- **Accessibility First**: Built-in keyboard navigation and screen reader support

### Design System
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Color Scheme**: Elegant wedding palette with cream/beige primary colors and gold accents
- **Layout**: CSS custom properties (variables) for consistent theming
- **Animations**: CSS transitions with cubic-bezier easing for smooth interactions

## Key Components

### Navigation System
- **Multi-Page Navigation**: Links between Home, About, and Contact pages
- **Sticky Navigation**: Scrolling effects with transparency changes
- **Mobile Menu**: Hamburger menu with smooth toggle animations
- **Active States**: Dynamic highlighting of current section
- **Smooth Scrolling**: JavaScript-powered section navigation

### Media Handling
- **Hero Video**: Background video with loading states and fallbacks
- **Image Gallery**: Portfolio section for showcasing photography work
- **Responsive Media**: Adaptive sizing across all device types
- **Background Images**: Elegant hero sections with blurred overlay effects

### Interactive Features
- **Scroll Effects**: Navbar appearance changes on scroll
- **Contact Form**: Floating label animations with form validation
- **Mobile Optimization**: Touch-friendly interactions and responsive breakpoints
- **Event Handling**: Comprehensive click, scroll, and resize event management
- **Form Notifications**: Success/error feedback system with animations

### About Page Features
- **Hero Section**: Blurred background with compelling messaging
- **Story Section**: Two-column layout with text and image placeholder
- **Values Grid**: Three-column showcase of approach and philosophy
- **Call-to-Action**: Elegant button leading to contact page

### Contact Page Features
- **Contact Form**: Five fields with floating label animations
- **Form Validation**: Real-time validation with visual feedback
- **Contact Information**: Email, phone, and location details
- **Social Media**: Instagram, YouTube, Facebook links
- **Response Promise**: 24-hour response commitment display

## Data Flow

### Client-Side Only
1. **Static Content Delivery**: HTML/CSS/JS served directly to browser
2. **Event-Driven Interactions**: JavaScript class-based architecture handles user interactions
3. **State Management**: Simple DOM manipulation for UI state changes
4. **No Backend Required**: Fully self-contained frontend application

### Performance Strategy
- **Font Optimization**: Preconnected Google Fonts for faster loading
- **CSS Organization**: Modular styles with CSS custom properties
- **JavaScript Structure**: Single main class with organized method separation

## External Dependencies

### CDN Resources
- **Google Fonts**: Playfair Display and Inter font families
- **Font Awesome**: Icon library for UI elements (version 6.4.0)
- **No Framework Dependencies**: Vanilla JavaScript implementation

### Browser Requirements
- **Modern Browser Support**: ES6+ features used
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Responsive Viewport**: Meta viewport tag for mobile optimization

## Deployment Strategy

### Static Hosting Ready
- **No Build Process**: Direct deployment of source files
- **CDN Compatible**: All external resources loaded via CDN
- **Platform Agnostic**: Works on any static hosting service
- **SEO Optimized**: Semantic HTML with meta descriptions

### Recommended Hosting
- **Static Site Hosts**: Netlify, Vercel, GitHub Pages
- **Traditional Web Servers**: Apache, Nginx
- **Content Delivery**: Works with any CDN setup

### Future Extensibility
- **Contact Form Integration**: Ready for backend contact form processing
- **CMS Integration**: Structure supports headless CMS addition
- **E-commerce Ready**: Architecture can accommodate booking/payment systems
- **Analytics Integration**: Easy to add Google Analytics or similar tracking

## Recent Changes (July 18, 2025)

### About Page Implementation
- Created complete About page with hero section featuring blurred background
- Added "Our Story" section with two-column layout
- Implemented "Our Approach" values grid with hover animations
- Designed call-to-action section linking to contact page
- Full responsive design across all device sizes

### Contact Page Implementation
- Built contact form with floating label animations
- Added five form fields: name, email, phone, wedding date, message
- Implemented form validation and submission handling
- Created contact information display with icons
- Added social media links section
- Included response time promise section
- Form notification system for success/error feedback

### Navigation Updates
- Updated main navigation to link to new About and Contact pages
- Maintained consistent navigation design across all pages
- Active page highlighting for better user experience

### CSS Architecture Expansion
- Added 500+ lines of styles for new pages
- Maintained consistent design system and color palette
- Responsive design patterns for tablet and mobile
- Hover animations and transition effects
- Form styling with focus states and validation feedback

### JavaScript Enhancement
- Created contact.js for form functionality
- Floating label animations for better UX
- Form submission simulation with loading states
- Success/error notification system
- Input validation and user feedback

The codebase is structured for easy maintenance and feature additions while maintaining the elegant, professional aesthetic essential for a wedding photography business.