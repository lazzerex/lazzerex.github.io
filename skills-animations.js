// Skills Section Animations
class SkillsAnimations {
    constructor() {
        this.hasAnimated = false;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupInteractiveElements();
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
        this.animateCodeDemo();
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
        
        // Animate category containers
        anime({
            targets: categories,
            translateY: [80, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart',
            delay: anime.stagger(200, {start: 400})
        });

        // Animate category headers
        anime({
            targets: '.category-header',
            scale: [0.8, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(200, {start: 600})
        });

        // Animate category icons
        anime({
            targets: '.category-header i',
            scale: [0, 1],
            rotate: [180, 0],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(200, {start: 800})
        });

        // Animate skill items
        this.animateSkillItems();
    }

    animateSkillItems() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        anime({
            targets: skillItems,
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: anime.stagger(100, {start: 1000})
        });

        // Animate skill bars
        setTimeout(() => {
            this.animateSkillBars();
        }, 1200);
    }

    animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            const progressBar = item.querySelector('.skill-progress');
            const level = parseInt(item.dataset.level);
            
            if (progressBar) {
                anime({
                    targets: progressBar,
                    width: [`0%`, `${level}%`],
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

    animateCodeDemo() {
        const codeDemo = document.querySelector('#code-demo');
        if (!codeDemo) return;

        anime({
            targets: codeDemo,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuart',
            delay: 1800
        });

        // Animate editor components
        setTimeout(() => {
            this.animateEditorComponents();
        }, 2000);
    }

    animateEditorComponents() {
        // Editor header
        anime({
            targets: '.editor-header',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });

        // Editor tabs
        anime({
            targets: '.editor-tabs .tab',
            translateY: [-10, 0],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutQuart',
            delay: anime.stagger(100, {start: 200})
        });

        // Code content
        anime({
            targets: '.editor-content',
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            delay: 400
        });

        // Simulate typing animation
        setTimeout(() => {
            this.simulateTyping();
        }, 800);
    }

    simulateTyping() {
        const codeContent = document.querySelector('#code-content');
        if (!codeContent) return;

        const codeLines = [
            'const skills = {',
            '  frontend: ["Next.js", "React", "Flutter"],',
            '  backend: ["Laravel", "Node.js", "C#/.NET"],',
            '  database: ["MySQL", "Firebase", "SQLite"],',
            '  tools: ["Rust", "Git", "Vercel"]',
            '};',
            '',
            'skills.passion = "∞";',
            'console.log("Ready to build amazing things!");'
        ];

        let currentLine = 0;
        let currentChar = 0;

        const typeLine = () => {
            if (currentLine >= codeLines.length) {
                this.animateOutput();
                return;
            }

            const line = codeLines[currentLine];
            const displayText = codeContent.innerHTML + 
                (currentChar === 0 ? '<div class="code-line">' : '') +
                line.charAt(currentChar);

            codeContent.innerHTML = displayText;
            currentChar++;

            if (currentChar >= line.length) {
                codeContent.innerHTML += '</div>';
                currentLine++;
                currentChar = 0;
                setTimeout(typeLine, 200);
            } else {
                setTimeout(typeLine, 50);
            }
        };

        typeLine();
    }

    animateOutput() {
        const outputContent = document.querySelector('.output-content');
        if (!outputContent) return;

        setTimeout(() => {
            outputContent.innerHTML = '<div class="output-line">Ready to build amazing things!</div>';
            
            anime({
                targets: '.output-line',
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 500,
                easing: 'easeOutQuart'
            });
        }, 500);
    }

    setupInteractiveElements() {
        // Skill category hover effects
        const categories = document.querySelectorAll('.skill-category');
        
        categories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                anime({
                    targets: category,
                    scale: 1.02,
                    duration: 300,
                    easing: 'easeOutQuart'
                });

                // Highlight skill bars in this category
                const skillBars = category.querySelectorAll('.skill-progress');
                anime({
                    targets: skillBars,
                    filter: ['brightness(1)', 'brightness(1.2)'],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            category.addEventListener('mouseleave', () => {
                anime({
                    targets: category,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuart'
                });

                const skillBars = category.querySelectorAll('.skill-progress');
                anime({
                    targets: skillBars,
                    filter: ['brightness(1.2)', 'brightness(1)'],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });

        // Individual skill item hover effects
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                anime({
                    targets: item,
                    translateX: 10,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    anime({
                        targets: progressBar,
                        boxShadow: [
                            '0 0 0px rgba(59, 130, 246, 0)',
                            '0 0 15px rgba(59, 130, 246, 0.8)'
                        ],
                        duration: 200,
                        easing: 'easeOutQuart'
                    });
                }
            });

            item.addEventListener('mouseleave', () => {
                anime({
                    targets: item,
                    translateX: 0,
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    anime({
                        targets: progressBar,
                        boxShadow: [
                            '0 0 15px rgba(59, 130, 246, 0.8)',
                            '0 0 0px rgba(59, 130, 246, 0)'
                        ],
                        duration: 200,
                        easing: 'easeOutQuart'
                    });
                }
            });
        });

        // Run code button animation
        const runButton = document.querySelector('#run-code');
        if (runButton) {
            runButton.addEventListener('click', () => {
                anime({
                    targets: runButton,
                    scale: [1, 0.9, 1],
                    rotate: [0, 360],
                    duration: 600,
                    easing: 'easeOutBack'
                });

                // Re-run typing animation
                setTimeout(() => {
                    const codeContent = document.querySelector('#code-content');
                    if (codeContent) {
                        codeContent.innerHTML = '';
                        this.simulateTyping();
                    }
                }, 300);
            });
        }
    }

    // Method to replay animations (for interactive purposes)
    replayAnimations() {
        this.hasAnimated = false;
        this.animateSection();
    }
}

// Initialize skills animations
document.addEventListener('DOMContentLoaded', () => {
    new SkillsAnimations();
});