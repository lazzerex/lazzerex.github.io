// Skills Section Appearing Animations Only - Smoother Version
class SkillsAnimations {
    constructor() {
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.hideSkillsElements();
        this.setupIntersectionObserver();
    }

    hideSkillsElements() {
        // Hide main skills elements
        const elementsToHide = [
            '#skills .section-title',
            '#skills .section-subtitle',
            '.skill-category'
        ];

        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(80px) scale(0.9)';
            });
        });

        // Hide skill components
        const skillComponents = [
            '.category-header',
            '.skill-item'
        ];

        skillComponents.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateX(50px) scale(0.8)';
            });
        });

        // Reset all skill progress bars to empty
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'none'; // Remove any CSS transitions
        });
    }

    setupIntersectionObserver() {
        const skillsSection = document.querySelector('#skills');
        
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

        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animateSection() {
        this.animateHeader();
        this.animateSkillCategories();
    }

    animateHeader() {
        anime({
            targets: '#skills .section-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart'
        });

        anime({
            targets: '#skills .section-subtitle',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 200
        });
    }

    animateSkillCategories() {
        const categories = document.querySelectorAll('.skill-category');
        
        // Reset category transforms
        categories.forEach(category => {
            category.style.transform = 'translateY(100px) scale(0.8) rotateX(20deg)';
            category.style.opacity = '0';
        });

        // Animate category containers with smoother easing
        anime({
            targets: categories,
            translateY: [100, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            rotateX: [20, 0],
            duration: 1200,
            easing: 'easeOutCubic',
            delay: anime.stagger(150, {start: 400})
        });

        // Animate category headers with gentler scaling
        setTimeout(() => {
            const categoryHeaders = document.querySelectorAll('.category-header');
            categoryHeaders.forEach(header => {
                header.style.transform = 'scale(0.8) translateY(20px)';
                header.style.opacity = '0';
            });

            anime({
                targets: categoryHeaders,
                scale: [0.8, 1.02, 1],
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 900,
                easing: 'easeOutQuart',
                delay: anime.stagger(150, {start: 200})
            });
        }, 600);

        // Animate category icons with much smoother motion
        setTimeout(() => {
            const categoryIcons = document.querySelectorAll('.category-header i');
            categoryIcons.forEach(icon => {
                icon.style.transform = 'scale(0) rotate(45deg)';
                icon.style.opacity = '0';
            });

            anime({
                targets: categoryIcons,
                scale: [0, 1.05, 1],
                rotate: [45, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuart',
                delay: anime.stagger(120, {start: 300})
            });
        }, 800);

        // Animate skill items
        setTimeout(() => {
            this.animateSkillItems();
        }, 1000);
    }

    animateSkillItems() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        // Reset skill items
        skillItems.forEach(item => {
            item.style.transform = 'translateX(60px) scale(0.95)';
            item.style.opacity = '0';
        });

        anime({
            targets: skillItems,
            translateX: [60, 0],
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 800,
            easing: 'easeOutQuart',
            delay: anime.stagger(80, {start: 200})
        });

        // Animate skill bars
        setTimeout(() => {
            this.animateSkillBars();
        }, 400);
    }

    animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            const progressBar = item.querySelector('.skill-progress');
            const level = parseInt(item.dataset.level);
            
            if (progressBar) {
                // Ensure progress bar starts at 0% and remove any transitions
                progressBar.style.width = '0%';
                progressBar.style.transition = 'none';
                
                // Force a reflow to ensure the reset takes effect
                progressBar.offsetWidth;
                
                // Now animate the progress bar with smoother easing
                anime({
                    targets: progressBar,
                    width: `${level}%`,
                    duration: 1400,
                    easing: 'easeOutCubic',
                    delay: index * 120
                });

                // Add a gentler glow effect during animation
                anime({
                    targets: progressBar,
                    boxShadow: [
                        '0 0 0px rgba(59, 130, 246, 0)',
                        '0 0 15px rgba(59, 130, 246, 0.4)',
                        '0 0 5px rgba(59, 130, 246, 0.2)'
                    ],
                    duration: 1400,
                    easing: 'easeOutCubic',
                    delay: index * 120
                });
            }
        });
    }
}

// Initialize skills animations
document.addEventListener('DOMContentLoaded', () => {
    new SkillsAnimations();
});