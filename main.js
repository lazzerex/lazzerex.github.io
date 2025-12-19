// Discord copy to clipboard functionality for footer with animated message
document.addEventListener('DOMContentLoaded', function() {
	var discordBtn = document.getElementById('discord-copy-btn');
	var copiedMsg = document.getElementById('discord-copied-msg');
	if (discordBtn && copiedMsg) {
		discordBtn.addEventListener('click', function(e) {
			e.preventDefault();
			var username = 'rubiachaaaan';
			if (navigator.clipboard) {
				navigator.clipboard.writeText(username).then(function() {
					copiedMsg.classList.add('visible');
					setTimeout(function() {
						copiedMsg.classList.remove('visible');
					}, 1600);
				});
			}
		});
	}
});

// Animate progress bar on load
window.addEventListener('load', () => {
	// Hide loading overlay
	setTimeout(() => {
		const overlay = document.getElementById('loading-overlay');
		if (overlay) {
			overlay.classList.add('hide');
			setTimeout(() => overlay.style.display = 'none', 400);
		}
		// Animate progress bar if present
		const bar = document.querySelector('.progress-bar');
		if (bar) bar.style.width = '85%';
	}, 600);
});


// Smooth scroll for all links (except Contact in nav, which gets custom logic)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	if (anchor.id !== 'contact-nav-btn') {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	}
});

// Smooth scroll for Contact button in nav (ensures nav closes if mobile, etc.)
const contactBtn = document.getElementById('contact-nav-btn');
if (contactBtn) {
	contactBtn.addEventListener('click', function (e) {
		e.preventDefault();
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
}

// Scroll to Top Button logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollToTopBtn.style.display = 'block';
	} else {
		scrollToTopBtn.style.display = 'none';
	}
});
scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add parallax effect to floating icons
document.addEventListener('mousemove', (e) => {
	const icons = document.querySelectorAll('.float-icon');
	const x = e.clientX / window.innerWidth;
	const y = e.clientY / window.innerHeight;
    
	icons.forEach((icon, index) => {
		const speed = (index + 1) * 20;
		icon.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
	});
});

// Hover effect for game cards handled by CSS (.game-card:hover) — no JS needed

// Animate stats on scroll
const observerOptions = {
	threshold: 0.5,
	rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const statNumbers = entry.target.querySelectorAll('.stat-number');
			statNumbers.forEach(stat => {
				const hadPlus = stat.textContent.includes('+');
				const finalValue = parseInt(stat.textContent);
				let currentValue = 0;
				const increment = finalValue / 50;
				const timer = setInterval(() => {
					currentValue += increment;
					if (currentValue >= finalValue) {
						stat.textContent = finalValue + (hadPlus ? '+' : '');
						clearInterval(timer);
					} else {
						stat.textContent = Math.floor(currentValue) + (hadPlus ? '' : '');
					}
				}, 30);
			});
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
	observer.observe(statsSection);
}

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.game-card, .feature-card, .project-card, .skill-card');
const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry, index) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}, index * 100);
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.1 });

revealElements.forEach(el => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(30px)';
	el.style.transition = 'all 0.6s ease';
	revealObserver.observe(el);
});

