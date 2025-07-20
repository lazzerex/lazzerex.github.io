let currentTheme = 'light';
let isScrolling = false;
let particles = [];
let animationId;


document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});


function initializeApp() {
    showLoadingScreen();
    
    setTimeout(() => {
        hideLoadingScreen();
        
        
        document.body.classList.remove('loading-active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        
        initializeParticles();
        initializeNavigation();
        initializeThemeToggle();
        initializeScrollEffects();
        initializeTypewriter();
        initializeCounters();
        initializeFilters();
        initializeGameCards();
        initializeProjectTabs();
        initializeSkillBars();
        initializeCodeDemo();
        initializeContactForm();
        initializeCursorTrail();
        initializeIntersectionObserver();
        initializeButtonEffects();
        initializeAboutSection();
        initializeQuotesAnimation();
    }, 7850);
}


function initializeEnhancedAbout() {
    // Typing animation for roles
    initializeTypingRoles();
    
    // Initialize skill highlights
    initializeSkillHighlights();
    
    // Initialize fun facts interactions
    initializeFunFacts();
    
    // Initialize learning progress animation
    initializeLearningProgress();
    
    // Initialize timeline animation
    initializeTimeline();
    
    // Initialize interactive text elements
    initializeInteractiveText();
}

// Enhanced quotes section animation with Anime.js
// Enhanced quotes section animation with Anime.js (without typing effect)
function initializeQuotesAnimation() {
    const quotesSection = document.querySelector('.quotes-section');
    const quoteContainer = document.querySelector('.quote-container');
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const quoteIcon = document.querySelector('.quote-icon');
    const quoteRefresh = document.querySelector('.quote-refresh');
    
    if (!quotesSection) return;
    
    // Set initial states
    anime.set([quoteContainer, quoteText, quoteAuthor, quoteIcon, quoteRefresh], {
        opacity: 0,
        translateY: 50
    });
    
    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateQuotesIn();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    });
    
    observer.observe(quotesSection);
    
    function animateQuotesIn() {
        // Create floating particles animation
        createFloatingQuoteParticles();
        
        // Main timeline for quote animations
        const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 800
        });
        
        // Animate container first
        tl.add({
            targets: quoteContainer,
            opacity: [0, 1],
            translateY: [80, 0],
            scale: [0.8, 1],
            rotate: [2, 0],
            duration: 1000,
            easing: 'easeOutElastic(1, .8)'
        })
        
        // Animate quote icon
        .add({
            targets: quoteIcon,
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0, 1],
            rotate: [180, 0],
            duration: 600,
            easing: 'easeOutBack(1.7)'
        }, '-=700')
        
        // Animate quote text (simple fade in)
        .add({
            targets: quoteText,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800
        }, '-=400')
        
        // Animate author
        .add({
            targets: quoteAuthor,
            opacity: [0, 1],
            translateY: [30, 0],
            translateX: [20, 0],
            duration: 600
        }, '-=300')
        
        // Animate refresh button
        .add({
            targets: quoteRefresh,
            opacity: [0, 1],
            scale: [0, 1],
            rotate: [360, 0],
            duration: 500,
            easing: 'easeOutBack(1.7)'
        }, '-=400');
        
        // Add subtle hover animations
        addQuoteHoverEffects();
    }
    
    function createFloatingQuoteParticles() {
        const particleCount = 15;
        const container = quotesSection;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'quote-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
            `;
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            container.appendChild(particle);
            
            // Animate particles
            anime({
                targets: particle,
                translateY: [
                    { value: Math.random() * 100 - 50, duration: 2000 },
                    { value: Math.random() * 100 - 50, duration: 2000 }
                ],
                translateX: [
                    { value: Math.random() * 100 - 50, duration: 2500 },
                    { value: Math.random() * 100 - 50, duration: 2500 }
                ],
                opacity: [
                    { value: Math.random() * 0.8 + 0.2, duration: 1500 },
                    { value: 0, duration: 1500 }
                ],
                scale: [
                    { value: Math.random() * 1.5 + 0.5, duration: 2000 },
                    { value: 0, duration: 1000 }
                ],
                rotate: Math.random() * 360,
                easing: 'easeInOutSine',
                loop: true,
                direction: 'alternate',
                delay: Math.random() * 2000
            });
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        }
    }
    
    function addQuoteHoverEffects() {
        // Container hover effect
        quoteContainer.addEventListener('mouseenter', () => {
            anime({
                targets: quoteContainer,
                scale: 1.02,
                rotateY: 2,
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            // Animate refresh button on container hover
            anime({
                targets: quoteRefresh,
                rotate: 180,
                scale: 1.1,
                duration: 400,
                easing: 'easeOutBack(1.7)'
            });
        });
        
        quoteContainer.addEventListener('mouseleave', () => {
            anime({
                targets: quoteContainer,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: quoteRefresh,
                rotate: 0,
                scale: 1,
                duration: 400,
                easing: 'easeOutBack(1.7)'
            });
        });
    }
}

// Enhanced displayQuote function with animation (no typing)
function displayQuote() {
    const quoteElement = document.getElementById('dynamic-quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    const quoteIcon = document.querySelector('.quote-icon');
    const quoteRefresh = document.querySelector('.quote-refresh');
    
    if (quoteElement && quoteTextElement && quoteAuthorElement) {
        const quote = getRandomQuote();
        
        // Animate out
        anime({
            targets: [quoteTextElement, quoteAuthorElement, quoteIcon],
            opacity: 0,
            translateY: -20,
            duration: 300,
            easing: 'easeInQuad',
            complete: function() {
                // Update text
                quoteTextElement.textContent = `"${quote.text}"`;
                quoteAuthorElement.textContent = `- ${quote.author}`;
                
                // Animate in with new quote
                anime({
                    targets: [quoteIcon, quoteTextElement, quoteAuthorElement],
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 500,
                    delay: anime.stagger(100),
                    easing: 'easeOutQuad'
                });
            }
        });
        
        // Animate refresh button
        anime({
            targets: quoteRefresh,
            rotate: 360,
            scale: [1, 1.2, 1],
            duration: 600,
            easing: 'easeOutBack(1.7)'
        });
    }
}

// Add CSS for animations (simplified without typing styles)
function addQuoteAnimationCSS() {
    if (document.getElementById('quote-animations-css')) return;
    
    const style = document.createElement('style');
    style.id = 'quote-animations-css';
    style.textContent = `
        .quotes-section {
            overflow: hidden;
            position: relative;
        }
        
        .quote-particle {
            will-change: transform, opacity;
        }
        
        .quote-container {
            will-change: transform;
            transform-style: preserve-3d;
        }
        
        .quote-refresh {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
}

// Initialize quotes animations
document.addEventListener('DOMContentLoaded', function() {
    addQuoteAnimationCSS();
    initializeQuotesAnimation();
});

// Enhanced displayQuote function with animation
function displayQuote() {
    const quoteElement = document.getElementById('dynamic-quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    const quoteIcon = document.querySelector('.quote-icon');
    const quoteRefresh = document.querySelector('.quote-refresh');
    
    if (quoteElement && quoteTextElement && quoteAuthorElement) {
        const quote = getRandomQuote();
        
        // Animate out
        anime({
            targets: [quoteTextElement, quoteAuthorElement, quoteIcon],
            opacity: 0,
            translateY: -20,
            duration: 300,
            easing: 'easeInQuad',
            complete: function() {
                // Update text
                quoteTextElement.textContent = `"${quote.text}"`;
                quoteAuthorElement.textContent = `- ${quote.author}`;
                
                // Animate in with new quote
                anime({
                    targets: [quoteIcon, quoteTextElement, quoteAuthorElement],
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 500,
                    delay: anime.stagger(100),
                    easing: 'easeOutQuad'
                });
            }
        });
        
        // Animate refresh button
        anime({
            targets: quoteRefresh,
            rotate: 360,
            scale: [1, 1.2, 1],
            duration: 600,
            easing: 'easeOutBack(1.7)'
        });
    }
}

// Add CSS for animations
function addQuoteAnimationCSS() {
    if (document.getElementById('quote-animations-css')) return;
    
    const style = document.createElement('style');
    style.id = 'quote-animations-css';
    style.textContent = `
        @keyframes quoteBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .quotes-section {
            overflow: hidden;
            position: relative;
        }
        
        .quote-particle {
            will-change: transform, opacity;
        }
        
        .quote-container {
            will-change: transform;
            transform-style: preserve-3d;
        }
        
        .quote-refresh {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);
}

// Initialize quotes animations
document.addEventListener('DOMContentLoaded', function() {
    addQuoteAnimationCSS();
    initializeQuotesAnimation();
});

// Typing animation for different roles
function initializeTypingRoles() {
    const typingElement = document.getElementById('typing-roles');
    if (!typingElement) return;
    
    const roles = [
        'full-stack developer',
        'game creator',
        'problem solver',
        'technology enthusiast',
        'open source contributor'
    ];
    
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function typeRole() {
        const currentText = roles[currentRole];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && currentChar === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
            typeSpeed = 500; // Pause before typing next role
        }
        
        setTimeout(typeRole, typeSpeed);
    }
    
    // Start typing animation
    setTimeout(typeRole, 1000);
}

// Skill highlights with tooltips
function initializeSkillHighlights() {
    const skillHighlights = document.querySelectorAll('.skill-highlight');
    
    skillHighlights.forEach(skill => {
        skill.addEventListener('click', function() {
            const skillType = this.getAttribute('data-skill');
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(59, 130, 246, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Show skill info (you could expand this with more detailed tooltips)
            console.log(`Clicked on ${skillType} expertise!`);
        });
    });
}

// Fun facts interactions
function initializeFunFacts() {
    const factItems = document.querySelectorAll('.fact-item');
    
    const factDetails = {
        games: {
            detail: "From classic arcade games to modern indie titles!",
            icon: "🕹️"
        },
        commits: {
            detail: "Every commit tells a story of progress!",
            icon: "📈"
        },
        coffee: {
            detail: "The fuel of every great developer!",
            icon: "☕"
        },
        learning: {
            detail: "Always curious, always growing!",
            icon: "🧠"
        }
    };
    
    factItems.forEach(item => {
        item.addEventListener('click', function() {
            const factType = this.getAttribute('data-fact');
            const detail = factDetails[factType];
            
            if (detail) {
                // Create temporary tooltip
                const tooltip = document.createElement('div');
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'var(--bg-primary)';
                tooltip.style.border = '1px solid var(--border-color)';
                tooltip.style.borderRadius = '8px';
                tooltip.style.padding = '12px 16px';
                tooltip.style.boxShadow = 'var(--shadow-medium)';
                tooltip.style.zIndex = '1000';
                tooltip.style.fontSize = '0.875rem';
                tooltip.style.color = 'var(--text-secondary)';
                tooltip.style.whiteSpace = 'nowrap';
                tooltip.textContent = `${detail.icon} ${detail.detail}`;
                
                // Position tooltip
                const rect = this.getBoundingClientRect();
                tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                tooltip.style.top = (rect.top - 40) + 'px';
                tooltip.style.transform = 'translateX(-50%)';
                
                document.body.appendChild(tooltip);
                
                // Animate in
                tooltip.style.opacity = '0';
                tooltip.style.animation = 'fadeIn 0.3s ease forwards';
                
                // Remove after 2 seconds
                setTimeout(() => {
                    tooltip.style.animation = 'fadeOut 0.3s ease forwards';
                    setTimeout(() => {
                        if (tooltip.parentNode) {
                            tooltip.parentNode.removeChild(tooltip);
                        }
                    }, 300);
                }, 2000);
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 100);
        });
    });
}

// Learning progress animation
function initializeLearningProgress() {
    const progressBars = document.querySelectorAll('.progress-bar');
    let animated = false;
    
    function animateProgress() {
        if (animated) return;
        animated = true;
        
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const progress = bar.style.getPropertyValue('--progress');
                bar.style.setProperty('--progress', '0%');
                
                setTimeout(() => {
                    bar.style.setProperty('--progress', progress);
                }, 100);
            }, index * 200);
        });
    }
    
    // Trigger animation when section comes into view
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgress();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
    }
}

// Timeline animation
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200 + 500);
    });
}

// Interactive text elements
function initializeInteractiveText() {
    // GitHub link interaction
    const githubLinks = document.querySelectorAll('.github-link');
    githubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create flying GitHub icon
            const icon = document.createElement('i');
            icon.className = 'fab fa-github';
            icon.style.position = 'fixed';
            icon.style.fontSize = '2rem';
            icon.style.color = 'var(--accent-color)';
            icon.style.pointerEvents = 'none';
            icon.style.zIndex = '9999';
            
            const rect = this.getBoundingClientRect();
            icon.style.left = (rect.left + rect.width / 2) + 'px';
            icon.style.top = (rect.top + rect.height / 2) + 'px';
            icon.style.transform = 'translate(-50%, -50%) scale(0)';
            icon.style.animation = 'githubFly 1s ease-out forwards';
            
            document.body.appendChild(icon);
            
            setTimeout(() => {
                if (icon.parentNode) {
                    icon.parentNode.removeChild(icon);
                }
                // You could redirect to GitHub here
                // window.open('https://github.com/lazzerex', '_blank');
            }, 1000);
        });
    });
    
    // Emoji word interactions
    const emojiWords = document.querySelectorAll('.emoji-word');
    emojiWords.forEach(word => {
        word.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease';
        });
        
        word.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Code snippet interactions
    const codeSnippets = document.querySelectorAll('.code-snippet-inline');
    codeSnippets.forEach(snippet => {
        snippet.addEventListener('click', function() {
            const originalText = this.textContent;
            const functions = ['clean()', 'documented()', 'optimized()', 'tested()', 'scalable()'];
            const randomFunction = functions[Math.floor(Math.random() * functions.length)];
            
            this.textContent = randomFunction;
            this.style.background = 'var(--accent-color)';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.color = '';
            }, 1000);
        });
    });
}

// Digital Labs link enhanced interaction
function initializeDigitalLabsLink() {
    const labsLink = document.querySelector('.digital-labs-link');
    if (!labsLink) return;
    
    labsLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create particle burst effect
        const particles = [];
        const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.background = colors[i % colors.length];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            const rect = this.getBoundingClientRect();
            particle.style.left = (rect.left + rect.width / 2) + 'px';
            particle.style.top = (rect.top + rect.height / 2) + 'px';
            
            const angle = (i / 12) * Math.PI * 2;
            const velocity = 150;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.animation = `particleBurst 0.8s ease-out forwards`;
            particle.style.setProperty('--vx', vx + 'px');
            particle.style.setProperty('--vy', vy + 'px');
            
            document.body.appendChild(particle);
            particles.push(particle);
        }
        
        // Clean up particles
        setTimeout(() => {
            particles.forEach(particle => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            });
        }, 800);
        
        // Show enhanced tooltip or navigate to games section
        setTimeout(() => {
            const gamesSection = document.getElementById('games');
            if (gamesSection) {
                gamesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    });
}

// Add CSS animations for the JavaScript interactions
function addAboutAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
        
        @keyframes githubFly {
            0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); }
            50% { transform: translate(-50%, -80px) scale(1.5) rotate(180deg); }
            100% { transform: translate(-50%, -120px) scale(0) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particleBurst {
            0% { 
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% { 
                transform: translate(var(--vx), var(--vy)) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-8px); }
            60% { transform: translateY(-4px); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all about section interactions
function initializeAboutSection() {
    initializeEnhancedAbout();
    initializeDigitalLabsLink();
    addAboutAnimationStyles();
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
        
        allowScrolling();
    }
}


function initializeParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(particle);

        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }

    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createParticle(), i * 1000);
    }

    
    setInterval(createParticle, 3000);
}


function initializeCursorTrail() {
    const trail = document.getElementById('cursor-trail');
    if (!trail) return;

    let dots = [];
    const maxDots = 20;

    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) return; // Disable on mobile

        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        trail.appendChild(dot);

        dots.push(dot);

        if (dots.length > maxDots) {
            const oldDot = dots.shift();
            if (oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }

        
        setTimeout(() => {
            if (dot.parentNode) {
                dot.parentNode.removeChild(dot);
            }
        }, 1000);
    });
}


function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScrollTop = 0;

    // Navigation links - replace the existing function
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Get the actual navbar height dynamically
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
            
            // Use a larger offset - increase this number if still not enough
            const offset = navbarHeight + 50; // Try 80 or 100 if 60 isn't enough
            
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

    // Scroll behavior for navbar
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        updateActiveNavLink();
    });

    // Update active nav link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 94; // Navbar height + padding

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
}





function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();

    themeToggle.addEventListener('click', function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}


function initializeScrollEffects() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const backToTop = document.getElementById('back-to-top');

    
    window.addEventListener('scroll', function() {
        if (scrollProgress) {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = scrolled + '%';
        }

        
        if (scrollIndicator && window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '0.7';
        }

    
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}


function initializeTypewriter() {
    const titleElement = document.getElementById('main-title');
    if (!titleElement) return;

    const text = 'Lazzerex';
    const cursor = '|';
    let index = 0;
    let showCursor = true;
    
    titleElement.textContent = '';
    titleElement.style.color = 'var(--text-primary)';

    function updateDisplay() {
        const currentText = text.substring(0, index);
        const cursorChar = showCursor ? `<span style="color: var(--accent-color); animation: none;">${cursor}</span>` : '<span style="opacity: 0;">|</span>';
        titleElement.innerHTML = currentText + cursorChar;
    }

    function typeWriter() {
        if (index < text.length) {
            index++;
            updateDisplay();
            setTimeout(typeWriter, 150);
        } else {
            
            setTimeout(() => {
                titleElement.textContent = text;
            }, 2000);
        }
    }

    
    function blinkLoop() {
        showCursor = !showCursor;
        updateDisplay();
        
        if (index < text.length || titleElement.textContent.includes('|')) {
            setTimeout(blinkLoop, 500);
        }
    }

    // Start both animations
    setTimeout(() => {
        blinkLoop();
        typeWriter();
    }, 800);
}


function initializeCounters() {
    const statItems = document.querySelectorAll('.stat-item');
    let animated = false;

    function animateCounters() {
        if (animated) return;
        animated = true;

        statItems.forEach(item => {
            const target = parseInt(item.getAttribute('data-count'));
            const counter = item.querySelector('.stat-number');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + (target > 10 ? '+' : '');
            }, 40);
        });
    }

   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    });

    statItems.forEach(item => observer.observe(item));
}


function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const gameCards = document.querySelectorAll('.game-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
        
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            
            gameCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });
}


function initializeGameCards() {
    const playButtons = document.querySelectorAll('.play-btn');
    const demoButtons = document.querySelectorAll('.demo-btn');
    const visitButtons = document.querySelectorAll('.visit-btn');
    const githubButtons = document.querySelectorAll('.github-btn');

    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const demo = this.getAttribute('data-demo');
            showGamePreview(demo);
        });
    });

  
    visitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    
    githubButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            createCardParticles(this);
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}


function createCardParticles(card) {
    const iconContainer = card.querySelector('.project-icon-container');
    if (!iconContainer) return;

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#3b82f6';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 40 + 'px';
            particle.style.top = Math.random() * 40 + 'px';
            particle.style.animation = 'float 2s ease-out forwards';

            iconContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }, i * 100);
    }
}


function initializeProjectTabs() {
    const tabs = document.querySelectorAll('.project-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            
            contents.forEach(content => {
                content.classList.remove('active');
            });

            const targetContent = document.getElementById(targetTab + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}


function initializeSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    let skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;
        skillsAnimated = true;

        skillItems.forEach((item, index) => {
            setTimeout(() => {
                const level = parseInt(item.getAttribute('data-level'));
                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    progressBar.style.width = level + '%';
                }
            }, index * 100);
        });
    }

   
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        });
        observer.observe(skillsSection);
    }

    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('click', function() {
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}


function initializeCodeDemo() {
    const runButton = document.getElementById('run-code');
    const codeContent = document.getElementById('code-content');
    const outputContent = document.querySelector('.output-content');
    const lineNumbers = document.querySelector('.line-numbers');

    if (!codeContent || !outputContent || !lineNumbers) return;

    // Sample code to display
    const sampleCode = `const developer = {
  name: "Lazzerex",
  skills: ["Next.js", "React", "Laravel", "Rust"],
  passion: "Building amazing experiences",
  
  createProject() {
    return this.skills.map(skill => 
      \`Building with \${skill}!\`
    );
  },
  
  getStats() {
    return {
      projects: 15,
      gamesLive: 6,
      totalPlays: "40+"
    };
  }
};

console.log("🚀 Developer Profile:");
console.log(developer.name);
console.log("💡 Creating projects...");
developer.createProject().forEach(project => 
  console.log("  " + project)
);
console.log("📊 Stats:", developer.getStats());`;

    // Skills JSON for second tab
    const skillsJson = `{
  "frontend": {
    "nextjs": 90,
    "react": 85,
    "vue": 75,
    "tailwind": 80
  },
  "backend": {
    "laravel": 85,
    "nodejs": 80,
    "rust": 70,
    "python": 75
  },
  "database": {
    "mysql": 85,
    "firebase": 80,
    "postgresql": 75,
    "vercel": 90
  },
  "totalExperience": "5+ years",
  "activeProjects": 15,
  "completedGames": 6
}`;

    // Enhanced syntax highlighting
    function syntaxHighlight(code, isJson = false) {
        if (isJson) {
            return code
                .replace(/"([^"]*)":/g, '<span class="property">"$1"</span>:')
                .replace(/:\s*"([^"]*)"/g, ': <span class="string">"$1"</span>')
                .replace(/:\s*(\d+)/g, ': <span class="number">$1</span>')
                .replace(/:\s*(true|false|null)/g, ': <span class="keyword">$1</span>');
        }

        return code
            // Keywords
            .replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this)\b/g, '<span class="keyword">$1</span>')
            // Booleans and null
            .replace(/\b(true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
            // Strings
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/`([^`]*)`/g, '<span class="string">`$1`</span>')
            .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
            // Comments
            .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
            // Numbers
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            // Methods
            .replace(/\.(\w+)\(/g, '.<span class="method">$1</span>(')
            // Console methods
            .replace(/\bconsole\./g, '<span class="method">console</span>.')
            .replace(/\blog\b(?=\()/g, '<span class="method">log</span>')
            .replace(/\bmap\b(?=\()/g, '<span class="method">map</span>')
            .replace(/\bforEach\b(?=\()/g, '<span class="method">forEach</span>');
    }

    // Display code with line numbers
    function displayCode(code, isJson = false) {
        const lines = code.split('\n');
        
        // Generate line numbers
        const lineNumbersText = lines.map((_, index) => (index + 1).toString()).join('\n');
        lineNumbers.textContent = lineNumbersText;
        
        // Display code with syntax highlighting
        codeContent.innerHTML = syntaxHighlight(code, isJson);
    }

    // Run code simulation
    if (runButton) {
        let isRunning = false;
        
        runButton.addEventListener('click', function() {
            if (isRunning) return;
            isRunning = true;

            // Store original content and clear it
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            this.style.color = '#fbbf24';
            
            // Clear previous output
            outputContent.innerHTML = '';
            
            // Check which tab is active
            const activeTab = document.querySelector('.tab.active');
            const isJsonTab = activeTab && activeTab.textContent.includes('skills.json');
            
            let outputs;
            if (isJsonTab) {
                outputs = [
                    { text: '📁 Loading skills.json...', delay: 200, color: '#60a5fa' },
                    { text: '✅ File parsed successfully', delay: 300, color: '#34d399' },
                    { text: '🔍 Analyzing skill levels...', delay: 400, color: '#fbbf24' },
                    { text: '📊 Frontend average: 82.5%', delay: 500, color: '#a78bfa' },
                    { text: '📊 Backend average: 77.5%', delay: 600, color: '#a78bfa' },
                    { text: '📊 Database average: 82.5%', delay: 700, color: '#a78bfa' },
                    { text: '🎯 Overall expertise: Senior Level', delay: 800, color: '#34d399' },
                    { text: '💼 Ready for production projects!', delay: 900, color: '#34d399' }
                ];
            } else {
                outputs = [
                    { text: '🚀 Developer Profile:', delay: 200, color: '#60a5fa' },
                    { text: 'Lazzerex', delay: 300, color: '#ffffff' },
                    { text: '💡 Creating projects...', delay: 400, color: '#fbbf24' },
                    { text: '  Building with Next.js!', delay: 500, color: '#34d399' },
                    { text: '  Building with React!', delay: 600, color: '#34d399' },
                    { text: '  Building with Laravel!', delay: 700, color: '#34d399' },
                    { text: '  Building with Rust!', delay: 800, color: '#34d399' },
                    { text: '📊 Stats: { projects: 15, gamesLive: 6, totalPlays: "40+" }', delay: 1000, color: '#a78bfa' }
                ];
            }

            let totalDelay = 0;
            outputs.forEach((output, index) => {
                totalDelay += output.delay;
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.textContent = output.text;
                    line.style.color = output.color || '#00ff00';
                    line.style.opacity = '0';
                    line.style.transform = 'translateX(-10px)';
                    line.style.transition = 'all 0.3s ease';
                    line.style.marginBottom = '2px';
                    outputContent.appendChild(line);
                    
                    // Animate in
                    setTimeout(() => {
                        line.style.opacity = '1';
                        line.style.transform = 'translateX(0)';
                    }, 50);
                    
                    // Auto-scroll to bottom
                    outputContent.scrollTop = outputContent.scrollHeight;
                }, totalDelay);
            });

            // Reset button after execution
            setTimeout(() => {
                this.innerHTML = originalContent; // Restore original content
                this.style.color = '';
                isRunning = false;
            }, totalDelay + 500);
        });
    }

    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Clear output when switching tabs
            if (outputContent) {
                outputContent.innerHTML = '<div style="color: #6b7280; font-style: italic;">Click the compile button to run the code...</div>';
            }
            
            // Switch between code examples
            if (this.textContent.includes('skills.json')) {
                displayCode(skillsJson, true);
            } else {
                displayCode(sampleCode, false);
            }
        });
    });

    // Initialize with JavaScript code
    displayCode(sampleCode, false);
    
    // Set initial output message
    if (outputContent) {
        outputContent.innerHTML = '<div style="color: #6b7280; font-style: italic;">Click the compile button to run the code...</div>';
    }
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const inputs = form?.querySelectorAll('input, textarea');
    
    if (!form) return;

    
    inputs?.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

   
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

       
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';
            
        
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                
                
                inputs?.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });
            }, 2000);
        }, 1500);
    });

    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactType = this.getAttribute('data-contact');
            
            switch(contactType) {
                case 'email':
                    window.location.href = 'mailto:your.email@example.com';
                    break;
                case 'github':
                    window.open('https://github.com/lazzerex', '_blank');
                    break;
                case 'linkedin':
                    window.open('https://linkedin.com/in/yourprofile', '_blank');
                    break;
            }

            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}


function showGamePreview(gameType) {
    const modal = document.getElementById('preview-modal');
    const title = document.getElementById('preview-title');
    const content = document.getElementById('preview-content');
    
    if (!modal || !title || !content) return;

    const previews = {
        minesweeper: {
            title: 'NeoSweeper Preview',
            content: `
                <div class="preview-demo">
                    <div style="display: grid; grid-template-columns: repeat(8, 30px); gap: 2px; justify-content: center; margin: 20px 0;">
                        ${Array.from({length: 64}, (_, i) => {
                            const isRevealed = Math.random() > 0.7;
                            const isMine = Math.random() > 0.85;
                            const number = Math.floor(Math.random() * 4) + 1;
                            
                            let content = '';
                            let bgColor = '#f3f4f6';
                            
                            if (isRevealed) {
                                if (isMine) {
                                    content = '💣';
                                    bgColor = '#fee2e2';
                                } else {
                                    content = number;
                                    bgColor = '#ecfdf5';
                                }
                            }
                            
                            return `<div style="width: 30px; height: 30px; border: 1px solid #d1d5db; display: flex; align-items: center; justify-content: center; background: ${bgColor}; font-size: 12px; font-weight: bold;">${content}</div>`;
                        }).join('')}
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Enhanced minesweeper with smooth animations and smart gameplay mechanics.
                    </p>
                </div>
            `
        },
        sudoku: {
            title: 'NeoSudoku Preview',
            content: `
                <div class="preview-demo">
                    <div style="display: grid; grid-template-columns: repeat(9, 25px); gap: 1px; justify-content: center; margin: 20px 0; border: 2px solid #374151;">
                        ${Array.from({length: 81}, (_, i) => {
                            const number = Math.random() > 0.6 ? Math.floor(Math.random() * 9) + 1 : '';
                            const isGiven = number && Math.random() > 0.3;
                            
                            return `<div style="width: 25px; height: 25px; border: 1px solid #d1d5db; display: flex; align-items: center; justify-content: center; background: ${isGiven ? '#f3f4f6' : 'white'}; font-size: 11px; font-weight: ${isGiven ? 'bold' : 'normal'}; color: ${isGiven ? '#374151' : '#3b82f6'};">${number}</div>`;
                        }).join('')}
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Intelligent puzzle with multiple difficulty levels and smart hints.
                    </p>
                </div>
            `
        },
        '2048': {
            title: 'Neo2048 Preview',
            content: `
                <div class="preview-demo">
                    <div style="display: grid; grid-template-columns: repeat(4, 60px); gap: 8px; justify-content: center; margin: 20px 0; padding: 20px; background: #bbada0; border-radius: 8px;">
                        ${[2, 4, '', 8, '', 16, 32, '', 64, '', '', 128, '', 256, '', ''].map(num => 
                            `<div style="width: 60px; height: 60px; background: ${num ? '#eee4da' : '#cdc1b4'}; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #776e65; font-size: ${num > 99 ? '14px' : '16px'};">${num}</div>`
                        ).join('')}
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Smooth sliding animations with satisfying visual feedback.
                    </p>
                </div>
            `
        },
        solitaire: {
            title: 'NeoSolitaire Preview',
            content: `
                <div class="preview-demo">
                    <div style="display: flex; gap: 10px; justify-content: center; margin: 20px 0;">
                        ${['♠️A', '♥️K', '♣️Q', '♦️J'].map(card => 
                            `<div style="width: 50px; height: 70px; background: white; border: 1px solid #d1d5db; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${card}</div>`
                        ).join('')}
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Classic solitaire with fluid animations and intuitive controls.
                    </p>
                </div>
            `
        },
        memory: {
            title: 'MemoMix Preview',
            content: `
                <div class="preview-demo">
                    <div style="display: grid; grid-template-columns: repeat(4, 50px); gap: 8px; justify-content: center; margin: 20px 0;">
                        ${Array.from({length: 16}, (_, i) => {
                            const symbols = ['🌟', '🎮', '🚀', '💎', '🔥', '⚡', '🎯', '🏆'];
                            const isFlipped = Math.random() > 0.7;
                            const symbol = symbols[Math.floor(i/2) % symbols.length];
                            
                            return `<div style="width: 50px; height: 50px; background: ${isFlipped ? '#3b82f6' : '#f3f4f6'}; border: 1px solid #d1d5db; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; transition: all 0.3s ease;">${isFlipped ? symbol : '?'}</div>`;
                        }).join('')}
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Dynamic patterns with progressive difficulty levels.
                    </p>
                </div>
            `
        },
        typing: {
            title: 'WordRush Preview',
            content: `
                <div class="preview-demo">
                    <div style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: monospace; margin: 20px 0;">
                        <div style="margin-bottom: 15px; color: #569cd6;">WPM: <span style="color: #4fc3f7;">72</span> | Accuracy: <span style="color: #81c784;">96%</span></div>
                        <div style="line-height: 1.6;">
                            <span style="color: #81c784;">The quick brown fox jumps over</span>
                            <span style="background: #3b82f6; color: white; padding: 0 2px;">the</span>
                            <span style="color: #6b7280;"> lazy dog and runs away quickly</span>
                        </div>
                        <div style="margin-top: 15px; height: 4px; background: #374151; border-radius: 2px;">
                            <div style="width: 65%; height: 100%; background: #3b82f6; border-radius: 2px;"></div>
                        </div>
                    </div>
                    <p style="text-align: center; color: #6b7280; margin-top: 20px;">
                        Real-time WPM tracking with accuracy measurement.
                    </p>
                </div>
            `
        }
    };

    const previewData = previews[gameType];
    if (previewData) {
        title.textContent = previewData.title;
        content.innerHTML = previewData.content;
        modal.classList.add('active');
    }
}


function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}


function initializeModal() {
    const closeBtn = document.getElementById('close-preview');
    const modal = document.getElementById('preview-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', closePreviewModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePreviewModal();
            }
        });
    }

  
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePreviewModal();
        }
    });
}


function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                
                const gridItems = entry.target.querySelectorAll('.project-card, .skill-category');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = `fadeInUp 0.6s ease forwards`;
                        item.style.animationDelay = `${index * 0.1}s`;
                    }, index * 50);
                });
            }
        });
    }, observerOptions);

    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
}


function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect code stays the same...
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Updated button navigation with consistent offset
    const exploreBtn = document.getElementById('explore-btn');
    const projectsBtn = document.getElementById('projects-btn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const gamesSection = document.getElementById('games');
            if (gamesSection) {
                const offsetTop = gamesSection.offsetTop - 94; // Navbar height + padding
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 94; // Navbar height + padding
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', function() {
    initializeModal();
});


function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}


function preloadResources() {
    const criticalImages = [
        
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}


window.addEventListener('load', preloadResources);


window.addEventListener('resize', throttle(function() {
    
    const particles = document.querySelectorAll('.particle');
    if (window.innerWidth <= 768) {
        particles.forEach(particle => particle.style.display = 'none');
    } else {
        particles.forEach(particle => particle.style.display = 'block');
    }
}, 250));

function initializeEnhancedContactHub() {
    initializeContactMethodAnimations();
    initializeAdvancedCopyFunctionality();
    initializeContactHubAnimations();
    initializeMethodHoverEffects();
}


function initializeContactMethodAnimations() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach((method, index) => {
        method.addEventListener('click', function(e) {
            const methodType = this.getAttribute('data-method');
            
            
            createRippleEffect(this, e);
            
            
            this.style.transform = 'translateY(-4px) scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            }, 150);
            
            
            handleContactMethod(methodType, this);
        });
        
        
        method.style.animationDelay = `${index * 0.1 + 0.1}s`;
    });
}


function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.3);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Enhanced contact method handling
function handleContactMethod(methodType, element) {
    const icon = element.querySelector('.method-icon');
    const button = element.querySelector('.method-btn');
    
    // Animate icon
    icon.style.transform = 'scale(1.2) rotate(10deg)';
    setTimeout(() => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    }, 200);
    
    // Animate button
    button.style.background = '#10b981';
    button.innerHTML = '<i class="fas fa-check"></i> <span>Processing...</span>';
    
    setTimeout(() => {
        switch(methodType) {
            case 'email':
                copyEmailEnhanced(); 
                button.innerHTML = '<i class="fas fa-copy"></i> <span>Copied!</span>';
                break;
            case 'github':
                openGitHubEnhanced();
                button.innerHTML = '<i class="fab fa-github"></i> <span>Opening GitHub...</span>';
                break;
            case 'discord':
                copyDiscordEnhanced();
                button.innerHTML = '<i class="fas fa-copy"></i> <span>Copied!</span>';
                break;
        }
        
        // Reset button after delay
        setTimeout(() => {
            resetMethodButton(button, methodType);
            resetMethodIcon(icon);
        }, 2000);
    }, 500);
}

// Reset method button to original state
function resetMethodButton(button, methodType) {
    const originalContent = {
        email: '<span>nambinh236@gmail.com</span><i class="fas fa-copy"></i>',
        github: '<span>@lazzerex</span><i class="fas fa-external-link-alt"></i>',
        discord: '<span>rubiachaaaan</span><i class="fas fa-copy"></i>'
    };
    
    button.style.background = '';
    button.innerHTML = originalContent[methodType];
}




function openGitHubEnhanced() {
    window.open('https://github.com/lazzerex', '_blank');
    showEnhancedNotification('🐙 Opening GitHub profile in new tab...', 'info');
    
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_method_click', {
            method: 'github'
        });
    }
}

function openLinkedInEnhanced() {
    window.open('https://www.linkedin.com/in/hsnbinh/', '_blank');
    showEnhancedNotification('💼 Opening LinkedIn profile for professional networking...', 'info');

    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_method_click', {
            method: 'linkedin'
        });
    }
}

function copyDiscordEnhanced() {
    const discordHandle = 'rubiachaaaan'; // Replace with your Discord
    copyToClipboardEnhanced(discordHandle);
    showEnhancedNotification(`💬 Discord copied: ${discordHandle}`, 'success');
}

function copyEmailEnhanced() {
    const email = 'nambinh236@gmail.com'; 
    copyToClipboardEnhanced(email);
    showEnhancedNotification(`📧 Email copied: ${email}`, 'success');
}
// Enhanced copy functionality with better feedback
function copyToClipboardEnhanced(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          // triggerCopySuccess();
        });
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            //triggerCopySuccess();
        } catch (err) {
            console.error('Copy failed', err);
        }
        
        document.body.removeChild(textArea);
    }
}




function triggerCopySuccess() {
    // Add a subtle copy success animation to the page
    const copyIndicator = document.createElement('div');
    copyIndicator.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyIndicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10001;
        animation: copyPulse 1s ease-out;
        pointer-events: none;
    `;
    
    document.body.appendChild(copyIndicator);
    
    setTimeout(() => {
        if (copyIndicator.parentNode) {
            copyIndicator.parentNode.removeChild(copyIndicator);
        }
    }, 1000);
}

// Enhanced notification system
function showEnhancedNotification(message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    notification.className = `enhanced-notification notification-${type}`;
    
    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '❌'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">${icons[type] || '💬'}</div>
        <div class="notification-content">${message}</div>
        <button class="notification-close">&times;</button>
    `;
    
    const colors = {
        success: '#10b981',
        info: '#3b82f6',
        warning: '#f59e0b',
        error: '#ef4444'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 350px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.opacity = '1';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.opacity = '0.8';
    });
    
    // Auto remove
    setTimeout(() => {
        removeNotification(notification);
    }, duration);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 400);
}

// Contact hub entrance animations
function initializeContactHubAnimations() {
    const contactHub = document.querySelector('.contact-hub');
    if (!contactHub) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(contactHub);
}

// Method hover effects
function initializeMethodHoverEffects() {
    const methods = document.querySelectorAll('.contact-method');
    
    methods.forEach(method => {
        const icon = method.querySelector('.method-icon');
        
        method.addEventListener('mouseenter', () => {
            // Create floating particles effect
            createFloatingParticles(icon);
        });
    });
}

function createFloatingParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = 3;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            animation: floatParticle 1s ease-out forwards;
        `;
        
        particle.style.setProperty('--random-x', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--random-y', `${-Math.random() * 50 - 20}px`);
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Add particle animation CSS
function addParticleAnimationCSS() {
    if (document.getElementById('particle-animations')) return;
    
    const style = document.createElement('style');
    style.id = 'particle-animations';
    style.textContent = `
        @keyframes floatParticle {
            to {
                transform: translate(var(--random-x), var(--random-y));
                opacity: 0;
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes copyPulse {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything
function initializeContactSection() {
    addParticleAnimationCSS();
    initializeEnhancedContactHub();
}

// Add to your main initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeContactSection();
});

function resetMethodIcon(icon) {
    icon.style.transform = 'scale(1) rotate(0deg)';
    icon.style.transition = 'all 0.3s ease'; // Smooth transition back
}
