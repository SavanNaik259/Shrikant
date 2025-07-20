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

    async setupPhonePrefix() {
        const phonePrefix = document.querySelector('.phone-prefix');
        const countryCodeSpan = document.querySelector('.country-code');
        const flagIcon = document.querySelector('.flag-icon');
        
        if (phonePrefix && countryCodeSpan && flagIcon) {
            // Load countries data from REST Countries API
            const countries = await this.loadCountriesData();
            
            let currentCountryIndex = 0;
            
            // Set initial flag
            this.updateFlag(flagIcon, countries[currentCountryIndex]);
            
            phonePrefix.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Cycle through countries
                currentCountryIndex = (currentCountryIndex + 1) % countries.length;
                const selectedCountry = countries[currentCountryIndex];
                
                // Update country code
                countryCodeSpan.textContent = selectedCountry.dialCode;
                
                // Update flag
                this.updateFlag(flagIcon, selectedCountry);
                
                console.log(`Selected country: ${selectedCountry.name} (${selectedCountry.dialCode})`);
            });
        }
    }

    async loadCountriesData() {
        // Pre-defined country data with popular countries
        const popularCountries = [
            { name: 'India', dialCode: '+91', code: 'IN', flag: null },
            { name: 'United States', dialCode: '+1', code: 'US', flag: null },
            { name: 'United Kingdom', dialCode: '+44', code: 'GB', flag: null },
            { name: 'Germany', dialCode: '+49', code: 'DE', flag: null },
            { name: 'France', dialCode: '+33', code: 'FR', flag: null },
            { name: 'China', dialCode: '+86', code: 'CN', flag: null },
            { name: 'Japan', dialCode: '+81', code: 'JP', flag: null },
            { name: 'Italy', dialCode: '+39', code: 'IT', flag: null },
            { name: 'Russia', dialCode: '+7', code: 'RU', flag: null },
            { name: 'Brazil', dialCode: '+55', code: 'BR', flag: null },
            { name: 'Canada', dialCode: '+1', code: 'CA', flag: null },
            { name: 'Australia', dialCode: '+61', code: 'AU', flag: null },
            { name: 'South Korea', dialCode: '+82', code: 'KR', flag: null },
            { name: 'Spain', dialCode: '+34', code: 'ES', flag: null },
            { name: 'Netherlands', dialCode: '+31', code: 'NL', flag: null }
        ];

        try {
            // Try to fetch flag data from REST Countries API
            const response = await fetch('https://restcountries.com/v3.1/alpha?codes=' + 
                popularCountries.map(c => c.code.toLowerCase()).join(',') + '&fields=cca2,flag,flags');
            
            if (response.ok) {
                const apiData = await response.json();
                
                // Map API data to our countries
                popularCountries.forEach(country => {
                    const apiCountry = apiData.find(c => c.cca2 === country.code);
                    if (apiCountry) {
                        country.flag = apiCountry.flags?.svg || apiCountry.flags?.png;
                        country.emoji = apiCountry.flag;
                    }
                });
            }
        } catch (error) {
            console.log('Could not fetch flag data from API, using fallback flags');
        }

        // Set fallback flag URLs for countries without API data
        popularCountries.forEach(country => {
            if (!country.flag) {
                country.flag = `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`;
            }
        });

        return popularCountries;
    }

    updateFlag(flagElement, country) {
        // Clear existing styles and classes
        flagElement.className = 'flag-icon';
        flagElement.style.cssText = '';
        flagElement.innerHTML = '';
        
        if (country.flag) {
            // Create an image element for the flag
            const flagImg = document.createElement('img');
            flagImg.src = country.flag;
            flagImg.alt = `${country.name} flag`;
            flagImg.style.width = '100%';
            flagImg.style.height = '100%';
            flagImg.style.objectFit = 'cover';
            flagImg.style.borderRadius = '3px';
            
            // Handle image loading errors
            flagImg.onerror = () => {
                // Fallback to emoji flag or colored rectangle
                flagElement.innerHTML = country.emoji || '🏳️';
                flagElement.style.display = 'flex';
                flagElement.style.alignItems = 'center';
                flagElement.style.justifyContent = 'center';
                flagElement.style.fontSize = '12px';
            };
            
            flagElement.appendChild(flagImg);
        } else {
            // Fallback display
            flagElement.innerHTML = country.emoji || '🏳️';
            flagElement.style.display = 'flex';
            flagElement.style.alignItems = 'center';
            flagElement.style.justifyContent = 'center';
            flagElement.style.fontSize = '12px';
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