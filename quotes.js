// quotes.js - Collection of inspirational quotes for developers and creators
const quotes = [

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