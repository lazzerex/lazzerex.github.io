// Contact Section Animations
class ContactAnimations {
    constructor() {
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.hideContactElements();
        this.setupIntersectionObserver();
        this.setupInteractiveElements();
    }

    hideContactElements() {
        // Hide all contact elements initially
        const elementsToHide = [
            '.contact-hub h3',
            '.contact-intro',
            '.contact-method',
            '.contact-cta'
        ];

        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px)';
            });
        });

        // Hide method components
        const methodComponents = [
            '.method-icon',
            '.method-info h4',
            '.method-info p',
            '.method-btn'
        ];

        methodComponents.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateX(30px)';
            });
        });
    }

    setupIntersectionObserver() {
        const contactSection = document.querySelector('#contact');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateSection();
                    this.hasAnimated = true;
                }
            });
        }, {
            threshold: 0.3
        });

        if (contactSection) {
            observer.observe(contactSection);
        }
    }

    animateSection() {
        this.animateContactHub();
        this.animateContactMethods();
        this.animateContactCTA();
    }

    animateContactHub() {
        anime({
            targets: '.contact-hub h3',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart'
        });

        anime({
            targets: '.contact-intro',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 200
        });
    }

    animateContactMethods() {
        const contactMethods = document.querySelectorAll('.contact-method');
        
        anime({
            targets: contactMethods,
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 800,
            easing: 'easeOutBack',
            delay: anime.stagger(150, {start: 400})
        });

        // Animate method components with delay
        setTimeout(() => {
            this.animateMethodComponents();
        }, 300);
    }

    animateMethodComponents() {
        // Method icons - reset initial transform and animate
        const methodIcons = document.querySelectorAll('.method-icon');
        methodIcons.forEach(icon => {
            icon.style.transform = 'scale(0) rotate(180deg)';
            icon.style.opacity = '0';
        });

        anime({
            targets: methodIcons,
            scale: [0, 1],
            rotate: [180, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(100, {start: 200})
        });

        // Method info - reset and animate
        const methodTitles = document.querySelectorAll('.method-info h4');
        methodTitles.forEach(title => {
            title.style.transform = 'translateX(30px)';
            title.style.opacity = '0';
        });

        anime({
            targets: methodTitles,
            translateX: [30, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart',
            delay: anime.stagger(100, {start: 400})
        });

        const methodDescriptions = document.querySelectorAll('.method-info p');
        methodDescriptions.forEach(desc => {
            desc.style.transform = 'translateX(20px)';
            desc.style.opacity = '0';
        });

        anime({
            targets: methodDescriptions,
            translateX: [20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart',
            delay: anime.stagger(100, {start: 500})
        });

        // Method buttons - reset and animate
        const methodButtons = document.querySelectorAll('.method-btn');
        methodButtons.forEach(btn => {
            btn.style.transform = 'translateY(20px) scale(0.9)';
            btn.style.opacity = '0';
        });

        anime({
            targets: methodButtons,
            translateY: [20, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            easing: 'easeOutBack',
            delay: anime.stagger(100, {start: 600})
        });
    }

    animateContactCTA() {
        const cta = document.querySelector('.contact-cta');
        if (cta) {
            cta.style.transform = 'translateY(40px)';
            cta.style.opacity = '0';
        }

        anime({
            targets: '.contact-cta',
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 1000
        });
    }

    setupInteractiveElements() {
        // Contact method hover animations
        const contactMethods = document.querySelectorAll('.contact-method');
        
        contactMethods.forEach(method => {
            method.addEventListener('mouseenter', () => {
                anime({
                    targets: method,
                    scale: 1.05,
                    translateY: -5,
                    duration: 300,
                    easing: 'easeOutQuart'
                });

                // Icon animation
                const icon = method.querySelector('.method-icon i');
                if (icon) {
                    anime({
                        targets: icon,
                        scale: 1.2,
                        rotate: [0, 10, 0],
                        duration: 400,
                        easing: 'easeOutBack'
                    });
                }

                // Add glow effect
                anime({
                    targets: method,
                    boxShadow: [
                        '0 5px 15px rgba(0, 0, 0, 0.1)',
                        '0 15px 30px rgba(59, 130, 246, 0.2)'
                    ],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            method.addEventListener('mouseleave', () => {
                anime({
                    targets: method,
                    scale: 1,
                    translateY: 0,
                    duration: 300,
                    easing: 'easeOutQuart'
                });

                const icon = method.querySelector('.method-icon i');
                if (icon) {
                    anime({
                        targets: icon,
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutQuart'
                    });
                }

                anime({
                    targets: method,
                    boxShadow: [
                        '0 15px 30px rgba(59, 130, 246, 0.2)',
                        '0 5px 15px rgba(0, 0, 0, 0.1)'
                    ],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });

        // Method button animations
        const methodButtons = document.querySelectorAll('.method-btn');
        
        methodButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                anime({
                    targets: button,
                    scale: 1.05,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                // Icon animation
                const icon = button.querySelector('i');
                if (icon) {
                    anime({
                        targets: icon,
                        translateX: 3,
                        duration: 200,
                        easing: 'easeOutQuart'
                    });
                }
            });

            button.addEventListener('mouseleave', () => {
                anime({
                    targets: button,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                const icon = button.querySelector('i');
                if (icon) {
                    anime({
                        targets: icon,
                        translateX: 0,
                        duration: 200,
                        easing: 'easeOutQuart'
                    });
                }
            });

            // Click animation
            button.addEventListener('click', () => {
                anime({
                    targets: button,
                    scale: [1, 0.95, 1],
                    duration: 300,
                    easing: 'easeOutQuart'
                });

                // Success feedback animation
                this.showSuccessFeedback(button);
            });
        });

        // Contact CTA pulse animation
        this.setupCTAPulse();
    }

    showSuccessFeedback(button) {
        const originalText = button.innerHTML;
        const methodType = button.closest('.contact-method').dataset.method;
        
        let successText = '';
        let successIcon = '';
        
        switch(methodType) {
            case 'email':
                successText = 'Email Copied!';
                successIcon = 'fas fa-check';
                break;
            case 'discord':
                successText = 'Username Copied!';
                successIcon = 'fas fa-check';
                break;
            case 'github':
                successText = 'Opening GitHub...';
                successIcon = 'fas fa-external-link-alt';
                break;
            default:
                successText = 'Success!';
                successIcon = 'fas fa-check';
        }

        // Change button content with animation
        anime({
            targets: button,
            scale: [1, 0.9],
            duration: 150,
            easing: 'easeInQuart',
            complete: () => {
                button.innerHTML = `<span>${successText}</span><i class="${successIcon}"></i>`;
                
                anime({
                    targets: button,
                    scale: [0.9, 1],
                    backgroundColor: ['', '#10b981'],
                    duration: 200,
                    easing: 'easeOutBack'
                });

                // Revert after delay
                setTimeout(() => {
                    anime({
                        targets: button,
                        scale: [1, 0.9],
                        duration: 150,
                        easing: 'easeInQuart',
                        complete: () => {
                            button.innerHTML = originalText;
                            
                            anime({
                                targets: button,
                                scale: [0.9, 1],
                                backgroundColor: ['#10b981', ''],
                                duration: 200,
                                easing: 'easeOutBack'
                            });
                        }
                    });
                }, 2000);
            }
        });
    }

    setupCTAPulse() {
        const cta = document.querySelector('.contact-cta');
        if (!cta) return;

        // Subtle pulse animation
        anime({
            targets: cta,
            scale: [1, 1.02, 1],
            duration: 3000,
            loop: true,
            easing: 'easeInOutSine',
            delay: 2000
        });
    }

    // Method to create floating particles effect
    createFloatingParticles() {
        const contactSection = document.querySelector('#contact');
        if (!contactSection) return;

        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                z-index: 1;
            `;
            
            contactSection.appendChild(particle);

            anime({
                targets: particle,
                translateX: () => anime.random(-200, 200),
                translateY: () => anime.random(-100, -300),
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                duration: () => anime.random(3000, 6000),
                delay: () => anime.random(0, 3000),
                loop: true,
                easing: 'easeOutQuart'
            });
        }
    }

    // Method to replay animations
    replayAnimations() {
        this.hasAnimated = false;
        this.animateSection();
    }
}

// Initialize contact animations
document.addEventListener('DOMContentLoaded', () => {
    const contactAnimations = new ContactAnimations();
    
    // Create floating particles after a delay
    setTimeout(() => {
        contactAnimations.createFloatingParticles();
    }, 3000);
});