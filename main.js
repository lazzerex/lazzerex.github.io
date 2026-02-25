
// Animate progress bar on load
window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('.progress-bar').style.width = '85%';
	}, 500);
	
	// Load initial quote
	loadQuote();
	
	// Setup refresh quote button
	const refreshBtn = document.getElementById('refreshQuote');
	if (refreshBtn) {
		refreshBtn.addEventListener('click', () => {
			loadQuote();
		});
	}
});

// Quote functionality
const quotes = [
    { text: "Cold wintry wind doesn't cry,it just gently rustles the trees. Although it actually wants to cry aloud. People pass by with their coat collars turned up. Without saying anything, they each hurry home.", author: "Sakurazaka46「Kogarashi wa Nakanai」" },
    { text: "The brightest star in the night sky, I don't even know its name. Billions of light years away, we're only watching eternity. Among countless lights out there, what we can see from here must be nothing but coincidence. And yet, it's precious.", author: "Sakurazaka46「Yozora de Ichiban Kagayaiteru Hoshi no Namae wo Boku wa Shiranai」" },
    { text: "Wave goodbye to the past when hope and faith have grown so strong and sound. Unfold this pair of wings for me again, to soar above this world.", author: "HOYO-MiX ft. 茶理理, TetraCalyx & Hanser「Moon Halo」" },
    { text: "This world is conveniently imperfect, so I really want to know.", author: "Sakanaction「Kaiju」" },
    { text: "You continue to run with the fragrance of the rice and the flowing river. Slightly smile, dream of childhood, I know. Don't cry, let the fireflies lead you to escape. Forever relying on village folk song. Go home, back to the beginning of happiness.", author: "Jay Chou「Fragrant of Rice」" },
    { text: "The small yellow flower from the story has been drifting in the wind since the year of its birth. The swing from childhood, swinging with the memories until now... I'm staring at the sky, whistling the intro of the songs. I think of petals trying to fall. The missing rainy day, I want it to experience it again.", author: "Jay Chou「Sunny Day」" },
    { text: "I'm a victim of my own delusions. It's not fair, trapped in the city with no real conclusions. I feel broken in a thousand places, my life's a one-man show. Dying to be somebody else, now there's nowhere else to go.", author: "Last Dinosaurs「Wurl」" },
    { text: "The time loop keeps repeating, endlessly circling through the endless years. The time loop still remains, Where to find the way out to end it forever?", author: "Bluemore, Jeremie Potier「Vòng Lặp」" },
    { text: "I still remember this feeling in my heart. In a breeze, we're frozen in time like an endless dream.", author: "N-buna, Sarah Furukawa「Silence」" },
    { text: "The trains are passing one by one before I even take a step. And in my ears are just the deafening sound of another breath.", author: "Cloudier「FEAR;Life」" },
    { text: "Gazed out far, into the violet skies. In front of my own eyes, a thousand butterflies. There stood I, standing in paradise.", author: "Cloudfield「Dream」" },
    { text: "The powdered snow falls, dancing around us. And the dream you'd given up on starts to make waves again.", author: "Ray「Ebb and Flow」" },
    { text: "Out there in the wood, you're lost just counting trees. You could always just be. This has already happened.", author: "Bitbeak「Wanderer」" },
    { text: "Run on empty and drain the well. I'm not above losing, just sick of losing myself.", author: "Bitbeak「Hollowing」" },
    { text: "And there's less time with each passing day. To get pulled out, to not lose yourself in things... And there's less time to go around. To catch your breath before you start another round.", author: "Bitbeak「Hollowing」" },
    { text: "'Cause getting made you want more. And hoping made you hurt more.", author: "Porter Robinson「Something Comforting」" },
    { text: "If you wish for happiness, sadness overflows. Even the cherry blossoms in full bloom get blown away by the wind. I thought I understood that shining youth isn't eternal. But I didn't really understand it at all, did I?", author: "Sakurazaka46「Zutto Haru Dattarana」" },
    { text: "We looked up at the stars that year with so many brilliant dreams. As least memories will last forever by my side like the unchanging starry sky. In the end, the starry sky is all that's left, by my side like my unchaning memories.", author: "Mayday「Starry Sky」" },
    { text: "Do you still remember? The sky full of tears. That pain once protected you, that pain is still protecting you.", author: "FLOW「Sign」" },
    { text: "For now, fear nothing. And be the only one to understand the meaning of pain.", author: "Kenshi Yonezu「M87」" },
    { text: "Momentary lights overlap, and their various colors create the four seasons. If any of them were missing, eternity would not be born.", author: "Keyakizaka46「Futari Saison」" },
    { text: "I'm sure the white butterfly was flying, fluttering in the deep blue sky, and wandering into a street corner. My own slightly vague memories.", author: "Sakurazaka46「Monshirochou ga Tashika Tondeta」" },
    { text: "I've thought about it, but I still don't understand. Under the blue sky, I waited for you. On that breezy afternoon, my imagination escaped the confines of the day.", author: "Yorushika「Dakara Boku wa Ongaku o Yameta」" },
    { text: "Running to Horizon, break away from yesterday. Climbing on Loneliness, under the sky without constellations.", author: "Tetsuya Komuro「RUNNING TO HORIZON」" },
    { text: "We'll see creation come undone. These bones that bound us will be gone. We'll stir our spirits 'till we're one, then soft as shadows we'll become.", author: "Porter Robinson「Sea of Voices」" },
    { text: "'Cause I'm not the same as I was. As I shoulder the weight of the world.", author: "Porter Robinson「Unfold」" },
    { text: "Look at the sky, I'm still here. I'll be alive next year.", author: "Porter Robinson「Look At The Sky」" },
    { text: "The saber in your hand, is a pen to write it down. Words to save this world.", author: "Tokyo Ska Paradise Orchestra, Yoohei Kawakami「ALMIGHTY ~ Kamen no Yakusoku」" },
    { text: "Even when I'm lost in the darkness as the sun fades away, I close my eyes and listen to the voice in my heart so I can move forward.", author: "Rica Matsumoto「Alive A Life」" },
    { text: "I want to pursue my dreams in my own still-clumsy way. Feeling for the first time the rush running through me that comes from being alive.", author: "Rica Matsumoto「Alive A Life」" },
    { text: "Far-off, childhood memories hold a warmth like the sunlight. Awakening from a transient dream, loneliness realizes it's all alone.", author: "Minori Chihara「Michishirube」" },
    { text: "See the flowers breathing in the rain. Try growing to the edge of light. It's so far away to reach out to the sky... I'll seize the roses. With my wings, we'll fly.", author: "YOSHIKI, HYDE「Red Swan」" },
    { text: "You still are blind if you see a winding road. 'Cause there's always a straight way to the point you seek.", author: "Akebori「Wind」" },
    { text: "So I take shelter from the rain in my heart. And wait here for the sun to break through the clouds.", author: "Sakurazaka46「Samidare yo」" },
    { text: "There's something I want to show you. Thousands of stars which continue to glow far away even on lonely nights. Losing something, remaining unconvinced, being repelled, things that won't come true. But to still flounder, to continue believing. Raise your head and move on.", author: "RAM WIRE「Bokura no Te ni wa Nanimo Nai kedo」" },
    { text: "Unclarified issues yet to be solved. Grab me by the collar, asking if this is really necessary. Airships that take flight one after another. Beyond the wafting dust, rises a spreading sky.", author: "Daichi Miura「Hikousen」" },
    { text: "I'm ready to be somebody else. I'll forget how to feel the things I've felt.", author: "Last Dinosaurs「Apollo」" },
    { text: "Love is something that makes you feel at ease. As if the threads of our hearts have loosened, distance has grown between us. I want to look only at you once more. Can you give me some time?", author: "Keyakizaka46「Concentration」" },
    { text: "The wind blew through and everything became quiet. How awkward it was for the two of us.", author: "Sakurazaka46「Blue Moon Kiss」" },
    { text: "To my future self right now, what kind of life are you living over there? To my current self now while I'm here, what should I do to keep on living?", author: "Yuika「17 Sai no uta」" },
    { text: "The sin of not knowing and the trap of knowing too much, let's start moving before we can't move anymore.", author: "Nanase Aikawa「Round ZERO~BLADE BRAVE」" },
    { text: "If we give up like that from the beginning, then what was the point of us being born?", author: "Keyakizaka46「SILENT MAJORITY」" },
    { text: "Are the best days over? Have the happy days disappeared? The shining moments are far away. I know I can't go back to the past. If I'm going to dream, it's better to dream about the future.", author: "Sakurazaka46「Ikutsu no Koro ni Modoritai no ka?」" },
    { text: "Keep running until the day comes when you are recognized.", author: "Sakurazaka46「Munen」" },
    { text: "One chilly December day, we were walking all the way. In truth, there was something I wanted to tell you. The cold, crisp wind felt good. We just walked in silence along the deciduous tree-lined path.", author: "Sakurazaka46「TOKYO SNOW」" },
    { text: "The cherry blossoms that make me think of you are blown by the wind and soar through my heart. If only they could stay in full bloom a little longer. No matter how much I love you, the seasons pass and they fall in an instant. That day, the cherry blossoms were in full bloom.", author: "Sakurazaka46「Sakurazuki」" }
];

