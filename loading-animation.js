/**
 * Awesome Loading Animation with Anime.js
 * Integration file for Lazzerex Portfolio
 */

class AwesomeLoader {
    constructor() {
        this.progress = 0;
        this.loadingTexts = [
            "Initializing awesome experience...",
            "Loading creative components...",
            "Preparing interactive elements...",
            "Compiling digital magic...",
            "Almost ready to explore..."
        ];
        this.currentTextIndex = 0;
        this.isComplete = false;
        
        // Bind methods
        this.init = this.init.bind(this);
        this.start = this.start.bind(this);
        this.complete = this.complete.bind(this);
    }

    init() {
        // Create loading screen if it doesn't exist
        if (!document.getElementById('awesome-loading-screen')) {
            this.createLoadingScreen();
        }
        
        this.createParticles();
        return this;
    }

    createLoadingScreen() {
        const loadingHTML = `
            <div id="awesome-loading-screen" class="awesome-loading-screen">
                <!-- Background Particles -->
                <div class="awesome-bg-particles" id="awesomeBgParticles"></div>

                <!-- Floating Elements -->
                <div class="awesome-floating-elements">
                    <div class="awesome-floating-element code">⚡</div>
                    <div class="awesome-floating-element design">🎨</div>
                    <div class="awesome-floating-element game">🎮</div>
                    <div class="awesome-floating-element code">💻</div>
                    <div class="awesome-floating-element design">✨</div>
                    <div class="awesome-floating-element game">🚀</div>
                </div>

                <!-- Main Loading Container -->
                <div class="awesome-loading-container">
                    <!-- Logo Animation -->
                    <div class="awesome-logo-container">
                        <div class="awesome-logo-circle awesome-logo-circle-1"></div>
                        <div class="awesome-logo-circle awesome-logo-circle-2"></div>
                        <div class="awesome-logo-circle awesome-logo-circle-3"></div>
                        <div class="awesome-logo-text">LX</div>
                    </div>

                    <!-- Code Animation -->
                    <div class="awesome-code-container">
                        <div class="awesome-code-header">
                            <div class="awesome-code-dot red"></div>
                            <div class="awesome-code-dot yellow"></div>
                            <div class="awesome-code-dot green"></div>
                        </div>
                        <div class="awesome-code-content">
                            <div class="awesome-code-line">
                                <span class="keyword">&lt;developer&gt;</span>
                            </div>
                            <div class="awesome-code-line">
                                &nbsp;&nbsp;<span class="variable">passion</span> = 
                                <span class="keyword">true</span>;
                            </div>
                            <div class="awesome-code-line">
                                &nbsp;&nbsp;<span class="variable">creativity</span><span class="keyword">++</span>;
                            </div>
                            <div class="awesome-code-line">
                                <span class="keyword">&lt;/developer&gt;</span>
                            </div>
                        </div>
                    </div>

                    <!-- Loading Percentage -->
                    <div class="awesome-loading-percentage" id="awesomeLoadingPercentage">0%</div>

                    <!-- Progress Bar -->
                    <div class="awesome-progress-container">
                        <div class="awesome-progress-bar" id="awesomeProgressBar"></div>
                    </div>

                    <!-- Loading Text -->
                    <div class="awesome-loading-text" id="awesomeLoadingText">Initializing awesome experience...</div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', loadingHTML);
        this.injectStyles();
    }

    injectStyles() {
        const styles = `
            <style id="awesome-loading-styles">
                .awesome-loading-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 99999;
                    overflow: hidden;
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .awesome-loading-screen.hide {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }

                .awesome-bg-particles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .awesome-bg-particles .particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(59, 130, 246, 0.6);
                    border-radius: 50%;
                }

                .awesome-loading-container {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                }

                .awesome-logo-container {
                    position: relative;
                    width: 120px;
                    height: 120px;
                }

