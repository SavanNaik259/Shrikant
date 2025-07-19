# Wedding Photography Website

## Project Overview
A modern, responsive wedding photographer website featuring an elegant, mobile-first design with sophisticated portfolio presentation and interactive user experience.

**Current State:** Single-page application with consolidated About and Contact sections

## Architecture
- **Frontend:** HTML5/CSS3 with responsive design
- **JavaScript:** Interactive portfolio elements and contact form
- **Layout:** Advanced CSS grid and flexbox layouts
- **Images:** Responsive image optimization
- **Animations:** Smooth scroll and transition animations
- **Structure:** Single-page design with navigation anchors

## Recent Changes
- **2025-01-19:** Consolidated all content into single index.html page
  - Moved About section from separate page to main index
  - Moved Contact section with form from separate page to main index
  - Updated navigation to use anchor links (#about, #contact)
  - Removed separate about.html and contact.html files
  - Added contact.js script for form functionality
  - Applied consistent #F0E9E0 background color across all sections
  - Styled "&" symbols in portfolio couples' names with golden accent
  - Updated scrollbar styling to match site background

## User Preferences
- Prefers single-page application structure
- Likes warm, elegant #F0E9E0 background color throughout
- Wants distinctive styling for "&" symbols in portfolio names
- Prefers consolidated content over separate pages

## Technical Notes
- CSS uses custom properties for consistent theming
- Portfolio grid has horizontal scrolling for better mobile experience
- Contact form includes validation and styling
- All background colors use var(--primary-color) for consistency
- Scrollbar styling applied globally and to portfolio grid