/* Nav transparency while scrolled:
   - keep `.scrolled` on nav when page is not at top
   - remove it when scrolled to the very top (window.scrollY === 0)
   - hover on nav forces full opacity via CSS
*/
(function() {
	const nav = document.querySelector('nav');
	if (!nav) return;
	const onScroll = () => {
		if (window.scrollY > 0) nav.classList.add('scrolled');
		else nav.classList.remove('scrolled');
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	// initialize state on load
	onScroll();
})();

// Typing animation for #typing-roles
document.addEventListener('DOMContentLoaded', () => {
	const el = document.getElementById('typing-roles');
	if (!el) return;
	const roles = ['game creator', 'full-stack developer', 'indie dev', 'engineer'];
	let idx = 0; let charIdx = 0; let forward = true;

	const typeSpeed = 80; const pauseBetween = 1200;

	function tick() {
		const current = roles[idx];
		if (forward) {
			charIdx++;
			el.textContent = current.slice(0, charIdx);
			if (charIdx === current.length) {
				forward = false;
				setTimeout(tick, pauseBetween);
				return;
			}
		} else {
			charIdx--;
			el.textContent = current.slice(0, charIdx);
			if (charIdx === 0) {
				forward = true;
				idx = (idx + 1) % roles.length;
			}
		}
		setTimeout(tick, forward ? typeSpeed : typeSpeed / 2);
	}

	// start after a small delay so hero/other scripts run
	setTimeout(tick, 500);
});

// Projects tabs and link handlers
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.project-tab');
	const contents = document.querySelectorAll('.tab-content');
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(t => t.classList.remove('active'));
			tab.classList.add('active');
			const target = tab.getAttribute('data-tab');
			contents.forEach(c => c.classList.remove('active'));
			const el = document.getElementById(target + '-content');
			if (el) el.classList.add('active');
		});
	});

	// open links
	document.querySelectorAll('.visit-btn, .github-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			const url = btn.getAttribute('data-url');
			if (url) window.open(url, '_blank');
		});
	});
});

// Hero progress animate when visible
(() => {
	const progFill = document.querySelector('.hero-progress-fill');
	const progPercent = document.querySelector('.hero-progress-percent');
	if (!progFill || !progPercent) return;
	const target = parseInt(progFill.getAttribute('data-target') || '0', 10);

	const animate = () => {
		let current = 0;
		const step = Math.max(1, Math.round(target / 60));
		const id = setInterval(() => {
			current += step;
			if (current >= target) current = target;
			progFill.style.width = current + '%';
			progPercent.textContent = current + '%';
			if (current >= target) clearInterval(id);
		}, 12);
	};

	const obs = new IntersectionObserver(entries => {
		entries.forEach(e => { if (e.isIntersecting) { animate(); obs.unobserve(progFill); } });
	}, { threshold: 0.5 });

	obs.observe(progFill);
})();

// Skills section progress animation
document.addEventListener('DOMContentLoaded', () => {
	const skillsSection = document.getElementById('skills-tech');
	if (!skillsSection) return;
	const fills = skillsSection.querySelectorAll('.skill-bar-fill');
	if (!fills || fills.length === 0) return;

	const animateSkills = () => {
		fills.forEach((fill, i) => {
			const target = parseInt(fill.getAttribute('data-percent') || '0', 10);
			setTimeout(() => {
				let current = 0;
				const step = Math.max(1, Math.round(target / 30));
				const id = setInterval(() => {
					current += step;
					if (current >= target) current = target;
					fill.style.width = current + '%';
					fill.setAttribute('aria-valuenow', String(current));
					if (current >= target) clearInterval(id);
				}, 14);
			}, i * 120);
		});
	};

	const obs = new IntersectionObserver(entries => {
		entries.forEach(e => {
			if (e.isIntersecting) {
				animateSkills();
				obs.unobserve(e.target);
			}
		});
	}, { threshold: 0.25 });

	obs.observe(skillsSection);
});

// Theme toggle: persist in localStorage
document.addEventListener('DOMContentLoaded', () => {
	const toggle = document.getElementById('theme-toggle');
	if (!toggle) return;
	const root = document.documentElement;
	const applyTheme = (isDark) => {
		if (isDark) root.classList.add('theme-dark');
		else root.classList.remove('theme-dark');
		// Use Font Awesome icons for clearer toggle
		toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
		localStorage.setItem('lazzerex_theme_dark', isDark ? '1' : '0');
	};
	const stored = localStorage.getItem('lazzerex_theme_dark');
	applyTheme(stored === '1');
	toggle.addEventListener('click', () => {
		const isDark = !root.classList.contains('theme-dark');
		applyTheme(isDark);
	});
});
