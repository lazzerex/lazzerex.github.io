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
    }, 2000);
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
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
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

    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    
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

    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

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
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            
            setTimeout(() => {
                titleElement.style.borderRight = 'none';
            }, 1000);
        }
    }

    
    setTimeout(typeWriter, 500);
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

    if (!codeContent || !outputContent) return;

  
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

    
    function displayCode() {
        const lines = sampleCode.split('\n');
        codeContent.innerHTML = syntaxHighlight(sampleCode);
        
        
        lineNumbers.innerHTML = lines.map((_, i) => i + 1).join('\n');
    }

    
    function syntaxHighlight(code) {
        return code
            .replace(/\b(const|let|var|function|return|if|else|for|while|class)\b/g, '<span style="color: #569cd6;">$1</span>')
            .replace(/\b(true|false|null|undefined)\b/g, '<span style="color: #569cd6;">$1</span>')
            .replace(/"([^"]*)"/g, '<span style="color: #ce9178;">"$1"</span>')
            .replace(/`([^`]*)`/g, '<span style="color: #ce9178;">`$1`</span>')
            .replace(/\/\/(.*)/g, '<span style="color: #6a9955;">//$1</span>')
            .replace(/\b(\d+)\b/g, '<span style="color: #b5cea8;">$1</span>');
    }

    
    if (runButton) {
        runButton.addEventListener('click', function() {
            this.style.color = '#00ff00';
            setTimeout(() => {
                this.style.color = '';
            }, 200);

            
            outputContent.innerHTML = '';
            const outputs = [
                '🚀 Developer Profile:',
                'Lazzerex',
                '💡 Creating projects...',
                '  Building with Next.js!',
                '  Building with React!',
                '  Building with Laravel!',
                '  Building with Rust!',
                '📊 Stats: { projects: 15, gamesLive: 6, totalPlays: "40+" }'
            ];

            outputs.forEach((output, index) => {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.textContent = output;
                    line.style.opacity = '0';
                    line.style.animation = 'fadeIn 0.3s ease forwards';
                    outputContent.appendChild(line);
                }, index * 200);
            });
        });
    }

   
    displayCode();
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

    
    const exploreBtn = document.getElementById('explore-btn');
    const projectsBtn = document.getElementById('projects-btn');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const gamesSection = document.getElementById('games');
            if (gamesSection) {
                gamesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
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