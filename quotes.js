const quotes = [

    {
        text: "Momentary lights overlap, and their various colors create the four seasons. If any of them were missing, eternity would not be born.",
        author: "Keyakizaka46「Futari Saison」"
    },

    {
        text: "I'm sure the white butterfly was flying, fluttering in the deep blue sky, and wandering into a street corner. My own slightly vague memories.",
        author: "Sakurazaka46「Monshirochou ga Tashika Tondeta」"
    },

    {
        text: "I've thought about it, but I still don't understand. Under the blue sky, I waited for you. On that breezy afternoon, my imagination escaped the confines of the day.",
        author: "Yorushika「Dakara Boku wa Ongaku o Yameta」"
    },

    {
        text: "Running to Horizon, break away from yesterday. Climbing on Loneliness, under the sky without constellations.",
        author: "Tetsuya Komuro「RUNNING TO HORIZON」"
    },

    {
        text: "We'll see creation come undone, these bones that bound us will be gone. We'll stir our spirits 'till we're one, then soft as shadows we'll become.",
        author: "Porter Robinson「Sea of Voices」"
    },

    {
        text: "'Cause I'm not the same as I was. As I shoulder the weight of the world.",
        author: "Porter Robinson「Unfold」"
    },

    {
        text: "Look at the sky, I'm still here. I'll be alive next year.",
        author: "Porter Robinson「Look At The Sky」"
    },

    {
        text: "The saber in your hand, is a pen to write it down. Words to save this world.",
        author: "Tokyo Ska Paradise Orchestra, Yoohei Kawakami「ALMIGHTY ~ Kamen no Yakusoku」"
    },


    {
        text: "Even when I'm lost in the darkness as the sun fades away, I close my eyes and listen to the voice in my heart so I can move forward.",
        author: "Rica Matsumoto「Alive A Life」"
    },

    {
        text: "I want to pursue my dreams in my own still-clumsy way. Feeling for the first time the rush running through me that comes from being alive.",
        author: "Rica Matsumoto「Alive A Life」"
    },

    {
        text: "Far-off, childhood memories hold a warmth like the sunlight. Awakening from a transient dream, loneliness realizes it's all alone.",
        author: "Minori Chihara「Michishirube」"
    },


    {
        text: "See the flowers breathing in the rain. Try growing to the edge of light. It's so far away to reach out to the sky... I'll seize the roses. With my wings, we'll fly.",
        author: "YOSHIKI, HYDE「Red Swan」"
    },

    {
        text: "You still are blind if you see a winding road. 'Cause there's always a straight way to the point you seek.",
        author: "Akebori「Wind」"
    },

    {
        text: "So I take shelter from the rain in my heart. And wait here for the sun to break through the clouds.",
        author: "Sakurazaka46「Samidare yo」"
    },

    {
        text: "There's something I want to show you. Thousands of stars which continue to glow far away even on lonely nights. Losing something, remaining unconvinced, being repelled, things that won't come true. But to still flounder, to continue believing. Raise your head and move on.",
        author: "RAM WIRE「Bokura no Te ni wa Nanimo Nai kedo」"
    },


    {
        text: "Unclarified issues yet to be solved. Grab me by the collar, asking if this is really necessary. Airships that take flight one after another. Beyond the wafting dust, rises a spreading sky.",
        author: "Daichi Miura「Hikousen」"
    },

    {
        text: "I'm ready to be somebody else. I'll forget how to feel the things I've felt.",
        author: "Last Dinosaurs「Apollo」"
    },

    {
        text: "Love is something that makes you feel at ease. As if the threads of our hearts have loosened, distance has grown between us. I want to look only at you once more. Can you give me some time?",
        author: "Keyakizaka46「Concentration」"
    },

    {
        text: "The wind blew through and everything became quiet. How awkward it was for the two of us.",
        author: "Sakurazaka46「Blue Moon Kiss」"
    },
    {
        text: "To my future self right now, what kind of life are you living over there? To my current self now while I'm here, what should I do to keep on living?",
        author: "Yuika「17 Sai no uta」"
    },
    {
        text: "The sin of not knowing and the trap of knowing too much, let's start moving before we can't move anymore.",
        author: "Nanase Aikawa「Round ZERO~BLADE BRAVE」"
    },
    {
        text: "If we give up like that from the beginning, then what was the point of us being born?",
        author: "Keyakizaka46「SILENT MAJORITY」"
    },
    {
        text: "Are the best days over? Have the happy days disappeared? The shining moments are far away. I know I can't go back to the past. If I'm going to dream, it's better to dream about the future.",
        author: "Sakurazaka46「Ikutsu no Koro ni Modoritai no ka?」"
    },
    {
        text: "Keep running until the day comes when you are recognized.",
        author: "Sakurazaka46「Munen」"
    },
    {
        text: "One chilly December day, we were walking all the way. In truth, there was something I wanted to tell you. The cold, crisp wind felt good. We just walked in silence along the deciduous tree-lined path.",
        author: "Sakurazaka46「TOKYO SNOW」"
    },
    {
        text: "The cherry blossoms that make me think of you are blown by the wind and soar through my heart. If only they could stay in full bloom a little longer. No matter how much I love you, the seasons pass and they fall in an instant. That day, the cherry blossoms were in full bloom.",
        author: "Sakurazaka46「Sakurazuki」"
    }
];

// Function to get a random quote
let shuffledQuotes = [];
let currentIndex = 0;

function shuffleQuotes() {
    shuffledQuotes = quotes.slice(); // copy
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]];
    }
    currentIndex = 0;
}

function getRandomQuote() {
    if (shuffledQuotes.length === 0 || currentIndex >= shuffledQuotes.length) {
        shuffleQuotes();
    }
    return shuffledQuotes[currentIndex++];
}

// Function to display quote in the designated element
function displayQuote() {
    const quoteElement = document.getElementById('dynamic-quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    
    if (quoteElement && quoteTextElement && quoteAuthorElement) {
        const quote = getRandomQuote();
        
        // Add fade-out effect
        quoteElement.style.opacity = '0';
        
        setTimeout(() => {
            quoteTextElement.textContent = `"${quote.text}"`;
            quoteAuthorElement.textContent = `- ${quote.author}`;
            
            // Add fade-in effect
            quoteElement.style.opacity = '1';
        }, 300);
    }
}

// Initialize quote when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(displayQuote, 100);
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quotes, getRandomQuote, displayQuote };
}
