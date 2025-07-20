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
            // Load countries data
            const countries = await this.loadCountriesData();
            
            let currentCountryIndex = 0;
            let dropdown = null;
            
            // Set initial flag (India)
            const indiaCountry = countries.find(country => country.code === 'IN') || countries[0];
            currentCountryIndex = countries.findIndex(country => country.code === 'IN');
            this.updateFlag(flagIcon, indiaCountry);
            
            phonePrefix.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle dropdown
                if (dropdown && dropdown.style.display === 'block') {
                    this.hideCountryDropdown(dropdown);
                } else {
                    dropdown = this.showCountryDropdown(phonePrefix, countries, (selectedCountry, index) => {
                        currentCountryIndex = index;
                        countryCodeSpan.textContent = selectedCountry.dialCode;
                        this.updateFlag(flagIcon, selectedCountry);
                        this.hideCountryDropdown(dropdown);
                        console.log(`Selected country: ${selectedCountry.name} (${selectedCountry.dialCode})`);
                    });
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (dropdown && !phonePrefix.contains(e.target) && !dropdown.contains(e.target)) {
                    this.hideCountryDropdown(dropdown);
                }
            });
        }
    }

    showCountryDropdown(parentElement, countries, onSelect) {
        // Remove existing dropdown
        const existingDropdown = document.querySelector('.country-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }

        // Create dropdown container
        const dropdown = document.createElement('div');
        dropdown.className = 'country-dropdown';
        
        // Create search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search country...';
        searchInput.className = 'country-search';
        
        // Create countries list
        const countriesList = document.createElement('div');
        countriesList.className = 'countries-list';
        
        // Function to render countries
        const renderCountries = (filteredCountries = countries) => {
            countriesList.innerHTML = '';
            filteredCountries.forEach((country, index) => {
                const countryItem = document.createElement('div');
                countryItem.className = 'country-item';
                
                countryItem.innerHTML = `
                    <div class="country-flag">
                        <img src="${country.flag}" alt="${country.name} flag" onerror="this.style.display='none';">
                    </div>
                    <span class="country-name">${country.name}</span>
                    <span class="country-dial-code">${country.dialCode}</span>
                `;
                
                countryItem.addEventListener('click', () => {
                    const originalIndex = countries.findIndex(c => c.code === country.code);
                    onSelect(country, originalIndex);
                });
                
                countriesList.appendChild(countryItem);
            });
        };
        
        // Initial render
        renderCountries();
        
        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredCountries = countries.filter(country => 
                country.name.toLowerCase().includes(searchTerm) ||
                country.dialCode.includes(searchTerm) ||
                country.code.toLowerCase().includes(searchTerm)
            );
            renderCountries(filteredCountries);
        });
        
        // Assemble dropdown
        dropdown.appendChild(searchInput);
        dropdown.appendChild(countriesList);
        
        // Position dropdown
        const rect = parentElement.getBoundingClientRect();
        dropdown.style.position = 'absolute';
        dropdown.style.top = (rect.bottom + window.scrollY + 5) + 'px';
        dropdown.style.left = rect.left + window.scrollX + 'px';
        dropdown.style.minWidth = '300px';
        dropdown.style.display = 'block';
        dropdown.style.zIndex = '9999';
        
        document.body.appendChild(dropdown);
        
        // Focus search input
        setTimeout(() => searchInput.focus(), 100);
        
        return dropdown;
    }

    hideCountryDropdown(dropdown) {
        if (dropdown) {
            dropdown.style.display = 'none';
            setTimeout(() => {
                if (dropdown.parentNode) {
                    dropdown.parentNode.removeChild(dropdown);
                }
            }, 200);
        }
    }

    async loadCountriesData() {
        // Comprehensive country data with major countries worldwide
        const countries = [
            { name: 'India', dialCode: '+91', code: 'IN' },
            { name: 'United States', dialCode: '+1', code: 'US' },
            { name: 'United Kingdom', dialCode: '+44', code: 'GB' },
            { name: 'Canada', dialCode: '+1', code: 'CA' },
            { name: 'Australia', dialCode: '+61', code: 'AU' },
            { name: 'Germany', dialCode: '+49', code: 'DE' },
            { name: 'France', dialCode: '+33', code: 'FR' },
            { name: 'Italy', dialCode: '+39', code: 'IT' },
            { name: 'Spain', dialCode: '+34', code: 'ES' },
            { name: 'Netherlands', dialCode: '+31', code: 'NL' },
            { name: 'Switzerland', dialCode: '+41', code: 'CH' },
            { name: 'Austria', dialCode: '+43', code: 'AT' },
            { name: 'Belgium', dialCode: '+32', code: 'BE' },
            { name: 'China', dialCode: '+86', code: 'CN' },
            { name: 'Japan', dialCode: '+81', code: 'JP' },
            { name: 'South Korea', dialCode: '+82', code: 'KR' },
            { name: 'Singapore', dialCode: '+65', code: 'SG' },
            { name: 'Hong Kong', dialCode: '+852', code: 'HK' },
            { name: 'Russia', dialCode: '+7', code: 'RU' },
            { name: 'Brazil', dialCode: '+55', code: 'BR' },
            { name: 'Mexico', dialCode: '+52', code: 'MX' },
            { name: 'Argentina', dialCode: '+54', code: 'AR' },
            { name: 'Chile', dialCode: '+56', code: 'CL' },
            { name: 'South Africa', dialCode: '+27', code: 'ZA' },
            { name: 'Nigeria', dialCode: '+234', code: 'NG' },
            { name: 'UAE', dialCode: '+971', code: 'AE' },
            { name: 'Saudi Arabia', dialCode: '+966', code: 'SA' },
            { name: 'Israel', dialCode: '+972', code: 'IL' },
            { name: 'Turkey', dialCode: '+90', code: 'TR' },
            { name: 'Thailand', dialCode: '+66', code: 'TH' },
            { name: 'Malaysia', dialCode: '+60', code: 'MY' },
            { name: 'Indonesia', dialCode: '+62', code: 'ID' },
            { name: 'Philippines', dialCode: '+63', code: 'PH' },
            { name: 'Vietnam', dialCode: '+84', code: 'VN' },
            { name: 'Pakistan', dialCode: '+92', code: 'PK' },
            { name: 'Bangladesh', dialCode: '+880', code: 'BD' },
            { name: 'Sri Lanka', dialCode: '+94', code: 'LK' },
            { name: 'Nepal', dialCode: '+977', code: 'NP' },
            { name: 'New Zealand', dialCode: '+64', code: 'NZ' },
            { name: 'Norway', dialCode: '+47', code: 'NO' },
            { name: 'Sweden', dialCode: '+46', code: 'SE' },
            { name: 'Denmark', dialCode: '+45', code: 'DK' },
            { name: 'Finland', dialCode: '+358', code: 'FI' },
            { name: 'Ireland', dialCode: '+353', code: 'IE' },
            { name: 'Greece', dialCode: '+30', code: 'GR' },
            { name: 'Portugal', dialCode: '+351', code: 'PT' },
            { name: 'Poland', dialCode: '+48', code: 'PL' },
            { name: 'Czech Republic', dialCode: '+420', code: 'CZ' },
            { name: 'Hungary', dialCode: '+36', code: 'HU' },
            { name: 'Romania', dialCode: '+40', code: 'RO' },
            { name: 'Bulgaria', dialCode: '+359', code: 'BG' }
        ];

        // Set flag URLs using reliable CDN
        countries.forEach(country => {
            country.flag = `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`;
        });

        // Sort countries alphabetically
        return countries.sort((a, b) => a.name.localeCompare(b.name));
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