                .awesome-logo-circle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border: 3px solid transparent;
                    border-radius: 50%;
                }

                .awesome-logo-circle-1 {
                    width: 120px;
                    height: 120px;
                    border-color: #3b82f6;
                }

                .awesome-logo-circle-2 {
                    width: 90px;
                    height: 90px;
                    border-color: #8b5cf6;
                }

                .awesome-logo-circle-3 {
                    width: 60px;
                    height: 60px;
                    border-color: #10b981;
                }

                .awesome-logo-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 2rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    opacity: 0;
                }

                .awesome-code-container {
                    position: relative;
                    width: 600px;
                    height: 200px;
                    background: rgba(15, 15, 15, 0.8);
                    border-radius: 12px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .awesome-code-header {
                    height: 30px;
                    background: rgba(45, 45, 48, 0.8);
                    display: flex;
                    align-items: center;
                    padding: 0 12px;
                    gap: 6px;
                }

                .awesome-code-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    opacity: 0;
                }

                .awesome-code-dot.red { background: #ff5f57; }
                .awesome-code-dot.yellow { background: #ffbd2e; }
                .awesome-code-dot.green { background: #28ca42; }

                .awesome-code-content {
                    padding: 20px;
                    font-family: 'Monaco', 'Menlo', monospace;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #d4d4d4;
                }

                .awesome-code-line {
                    margin-bottom: 8px;
                    opacity: 0;
                    transform: translateX(-20px);
                }

                .awesome-code-content .keyword { color: #569cd6; }
                .awesome-code-content .string { color: #ce9178; }
                .awesome-code-content .variable { color: #9cdcfe; }
                .awesome-code-content .comment { color: #6a9955; }

                .awesome-progress-container {
                    width: 300px;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                    position: relative;
                }

                .awesome-progress-bar {
                    height: 100%;
                    width: 0%;
                    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981);
                    border-radius: 3px;
                    position: relative;
                }

                .awesome-progress-bar::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    transform: translateX(-100%);
                    animation: awesomeShimmer 1.5s infinite;
                }

                @keyframes awesomeShimmer {
                    100% { transform: translateX(200%); }
                }

                .awesome-loading-text {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #ffffff;
                    opacity: 0;
                    transform: translateY(20px);
                }

                .awesome-loading-percentage {
                    font-size: 2rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    opacity: 0;
                    transform: scale(0.8);
                }

                .awesome-floating-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .awesome-floating-element {
                    position: absolute;
                    opacity: 0;
                    font-size: 2rem;
                }

                .awesome-floating-element.code { 
                    color: #3b82f6; 
                    top: 20%; 
                    left: 10%;
                }
                .awesome-floating-element.design { 
                    color: #8b5cf6; 
                    top: 60%; 
                    right: 15%;
                }
                .awesome-floating-element.game { 
                    color: #10b981; 
                    bottom: 30%; 
                    left: 20%;
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .awesome-code-container {
                        width: 90%;
                        max-width: 420px;
                        height: 140px;
                    }

                    .awesome-progress-container {
                        width: 250px;
                    }

                    .awesome-logo-container {
                        width: 100px;
                        height: 100px;
                    }

                    .awesome-logo-circle-1 { width: 100px; height: 100px; }
                    .awesome-logo-circle-2 { width: 75px; height: 75px; }
                    .awesome-logo-circle-3 { width: 50px; height: 50px; }

                    .awesome-logo-text {
                        font-size: 1.5rem;
                    }

                    .awesome-loading-percentage {
                        font-size: 1.5rem;
                    }

                    .awesome-code-content {
                        padding: 16px;
                        font-size: 0.9rem;
                    }
                }
            </style>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
    }

    createParticles() {
        const container = document.getElementById('awesomeBgParticles');
        if (!container) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            container.appendChild(particle);

            // Animate particles with anime.js
            if (typeof anime !== 'undefined') {
                anime({
                    targets: particle,
                    translateY: [
                        { value: -100, duration: 0 },
                        { value: window.innerHeight + 100, duration: anime.random(3000, 8000) }
                    ],
                    translateX: {
                        value: () => anime.random(-100, 100),
                        duration: () => anime.random(2000, 4000)
                    },
                    opacity: [
                        { value: 0, duration: 0 },
                        { value: 1, duration: 1000 },
                        { value: 0, duration: 1000 }
                    ],
                    delay: anime.random(0, 3000),
                    loop: true,
                    easing: 'linear'
                });
            }
        }
    }

    start() {
        if (!this.isComplete && typeof anime !== 'undefined') {
            this.startAnimation();
        }
        return this;
    }

    startAnimation() {
        const timeline = anime.timeline({
            duration: 1000,
            easing: 'easeOutExpo'
        });

        // 1. Logo circles animation
        timeline.add({
            targets: '.awesome-logo-circle',
            rotate: [0, 360],
            scale: [0, 1],
            borderWidth: [0, 3],
            delay: anime.stagger(200),
            duration: 1500,
            easing: 'easeOutElastic(1, .8)'
        })

        // 2. Logo text fade in
        .add({
            targets: '.awesome-logo-text',
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 800,
            easing: 'easeOutBack'
        }, '-=800')

        // 3. Code dots animation
        .add({
            targets: '.awesome-code-dot',
            opacity: [0, 1],
            scale: [0, 1],
            delay: anime.stagger(150),
            duration: 600
        }, '-=400')

        // 4. Code lines typing effect
        .add({
            targets: '.awesome-code-line',
            opacity: [0, 1],
            translateX: [-20, 0],
            delay: anime.stagger(300),
            duration: 800
        }, '-=200')

        // 5. Floating elements
        .add({
            targets: '.awesome-floating-element',
            opacity: [0, 0.7],
            translateY: [50, 0],
            rotate: [0, 360],
            delay: anime.stagger(200),
            duration: 1200
        }, '-=600')

        // 6. Loading percentage and progress bar
        .add({
            targets: '.awesome-loading-percentage',
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 600
        }, '-=400')

        .add({
            targets: '.awesome-loading-text',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600
        }, '-=300');

        // Start progress animation
        setTimeout(() => {
            this.animateProgress();
        }, 2000);

        // Animate floating elements continuously
        this.animateFloatingElements();
        
        // Rotate logo circles continuously
        this.animateLogoContinuous();
    }

    animateProgress() {
        const progressBar = document.getElementById('awesomeProgressBar');
        const percentageEl = document.getElementById('awesomeLoadingPercentage');
        const loadingTextEl = document.getElementById('awesomeLoadingText');

        if (!progressBar || !percentageEl || !loadingTextEl) return;

        const progressTimeline = anime.timeline({
            duration: 3000,
            easing: 'easeInOutQuart',
            update: (anim) => {
                this.progress = Math.round(anim.progress);
                percentageEl.textContent = this.progress + '%';
                
                // Update loading text
                const textIndex = Math.floor((this.progress / 100) * this.loadingTexts.length);
                if (textIndex !== this.currentTextIndex && textIndex < this.loadingTexts.length) {
                    this.currentTextIndex = textIndex;
                    this.updateLoadingText(loadingTextEl, this.loadingTexts[textIndex]);
                }
            },
            complete: () => {
                setTimeout(() => {
                    this.complete();
                }, 500);
            }
        });

        progressTimeline.add({
            targets: progressBar,
            width: '100%',
            duration: 3000
        });
    }

    updateLoadingText(element, newText) {
        if (typeof anime !== 'undefined') {
            anime({
                targets: element,
                opacity: [1, 0],
                duration: 200,
                complete: () => {
                    element.textContent = newText;
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        duration: 200
                    });
                }
            });
        }
    }

    animateFloatingElements() {
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.awesome-floating-element',
                translateX: () => anime.random(-50, 50),
                translateY: () => anime.random(-30, 30),
                rotate: () => anime.random(-15, 15),
                scale: [1, 1.2, 1],
                duration: 4000,
                delay: anime.stagger(800),
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });
        }
    }

    animateLogoContinuous() {
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.awesome-logo-circle-1',
                rotate: '+=360',
                duration: 8000,
                loop: true,
                easing: 'linear'
            });

            anime({
                targets: '.awesome-logo-circle-2',
                rotate: '-=360',
                duration: 6000,
                loop: true,
                easing: 'linear'
            });

            anime({
                targets: '.awesome-logo-circle-3',
                rotate: '+=360',
                duration: 4000,
                loop: true,
                easing: 'linear'
            });
        }
    }

    complete() {
        if (this.isComplete) return;
        this.isComplete = true;

        const loadingScreen = document.getElementById('awesome-loading-screen');
        if (!loadingScreen) return;
        
        // Final loading animation
        if (typeof anime !== 'undefined') {
            anime({
                targets: '.awesome-loading-container',
                scale: [1, 1.1, 0],
                opacity: [1, 1, 0],
                duration: 1000,
                easing: 'easeInBack',
                complete: () => {
                    loadingScreen.classList.add('hide');
                    
                    // Remove loading screen after transition
                    setTimeout(() => {
                        if (loadingScreen.parentNode) {
                            loadingScreen.parentNode.removeChild(loadingScreen);
                        }
                        // Remove styles
                        const styles = document.getElementById('awesome-loading-styles');
                        if (styles) {
                            styles.remove();
                        }
                        
                        // Trigger callback if provided
                        if (this.onComplete) {
                            this.onComplete();
                        }
                        
                        // Trigger custom event
                        document.dispatchEvent(new CustomEvent('awesomeLoadingComplete'));
                    }, 800);
                }
            });
        } else {
            // Fallback without anime.js
            loadingScreen.classList.add('hide');
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 800);
        }
    }

    // Method to set completion callback
    onComplete(callback) {
        this.onComplete = callback;
        return this;
    }

    // Method to manually trigger completion (useful for testing)
    forceComplete() {
        this.complete();
    }

    // Method to check if anime.js is loaded
    static checkAnimeJS() {
        return typeof anime !== 'undefined';
    }
}

// Auto-initialize if anime.js is available
if (typeof anime !== 'undefined') {
    // Export for use in other scripts
    window.AwesomeLoader = AwesomeLoader;
    
    // Auto-start loading animation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const loader = new AwesomeLoader();
            loader.init().start();
        });
    } else {
        const loader = new AwesomeLoader();
        loader.init().start();
    }
} else {
    console.warn('Anime.js not found. Please include anime.js for the awesome loading animation.');
}

// Handle page visibility for better performance
document.addEventListener('visibilitychange', () => {
    if (typeof anime !== 'undefined') {
        if (document.hidden) {
            anime.running.forEach(animation => animation.pause());
        } else {
            anime.running.forEach(animation => animation.play());
        }
    }
});