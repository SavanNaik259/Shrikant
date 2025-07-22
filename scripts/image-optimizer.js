// Smart Image Layout Optimizer
// Detects image aspect ratios and applies appropriate styling

class ImageLayoutOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.optimizeImages());
        } else {
            this.optimizeImages();
        }
    }

    optimizeImages() {
        const photoItems = document.querySelectorAll('.detail-photo-grid .photo-item');
        
        photoItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (!img) return;

            // Wait for image to load to get actual dimensions
            if (img.complete) {
                this.processImage(img, item, index);
            } else {
                img.addEventListener('load', () => {
                    this.processImage(img, item, index);
                });
            }
        });
    }

    processImage(img, container, index) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        
        // Classify image type based on aspect ratio
        const imageType = this.classifyImage(aspectRatio);
        
        // Apply appropriate styling based on image type and position
        this.applyOptimalStyling(container, imageType, index + 1);
    }

    classifyImage(aspectRatio) {
        if (aspectRatio > 1.5) {
            return 'wide'; // Very wide/landscape
        } else if (aspectRatio > 1.1) {
            return 'landscape'; // Slightly landscape
        } else if (aspectRatio > 0.9) {
            return 'square'; // Square-ish
        } else if (aspectRatio > 0.7) {
            return 'portrait'; // Slightly portrait
        } else {
            return 'tall'; // Very tall/portrait
        }
    }

    applyOptimalStyling(container, imageType, position) {
        const img = container.querySelector('img');
        
        // Remove existing optimization classes
        container.classList.remove('optimized-wide', 'optimized-landscape', 'optimized-square', 'optimized-portrait', 'optimized-tall');
        
        // Add new optimization class
        container.classList.add(`optimized-${imageType}`);
        
        // Special handling for full-width positions (4, 7, 10)
        const isFullWidth = [4, 7, 10].includes(position);
        
        if (isFullWidth && (imageType === 'wide' || imageType === 'landscape')) {
            // For wide images in full-width positions, use contain
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
        } else if (imageType === 'tall' || imageType === 'portrait') {
            // For tall images, ensure they don't get too cropped
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center top';
        } else {
            // Default behavior for square and normal landscape
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center';
        }
        
        // Adjust container height based on image type and position
        this.adjustContainerHeight(container, imageType, position);
    }

    adjustContainerHeight(container, imageType, position) {
        // Dynamic height adjustments based on image type and grid position
        let minHeight;
        
        switch (position) {
            case 1: // Large left photo
                minHeight = imageType === 'wide' ? '250px' : '280px';
                break;
            case 2:
            case 3: // Top right photos
                minHeight = imageType === 'tall' ? '150px' : '135px';
                break;
            case 4: // First full-width
                minHeight = imageType === 'wide' ? '120px' : imageType === 'tall' ? '160px' : '140px';
                break;
            case 5:
            case 6: // Middle row
                minHeight = imageType === 'tall' ? '180px' : '160px';
                break;
            case 7: // Second full-width
                minHeight = imageType === 'wide' ? '100px' : imageType === 'tall' ? '140px' : '120px';
                break;
            case 8:
            case 9: // Bottom row
                minHeight = imageType === 'tall' ? '180px' : '160px';
                break;
            case 10: // Final full-width
                minHeight = imageType === 'wide' ? '110px' : imageType === 'tall' ? '150px' : '130px';
                break;
            default:
                minHeight = '160px';
        }
        
        container.style.minHeight = minHeight;
    }
}

// Initialize the optimizer
new ImageLayoutOptimizer();