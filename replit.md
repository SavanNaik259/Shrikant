# Wedding Photography Website

## Overview

This is a modern, elegant wedding photography website built with vanilla HTML, CSS, and JavaScript. The site features a sophisticated design with smooth animations, responsive layout, and professional aesthetic suitable for a wedding photographer's portfolio.

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
- **Sticky Navigation**: Scrolling effects with transparency changes
- **Mobile Menu**: Hamburger menu with smooth toggle animations
- **Active States**: Dynamic highlighting of current section
- **Smooth Scrolling**: JavaScript-powered section navigation

### Media Handling
- **Hero Video**: Background video with loading states and fallbacks
- **Image Gallery**: Portfolio section for showcasing photography work
- **Responsive Media**: Adaptive sizing across all device types

### Interactive Features
- **Scroll Effects**: Navbar appearance changes on scroll
- **Mobile Optimization**: Touch-friendly interactions and responsive breakpoints
- **Event Handling**: Comprehensive click, scroll, and resize event management

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

The codebase is structured for easy maintenance and feature additions while maintaining the elegant, professional aesthetic essential for a wedding photography business.