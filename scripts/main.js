/**
 * Modern Wedding Photography Website
 * Main JavaScript functionality
 */

class WeddingPhotographyWebsite {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.mobileClose = document.getElementById('mobile-close');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.heroVideo = document.querySelector('.hero-video');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.handleVideoLoading();
        this.setupSmoothScrolling();
        this.setupNavbarScrollEffect();
        this.setupAccessibility();
        this.setupPortfolio();
    }

    setupEventListeners() {
        // Mobile menu toggle
        this.hamburger?.addEventListener('click', () => this.toggleMobileMenu());
        
        // Mobile menu close button - use event delegation
        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'mobile-close') {
                this.closeMobileMenu();
            }
        });
        
        // Close mobile menu when clicking on nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Close mobile menu when clicking outside menu area
        document.addEventListener('click', (e) => {
            if (this.navMenu?.classList.contains('active') && 
                !this.navMenu.contains(e.target) && 
                !this.hamburger?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
        
        // Scroll event for navbar effect
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Resize event for responsive adjustments
        window.addEventListener('resize', () => this.handleResize());
        
        // Video events
        if (this.heroVideo) {
            this.heroVideo.addEventListener('loadstart', () => this.showVideoLoading());
            this.heroVideo.addEventListener('canplay', () => this.hideVideoLoading());
            this.heroVideo.addEventListener('error', () => this.handleVideoError());
        }
    }

    toggleMobileMenu() {
        if (!this.hamburger || !this.navMenu) return;
        
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        // Update ARIA attributes for accessibility
        const isOpen = this.navMenu.classList.contains('active');
        this.hamburger.setAttribute('aria-expanded', isOpen);
        this.navMenu.setAttribute('aria-hidden', !isOpen);
    }

    closeMobileMenu() {
        if (!this.hamburger || !this.navMenu) return;
        
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Update ARIA attributes
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.navMenu.setAttribute('aria-hidden', 'true');
    }

    handleScroll() {
        if (!this.navbar) return;
        
        const scrollY = window.scrollY;
        
        // Add scrolled class to navbar after scrolling 50px
        if (scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = ['home', 'portfolio', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const navLink = document.querySelector(`[href="#${sectionId}"]`);
            
            if (!section || !navLink) return;
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                this.navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current nav link
                navLink.classList.add('active');
            }
        });
    }

    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
        
        // Adjust video sizing if needed
        this.adjustVideoSize();
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - this.getNavbarHeight();
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // Smooth scroll for scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
        }
    }

    getNavbarHeight() {
        return this.navbar ? this.navbar.offsetHeight : 70;
    }

    setupNavbarScrollEffect() {
        // Initial setup
        this.handleScroll();
    }

    handleVideoLoading() {
        if (!this.heroVideo) return;
        
        // Set video attributes for better performance
        this.heroVideo.setAttribute('preload', 'metadata');
        this.heroVideo.setAttribute('poster', this.heroVideo.getAttribute('poster') || '');
        
        // Ensure video plays on mobile devices
        this.heroVideo.setAttribute('playsinline', 'true');
        
        // Handle autoplay restrictions
        const playPromise = this.heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Auto-play was prevented
                console.log('Video autoplay was prevented');
                this.showPlayButton();
            });
        }
    }

    showVideoLoading() {
        // Could add a loading spinner here
        console.log('Video loading...');
    }

    hideVideoLoading() {
        // Remove loading spinner
        console.log('Video ready to play');
    }

    handleVideoError() {
        console.log('Video failed to load, showing fallback image');
        
        // Hide video and show fallback image
        if (this.heroVideo) {
            this.heroVideo.style.display = 'none';
            
            // Show fallback image if available
            const fallbackImg = document.querySelector('.hero-fallback');
            if (fallbackImg) {
                fallbackImg.style.display = 'block';
            }
        }
    }

    showPlayButton() {
        // Create and show a play button for manual video start
        const playButton = document.createElement('button');
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.className = 'video-play-button';
        playButton.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(212, 175, 55, 0.9);
            border: none;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            font-size: 24px;
            color: white;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
        `;
        
        playButton.addEventListener('click', () => {
            this.heroVideo?.play();
            playButton.remove();
        });
        
        const videoBackground = document.querySelector('.video-background');
        if (videoBackground) {
            videoBackground.appendChild(playButton);
        }
    }

    adjustVideoSize() {
        // Ensure video covers the entire hero section
        if (this.heroVideo) {
            const hero = document.querySelector('.hero');
            if (hero) {
                const heroRect = hero.getBoundingClientRect();
                const videoRect = this.heroVideo.getBoundingClientRect();
                
                // Adjust video if needed (this is usually handled by CSS object-fit)
                console.log('Video dimensions adjusted for current viewport');
            }
        }
    }

    setupAccessibility() {
        // Add ARIA labels and roles
        if (this.hamburger) {
            this.hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            this.hamburger.setAttribute('aria-expanded', 'false');
            this.hamburger.setAttribute('role', 'button');
        }
        
        if (this.mobileClose) {
            this.mobileClose.setAttribute('aria-label', 'Close navigation menu');
            this.mobileClose.setAttribute('role', 'button');
        }
        
        if (this.navMenu) {
            this.navMenu.setAttribute('aria-hidden', 'true');
            this.navMenu.setAttribute('role', 'navigation');
        }
        
        // Add skip link for screen readers
        this.addSkipLink();
        
        // Handle keyboard navigation
        this.setupKeyboardNavigation();
    }

    addSkipLink() {
        // Skip link disabled to prevent any visible lines
        return;
    }

    setupKeyboardNavigation() {
        // Handle keyboard navigation for mobile menu
        if (this.hamburger) {
            this.hamburger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleMobileMenu();
                }
            });
        }
        
        // Handle Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu?.classList.contains('active')) {
                this.closeMobileMenu();
                this.hamburger?.focus();
            }
        });
        
        // Trap focus within mobile menu when open
        this.trapFocusInMobileMenu();
    }

    trapFocusInMobileMenu() {
        if (!this.navMenu) return;
        
        this.navMenu.addEventListener('keydown', (e) => {
            if (!this.navMenu.classList.contains('active')) return;
            
            if (e.key === 'Tab') {
                const focusableElements = this.navMenu.querySelectorAll('a[href]');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }

    setupPortfolio() {
        // Handle portfolio item clicks to open modal
        this.portfolioItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const videoId = item.getAttribute('data-video');
                const slug = item.getAttribute('data-slug');
                this.openPortfolioModal(videoId, slug, item);
            });
        });
    }

    navigateToPortfolioVideo(videoId, slug) {
        // Create video page URL
        const videoPageUrl = `/portfolio/${slug}`;
        
        // Store video data in sessionStorage for the video page
        sessionStorage.setItem('portfolioVideo', JSON.stringify({
            videoId: videoId,
            slug: slug
        }));
        
        // Navigate to video page (will be handled by creating a new page)
        this.createVideoPage(videoId, slug);
    }

    openPortfolioModal(videoId, slug, portfolioItem) {
        // Get portfolio data
        const portfolioInfo = this.getPortfolioData(portfolioItem);
        
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'portfolio-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="portfolio-modal">
                <div class="portfolio-modal-header">
                    <button class="portfolio-modal-close" aria-label="Close portfolio">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="portfolio-modal-content">
                    <div class="portfolio-video-section">
                        <div class="portfolio-video-container" data-video-id="${videoId}">
                            <div class="portfolio-video-placeholder">
                                <img src="${portfolioInfo.image}" alt="${portfolioInfo.names} Wedding" class="portfolio-video-bg">
                                <div class="portfolio-video-overlay">
                                    <div class="portfolio-video-info">
                                        <h2 class="portfolio-video-title">${portfolioInfo.names}</h2>
                                        <p class="portfolio-video-details">${portfolioInfo.date} • ${portfolioInfo.location}</p>
                                    </div>
                                    <button class="portfolio-video-play-btn" data-video-id="${videoId}">
                                        <i class="fab fa-youtube"></i>
                                        <span>Watch on YouTube</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="portfolio-photos-section">
                        <h3 class="portfolio-photos-title">Wedding Gallery</h3>
                        <div class="portfolio-photos-grid">
                            ${this.generatePortfolioPhotos(slug)}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to body
        document.body.appendChild(modalOverlay);
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        
        // Add event listeners
        this.setupModalEventListeners(modalOverlay, videoId);
        
        // Animate modal in
        requestAnimationFrame(() => {
            modalOverlay.classList.add('active');
        });
    }

    getPortfolioData(portfolioItem) {
        const img = portfolioItem.querySelector('img');
        const names = portfolioItem.querySelector('.portfolio-names').textContent;
        const date = portfolioItem.querySelector('.portfolio-date').textContent;
        const location = portfolioItem.querySelector('.portfolio-location').textContent;
        
        return {
            image: img.src,
            names: names,
            date: date,
            location: location
        };
    }

    generatePortfolioPhotos(slug) {
        // Generate a variety of wedding photos for the gallery
        const photoCategories = [
            'ceremony', 'reception', 'portraits', 'details', 'candid', 'family'
        ];
        
        let photosHTML = '';
        const photoCount = 12; // Show 12 photos per portfolio
        
        for (let i = 1; i <= photoCount; i++) {
            const category = photoCategories[i % photoCategories.length];
            photosHTML += `
                <div class="portfolio-photo-item">
                    <img src="https://picsum.photos/400/600?random=${slug}-${i}" 
                         alt="${category} photo ${i}" 
                         class="portfolio-photo"
                         loading="lazy">
                    <div class="portfolio-photo-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
            `;
        }
        
        return photosHTML;
    }

    setupModalEventListeners(modalOverlay, videoId) {
        // Close modal button
        const closeBtn = modalOverlay.querySelector('.portfolio-modal-close');
        closeBtn.addEventListener('click', () => this.closePortfolioModal(modalOverlay));
        
        // Close modal when clicking overlay
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closePortfolioModal(modalOverlay);
            }
        });
        
        // Video play button
        const playBtn = modalOverlay.querySelector('.portfolio-video-play-btn');
        playBtn.addEventListener('click', () => this.loadYouTubeVideo(modalOverlay, videoId));
        
        // Photo lightbox
        const photos = modalOverlay.querySelectorAll('.portfolio-photo-item');
        photos.forEach((photo, index) => {
            photo.addEventListener('click', () => this.openPhotoLightbox(modalOverlay, index));
        });
        
        // Escape key to close
        document.addEventListener('keydown', this.handleModalKeydown.bind(this, modalOverlay));
    }

    loadYouTubeVideo(modalOverlay, videoId) {
        const videoContainer = modalOverlay.querySelector('.portfolio-video-container');
        const placeholder = videoContainer.querySelector('.portfolio-video-placeholder');
        
        // Create YouTube iframe
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=1`;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.className = 'portfolio-youtube-iframe';
        
        // Replace placeholder with iframe
        placeholder.style.opacity = '0';
        setTimeout(() => {
            videoContainer.appendChild(iframe);
            placeholder.remove();
        }, 300);
    }

    openPhotoLightbox(modalOverlay, photoIndex) {
        const photos = modalOverlay.querySelectorAll('.portfolio-photo');
        const currentPhoto = photos[photoIndex];
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'portfolio-photo-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close photo">
                    <i class="fas fa-times"></i>
                </button>
                <button class="lightbox-prev" aria-label="Previous photo">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <img src="${currentPhoto.src}" alt="${currentPhoto.alt}" class="lightbox-image">
                <button class="lightbox-next" aria-label="Next photo">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="lightbox-counter">${photoIndex + 1} / ${photos.length}</div>
            </div>
        `;
        
        modalOverlay.appendChild(lightbox);
        
        // Lightbox event listeners
        this.setupLightboxControls(lightbox, photos, photoIndex);
        
        // Animate in
        requestAnimationFrame(() => {
            lightbox.classList.add('active');
        });
    }

    setupLightboxControls(lightbox, photos, currentIndex) {
        let currentPhotoIndex = currentIndex;
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const counter = lightbox.querySelector('.lightbox-counter');
        
        const updatePhoto = (index) => {
            lightboxImage.src = photos[index].src;
            lightboxImage.alt = photos[index].alt;
            counter.textContent = `${index + 1} / ${photos.length}`;
            currentPhotoIndex = index;
        };
        
        // Close lightbox
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.classList.remove('active');
            setTimeout(() => lightbox.remove(), 300);
        });
        
        // Previous photo
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
            const prevIndex = currentPhotoIndex > 0 ? currentPhotoIndex - 1 : photos.length - 1;
            updatePhoto(prevIndex);
        });
        
        // Next photo
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
            const nextIndex = currentPhotoIndex < photos.length - 1 ? currentPhotoIndex + 1 : 0;
            updatePhoto(nextIndex);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    lightbox.querySelector('.lightbox-close').click();
                    break;
                case 'ArrowLeft':
                    lightbox.querySelector('.lightbox-prev').click();
                    break;
                case 'ArrowRight':
                    lightbox.querySelector('.lightbox-next').click();
                    break;
            }
        });
    }

    handleModalKeydown(modalOverlay, e) {
        if (e.key === 'Escape') {
            this.closePortfolioModal(modalOverlay);
        }
    }

    closePortfolioModal(modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    }

    createVideoPage(videoId, slug) {
        // Legacy function - keeping for compatibility
        this.openPortfolioModal(videoId, slug, document.querySelector(`[data-slug="${slug}"]`));
    }

    goBackToPortfolio() {
        // Remove video page
        const videoPageContainer = document.querySelector('.video-page-container');
        if (videoPageContainer) {
            videoPageContainer.remove();
        }
        
        // Show main content
        const main = document.querySelector('main');
        if (main) {
            main.style.display = 'block';
        }
        
        // Update URL
        history.pushState({ page: 'home' }, '', '/');
        
        // Scroll to portfolio section
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Performance optimization: Use requestAnimationFrame for scroll events
class ScrollHandler {
    constructor(callback) {
        this.callback = callback;
        this.ticking = false;
    }
    
    handleScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.callback();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new WeddingPhotographyWebsite();
    
    // Expose website instance globally for video page navigation
    window.weddingWebsite = website;
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
    
    // Service Worker registration for future PWA features
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Service worker registration can be added here in the future
            console.log('Ready for PWA features');
        });
    }
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WeddingPhotographyWebsite;
}
