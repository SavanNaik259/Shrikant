// Contact Form Functionality
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitButton = this.form.querySelector('.submit-btn');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.setupPhonePrefix();
        this.setupDateInput();
    }

    setupPhonePrefix() {
        const phonePrefix = document.querySelector('.phone-prefix');
        const countryCodeSpan = document.querySelector('.country-code');
        const flagIcon = document.querySelector('.flag-icon');
        
        if (phonePrefix && countryCodeSpan && flagIcon) {
            // Country data
            const countries = [
                { code: '+91', name: 'India', flag: 'in' },
                { code: '+1', name: 'United States', flag: 'us' },
                { code: '+44', name: 'United Kingdom', flag: 'gb' },
                { code: '+86', name: 'China', flag: 'cn' },
                { code: '+81', name: 'Japan', flag: 'jp' },
                { code: '+49', name: 'Germany', flag: 'de' },
                { code: '+33', name: 'France', flag: 'fr' },
                { code: '+39', name: 'Italy', flag: 'it' },
                { code: '+7', name: 'Russia', flag: 'ru' },
                { code: '+55', name: 'Brazil', flag: 'br' }
            ];
            
            let currentCountryIndex = 0;
            
            phonePrefix.addEventListener('click', () => {
                // Cycle through countries
                currentCountryIndex = (currentCountryIndex + 1) % countries.length;
                const selectedCountry = countries[currentCountryIndex];
                
                // Update country code
                countryCodeSpan.textContent = selectedCountry.code;
                
                // Update flag based on country
                this.updateFlag(flagIcon, selectedCountry.flag);
                
                console.log(`Selected country: ${selectedCountry.name} (${selectedCountry.code})`);
            });
        }
    }

    updateFlag(flagElement, countryCode) {
        // Remove existing flag classes
        flagElement.className = 'flag-icon';
        
        // Apply specific flag styling based on country
        switch(countryCode) {
            case 'in': // India
                flagElement.style.background = 'linear-gradient(to bottom, #FF9933 33.33%, white 33.33%, white 66.66%, #138808 66.66%)';
                flagElement.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background-image: url(\'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z\' fill=\'%23000080\'/%3E%3C/svg%3E\'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>';
                break;
            case 'us': // United States
                flagElement.style.background = 'linear-gradient(to bottom, #B22234 0%, #B22234 7.69%, white 7.69%, white 15.38%, #B22234 15.38%, #B22234 23.07%, white 23.07%, white 30.76%, #B22234 30.76%, #B22234 38.45%, white 38.45%, white 46.14%, #B22234 46.14%, #B22234 53.83%, white 53.83%, white 61.52%, #B22234 61.52%, #B22234 69.21%, white 69.21%, white 76.9%, #B22234 76.9%, #B22234 84.59%, white 84.59%, white 92.28%, #B22234 92.28%, #B22234 100%)';
                flagElement.innerHTML = '<div style="position: absolute; top: 0; left: 0; width: 40%; height: 46.15%; background: #3C3B6E;"></div>';
                break;
            case 'gb': // United Kingdom
                flagElement.style.background = '#012169';
                flagElement.innerHTML = '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(90deg, transparent 40%, white 40%, white 60%, transparent 60%), linear-gradient(0deg, transparent 40%, white 40%, white 60%, transparent 60%); background-size: 100% 100%;"></div><div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%), linear-gradient(-45deg, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%);"></div>';
                break;
            default:
                // Default to India flag
                flagElement.style.background = 'linear-gradient(to bottom, #FF9933 33.33%, white 33.33%, white 66.66%, #138808 66.66%)';
                flagElement.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background-image: url(\'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z\' fill=\'%23000080\'/%3E%3C/svg%3E\'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>';
        }
    }

    setupDateInput() {
        const dateInput = document.getElementById('wedding-date');
        const dateLabel = document.querySelector('.date-label');
        const dateIcon = document.querySelector('.date-icon');
        
        if (dateInput && dateLabel) {
            // Handle date input changes
            dateInput.addEventListener('change', () => {
                if (dateInput.value) {
                    dateLabel.style.opacity = '0';
                } else {
                    dateLabel.style.opacity = '1';
                }
            });
            
            // Handle input events (for when field is cleared)
            dateInput.addEventListener('input', () => {
                if (dateInput.value) {
                    dateLabel.style.opacity = '0';
                } else {
                    dateLabel.style.opacity = '1';
                }
            });
            
            // Handle focus events
            dateInput.addEventListener('focus', () => {
                dateLabel.style.opacity = '0';
            });
            
            dateInput.addEventListener('blur', () => {
                if (!dateInput.value) {
                    dateLabel.style.opacity = '1';
                }
            });
            
            // Make calendar icon clickable
            if (dateIcon) {
                dateIcon.addEventListener('click', () => {
                    dateInput.focus();
                    if (dateInput.showPicker) {
                        dateInput.showPicker();
                    }
                });
            }
        }
    }



    async handleSubmit(e) {
        e.preventDefault();
        
        // Show loading state
        this.setSubmitButton('sending');
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateFormSubmission(data);
            
            // Show success state
            this.setSubmitButton('success');
            this.showSuccessMessage();
            
            // Reset form after delay
            setTimeout(() => {
                this.resetForm();
                this.setSubmitButton('default');
            }, 3000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.setSubmitButton('error');
            this.showErrorMessage();
            
            // Reset button after delay
            setTimeout(() => {
                this.setSubmitButton('default');
            }, 3000);
        }
    }

    async simulateFormSubmission(data) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success/failure for demo
                Math.random() > 0.1 ? resolve(data) : reject(new Error('Submission failed'));
            }, 2000);
        });
    }

    setSubmitButton(state) {
        const span = this.submitButton.querySelector('span');
        const icon = this.submitButton.querySelector('i');
        
        switch (state) {
            case 'sending':
                span.textContent = 'Sending...';
                icon.className = 'fas fa-spinner fa-spin';
                this.submitButton.disabled = true;
                break;
            case 'success':
                span.textContent = 'Message Sent!';
                icon.className = 'fas fa-check';
                this.submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                break;
            case 'error':
                span.textContent = 'Failed to Send';
                icon.className = 'fas fa-exclamation-triangle';
                this.submitButton.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                break;
            default:
                span.textContent = 'Send Message';
                icon.className = 'fas fa-paper-plane';
                this.submitButton.disabled = false;
                this.submitButton.style.background = 'linear-gradient(135deg, var(--accent-color), var(--accent-light))';
                break;
        }
    }

    showSuccessMessage() {
        // Create and show success notification
        const notification = document.createElement('div');
        notification.className = 'form-notification success';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 5000);
    }

    showErrorMessage() {
        // Create and show error notification
        const notification = document.createElement('div');
        notification.className = 'form-notification error';
        notification.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 5000);
    }

    resetForm() {
        this.form.reset();
        
        // Reset all labels
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.type !== 'date') {
                this.deactivateLabel(input);
            }
        });
    }
}

// Add notification styles to the page
const notificationStyles = `
    .form-notification {
        position: fixed;
        top: 2rem;
        right: 2rem;
        max-width: 400px;
        padding: 1.5rem;
        border-radius: 12px;
        color: white;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .form-notification.show {
        transform: translateX(0);
    }
    
    .form-notification.success {
        background: linear-gradient(135deg, #10b981, #059669);
    }
    
    .form-notification.error {
        background: linear-gradient(135deg, #ef4444, #dc2626);
    }
    
    .form-notification i {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .form-notification p {
        margin: 0;
        font-family: var(--font-secondary);
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    @media screen and (max-width: 480px) {
        .form-notification {
            top: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
        }
    }
`;

// Add styles to page
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});