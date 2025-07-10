// About Section Appearing Animations Only
class AboutAnimations {
    constructor() {
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.hideAboutElements();
        this.setupIntersectionObserver();
    }

    hideAboutElements() {
        // Hide main content elements
        const elementsToHide = [
            '.section-title',
            '.section-subtitle', 
            '.about-card',
            '.info-card',
            '.journey-card',
            '.fun-facts-card',
            '.focus-card'
        ];

        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(`#about ${selector}`);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(80px) scale(0.9)';
            });
        });

        // Hide card components
        const cardComponents = [
            '.card-icon',
            '.text-block',
            '.info-avatar',
            '.stat-row',
            '.timeline-item',
            '.fact-item',
            '.learning-item'
        ];

        cardComponents.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateX(50px) scale(0.8)';
            });
        });
    }

    setupIntersectionObserver() {
        const aboutSection = document.querySelector('#about');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateSection();
                    this.hasAnimated = true;
                }
            });
        }, {
            threshold: 0.2
        });

        if (aboutSection) {
            observer.observe(aboutSection);
        }
    }

    animateSection() {
        this.animateHeader();
        this.animateMainContent();
        this.animateSidebar();
    }

    animateHeader() {
        anime({
            targets: '#about .section-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart'
        });

        anime({
            targets: '#about .section-subtitle',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 200
        });
    }

    animateMainContent() {
        // Main about cards with cool reveal effect
        const aboutCards = document.querySelectorAll('.about-main .about-card');
        aboutCards.forEach(card => {
            card.style.transform = 'translateX(-100px) scale(0.9) rotateY(15deg)';
            card.style.opacity = '0';
        });

        anime({
            targets: aboutCards,
            translateX: [-100, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            rotateY: [15, 0],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)',
            delay: anime.stagger(300, {start: 400})
        });

        // Text blocks within cards with wave effect
        setTimeout(() => {
            const textBlocks = document.querySelectorAll('.text-block');
            textBlocks.forEach(block => {
                block.style.transform = 'translateY(30px) scale(0.95)';
                block.style.opacity = '0';
            });

            anime({
                targets: textBlocks,
                translateY: [30, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 800,
                easing: 'easeOutBack',
                delay: anime.stagger(150, {start: 200})
            });
        }, 600);

        // Card icons with bounce effect
        setTimeout(() => {
            const cardIcons = document.querySelectorAll('.card-icon');
            cardIcons.forEach(icon => {
                icon.style.transform = 'scale(0) rotate(180deg)';
                icon.style.opacity = '0';
            });

            anime({
                targets: cardIcons,
                scale: [0, 1.2, 1],
                rotate: [180, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutBounce',
                delay: anime.stagger(200, {start: 400})
            });
        }, 400);
    }

    animateSidebar() {
        // Info card with slide and scale effect
        const infoCard = document.querySelector('.info-card');
        if (infoCard) {
            infoCard.style.transform = 'translateX(150px) scale(0.8) rotateY(-15deg)';
            infoCard.style.opacity = '0';
        }

        anime({
            targets: '.info-card',
            translateX: [150, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            rotateY: [-15, 0],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)',
            delay: 600
        });

        // Avatar with special effect
        setTimeout(() => {
            const avatar = document.querySelector('.info-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(0) rotate(360deg)';
                avatar.style.opacity = '0';
            }

            anime({
                targets: '.info-avatar',
                scale: [0, 1.1, 1],
                rotate: [360, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutElastic(1, .6)',
                delay: 200
            });
        }, 800);

        // Status indicator pulse
        setTimeout(() => {
            const statusIndicator = document.querySelector('.status-indicator');
            if (statusIndicator) {
                statusIndicator.style.transform = 'scale(0)';
                statusIndicator.style.opacity = '0';
            }

            anime({
                targets: '.status-indicator',
                scale: [0, 1.5, 1],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutBack',
                delay: 400
            });
        }, 1000);

        // Stats rows with typewriter effect
        setTimeout(() => {
            const statRows = document.querySelectorAll('.stat-row');
            statRows.forEach(row => {
                row.style.transform = 'translateX(50px) scale(0.9)';
                row.style.opacity = '0';
            });

            anime({
                targets: statRows,
                translateX: [50, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(120, {start: 600})
            });
        }, 1000);

        // Journey timeline with cascade effect
        setTimeout(() => {
            this.animateJourneyCard();
        }, 1200);

        // Fun facts with pop effect
        setTimeout(() => {
            this.animateFunFactsCard();
        }, 1400);

        // Learning progress with reveal
        setTimeout(() => {
            this.animateLearningCard();
        }, 1600);
    }

    animateJourneyCard() {
        const journeyCard = document.querySelector('.journey-card');
        if (journeyCard) {
            journeyCard.style.transform = 'translateY(80px) scale(0.9)';
            journeyCard.style.opacity = '0';
        }

        anime({
            targets: '.journey-card',
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutBack'
        });

        // Timeline items with stagger
        setTimeout(() => {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.transform = 'translateX(60px) scale(0.8)';
                item.style.opacity = '0';
            });

            anime({
                targets: timelineItems,
                translateX: [60, 0],
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                easing: 'easeOutBack',
                delay: anime.stagger(150, {start: 200})
            });

            // Timeline dots with bounce
            setTimeout(() => {
                const timelineDots = document.querySelectorAll('.timeline-dot');
                timelineDots.forEach(dot => {
                    dot.style.transform = 'scale(0)';
                    dot.style.opacity = '0';
                });

                anime({
                    targets: timelineDots,
                    scale: [0, 1.3, 1],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutBounce',
                    delay: anime.stagger(150, {start: 400})
                });
            }, 400);
        }, 300);
    }

    animateFunFactsCard() {
        const funFactsCard = document.querySelector('.fun-facts-card');
        if (funFactsCard) {
            funFactsCard.style.transform = 'translateY(80px) scale(0.9)';
            funFactsCard.style.opacity = '0';
        }

        anime({
            targets: '.fun-facts-card',
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutBack'
        });

        setTimeout(() => {
            const factItems = document.querySelectorAll('.fact-item');
            factItems.forEach(item => {
                item.style.transform = 'scale(0) rotate(180deg)';
                item.style.opacity = '0';
            });

            anime({
                targets: factItems,
                scale: [0, 1.1, 1],
                rotate: [180, 0],
                opacity: [0, 1],
                duration: 700,
                easing: 'easeOutElastic(1, .8)',
                delay: anime.stagger(150, {start: 300})
            });

            // Animate fact numbers after reveal
            setTimeout(() => {
                this.animateFactNumbers();
            }, 800);
        }, 300);
    }

    animateFactNumbers() {
        const factItems = document.querySelectorAll('.fact-item');
        
        factItems.forEach((item, index) => {
            const numberElement = item.querySelector('.fact-number');
            const originalText = numberElement.textContent;
            
            if (originalText.includes('+') && !originalText.includes('∞') && !originalText.includes('/')) {
                const targetNumber = parseInt(originalText.replace('+', ''));
                numberElement.textContent = '0+';
                
                anime({
                    targets: { count: 0 },
                    count: targetNumber,
                    duration: 1500,
                    easing: 'easeOutQuart',
                    update: function(anim) {
                        numberElement.textContent = Math.floor(anim.animatables[0].target.count) + '+';
                    }
                });
            }
        });
    }

    animateLearningCard() {
        const focusCard = document.querySelector('.focus-card');
        if (focusCard) {
            focusCard.style.transform = 'translateY(80px) scale(0.9)';
            focusCard.style.opacity = '0';
        }

        anime({
            targets: '.focus-card',
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutBack'
        });

        setTimeout(() => {
            const learningItems = document.querySelectorAll('.learning-item');
            learningItems.forEach(item => {
                item.style.transform = 'translateX(40px) scale(0.9)';
                item.style.opacity = '0';
            });

            anime({
                targets: learningItems,
                translateX: [40, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(100, {start: 300})
            });

            // Animate progress bars with delay
            setTimeout(() => {
                this.animateLearningProgress();
            }, 500);
        }, 300);
    }

    animateLearningProgress() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            const progress = bar.style.getPropertyValue('--progress');
            
            anime({
                targets: bar,
                '--progress': [0, progress],
                duration: 1000,
                easing: 'easeOutQuart',
                delay: index * 200
            });
        });
    }
}

// Initialize about animations
document.addEventListener('DOMContentLoaded', () => {
    new AboutAnimations();
});