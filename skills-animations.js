// Skills Section Appearing Animations Only
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

        // Animate category containers
        anime({
            targets: categories,
            translateY: [100, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            rotateX: [20, 0],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)',
            delay: anime.stagger(200, {start: 400})
        });

        // Animate category headers
        setTimeout(() => {
            const categoryHeaders = document.querySelectorAll('.category-header');
            categoryHeaders.forEach(header => {
                header.style.transform = 'scale(0.8) translateY(30px)';
                header.style.opacity = '0';
            });

            anime({
                targets: categoryHeaders,
                scale: [0.8, 1.1, 1],
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 700,
                easing: 'easeOutElastic(1, .6)',
                delay: anime.stagger(200, {start: 200})
            });
        }, 600);

        // Animate category icons
        setTimeout(() => {
            const categoryIcons = document.querySelectorAll('.category-header i');
            categoryIcons.forEach(icon => {
                icon.style.transform = 'scale(0) rotate(180deg)';
                icon.style.opacity = '0';
            });

            anime({
                targets: categoryIcons,
                scale: [0, 1.2, 1],
                rotate: [180, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutBounce',
                delay: anime.stagger(200, {start: 400})
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
            item.style.transform = 'translateX(80px) scale(0.9)';
            item.style.opacity = '0';
        });

        anime({
            targets: skillItems,
            translateX: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 700,
            easing: 'easeOutBack',
            delay: anime.stagger(100, {start: 200})
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
                
                // Now animate the progress bar
                anime({
                    targets: progressBar,
                    width: `${level}%`,
                    duration: 1200,
                    easing: 'easeOutQuart',
                    delay: index * 150
                });

                // Add a glow effect during animation
                anime({
                    targets: progressBar,
                    boxShadow: [
                        '0 0 0px rgba(59, 130, 246, 0)',
                        '0 0 20px rgba(59, 130, 246, 0.6)',
                        '0 0 0px rgba(59, 130, 246, 0)'
                    ],
                    duration: 1200,
                    easing: 'easeOutQuart',
                    delay: index * 150
                });
            }
        });
    }
}

// Initialize skills animations
document.addEventListener('DOMContentLoaded', () => {
    new SkillsAnimations();
});