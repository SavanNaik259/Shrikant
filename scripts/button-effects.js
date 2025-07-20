// Modern Button Effects and Interactions
class ModernButtonEffects {
    constructor() {
        this.submitButton = document.querySelector('.submit-btn');
        this.init();
    }

    init() {
        if (!this.submitButton) return;
        
        this.createParticleCanvas();
        this.setupButtonEvents();
        this.setupFormFieldEffects();
    }

    createParticleCanvas() {
        // Create canvas for particle effects
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1000';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupButtonEvents() {
        // Hover effect with particle burst
        this.submitButton.addEventListener('mouseenter', (e) => {
            this.createHoverParticles(e);
        });

        // Click effect with explosive particles
        this.submitButton.addEventListener('click', (e) => {
            this.createClickParticles(e);
        });

        // Animate particles
        this.animateParticles();
    }

    createHoverParticles(event) {
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: centerX + (Math.random() - 0.5) * 100,
                y: centerY + (Math.random() - 0.5) * 50,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1,
                decay: 0.02,
                size: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 60 + 30}, 70%, 60%)`,
                type: 'hover'
            });
        }
    }

    createClickParticles(event) {
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 30; i++) {
            const angle = (i / 30) * Math.PI * 2;
            const velocity = Math.random() * 8 + 4;
            
            this.particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                life: 1,
                decay: 0.015,
                size: Math.random() * 4 + 2,
                color: `hsl(${Math.random() * 40 + 320}, 80%, 70%)`,
                type: 'click'
            });
        }
    }

    animateParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            // Update particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // Gravity
            particle.life -= particle.decay;

            if (particle.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            // Draw particle
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        }

        requestAnimationFrame(() => this.animateParticles());
    }

    setupFormFieldEffects() {
        const formInputs = document.querySelectorAll('.form-input, .form-textarea');
        
        formInputs.forEach(input => {
            // Add ripple effect on focus
            input.addEventListener('focus', (e) => {
                this.createFocusRipple(e);
            });

            // Add typing particle effects
            input.addEventListener('input', (e) => {
                if (Math.random() < 0.3) { // 30% chance per keystroke
                    this.createTypingParticles(e);
                }
            });
        });
    }

    createFocusRipple(event) {
        const rect = event.target.getBoundingClientRect();
        const ripple = document.createElement('div');
        
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(211, 172, 126, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1';
        
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = rect.left + rect.width / 2 - size / 2 + 'px';
        ripple.style.top = rect.top + rect.height / 2 - size / 2 + 'px';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 600);
    }

    createTypingParticles(event) {
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + rect.width * 0.8;
        const y = rect.top + rect.height / 2;

        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 20,
                y: y + (Math.random() - 0.5) * 10,
                vx: (Math.random() - 0.5) * 2,
                vy: -Math.random() * 2 - 1,
                life: 1,
                decay: 0.03,
                size: Math.random() * 2 + 0.5,
                color: `hsl(${Math.random() * 60 + 30}, 60%, 70%)`,
                type: 'typing'
            });
        }
    }
}

// CSS Animation for ripple effect
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernButtonEffects();
});