let currentQuoteIndex = -1;

function loadQuote() {
	const quoteText = document.getElementById('quoteText');
	const quoteAuthor = document.getElementById('quoteAuthor');
	
	if (!quoteText || !quoteAuthor) return;
	
	// Add loading state
	quoteText.classList.add('loading');
	quoteAuthor.classList.add('loading');
	
	// Get a random quote (different from current one)
	let newIndex;
	do {
		newIndex = Math.floor(Math.random() * quotes.length);
	} while (newIndex === currentQuoteIndex && quotes.length > 1);
	
	currentQuoteIndex = newIndex;
	const quote = quotes[currentQuoteIndex];
	
	// Animate quote change
	setTimeout(() => {
		quoteText.textContent = quote.text;
		quoteAuthor.textContent = `— ${quote.author}`;
		quoteText.classList.remove('loading');
		quoteAuthor.classList.remove('loading');
	}, 200);
}

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
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

// Add hover effect to game cards
document.querySelectorAll('.game-card').forEach(card => {
	card.addEventListener('mouseenter', function() {
		this.style.transform = 'translateY(-12px) rotate(1deg)';
	});
	card.addEventListener('mouseleave', function() {
		this.style.transform = 'translateY(0) rotate(0deg)';
	});
});

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
				const finalValue = parseInt(stat.textContent);
				let currentValue = 0;
				const increment = finalValue / 50;
				const timer = setInterval(() => {
					currentValue += increment;
					if (currentValue >= finalValue) {
						stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '');
						clearInterval(timer);
					} else {
						stat.textContent = Math.floor(currentValue);
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
const revealElements = document.querySelectorAll('.game-card, .feature-card');
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
