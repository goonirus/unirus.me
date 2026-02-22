// thoughts_article.js
// Single source of truth for both:
// 1) thoughts_home.html (Archive grid)
// 2) each article page sidebar ("Recent Thoughts")

/**
 * Archive data schema:
 * {
 *   type: "Essay" | "Thought",
 *   date: "MMM D, YYYY" (e.g., "Feb 22, 2026"),
 *   title: string,
 *   desc: string,
 *   link: string,
 *   image?: string,
 *   categoryColor?: string
 * }
 */
const archiveData = [
    // ====== REAL ITEMS (you already have) ======
    {
        type: "Essay",
        date: "Nov 9, 2025",
        title: "It Is a Waste of Time, but Not a Game",
        desc: "If a product called \"game\" by everyone but you feel it nothing more than a waste of time, then under this definition, it isn't a game for you.",
        link: "essay/WhatIsGame.html",
        image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Essay",
        categoryColor: "text-accent"
    },
    {
        type: "Thought",
        date: "Feb 22, 2026",
        title: "Making the Ball Bounce, the Way It Should",
        desc: "Mid-course reflection on Tapper, SDL2 to SDL3, and collision response (three iterations).",
        link: "thoughts/MakingtheBallBounce.html",
        image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=SDL+%2B+Collision",
        categoryColor: "text-blue-600"
    },

    // ====== DEMO / PLACEHOLDER ITEMS (from your old rawData) ======
    { type: "Thought", date: "Oct 24, 2023", title: "The Illusion of Choice in 4X Diplomacy", desc: "Why AI behavior often breaks suspension of disbelief.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=4X", categoryColor: "text-blue-600" },
    { type: "Thought", date: "Oct 12, 2023", title: "Simulating Supply Lines", desc: "Reflections on starvation mechanics.", link: "thoughts/thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Logistics", categoryColor: "text-blue-600" },
    { type: "Essay", date: "Sep 28, 2023", title: "History as a Mechanic", desc: "How games gamify historical events properly.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=History", categoryColor: "text-accent" },
    { type: "Thought", date: "Aug 15, 2023", title: "Why I love \"Bad\" Mechanics", desc: "Defending roll-to-move in party games.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Mechanics", categoryColor: "text-blue-600" },
    { type: "Essay", date: "Jul 20, 2023", title: "Balancing Asymmetry", desc: "Ensuring fairness in asymmetric design.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Asymmetry", categoryColor: "text-accent" },
    { type: "Thought", date: "Jun 10, 2023", title: "The Color of Strategy", desc: "Color theory in area control games.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Color", categoryColor: "text-blue-600" },
    { type: "Essay", date: "May 05, 2023", title: "Narrative through Systems", desc: "Emergent storytelling vs scripted events.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Systems", categoryColor: "text-accent" },
    { type: "Thought", date: "Apr 22, 2023", title: "Dice vs. Cards", desc: "Input randomness analysis.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Randomness", categoryColor: "text-blue-600" },
    { type: "Essay", date: "Mar 15, 2023", title: "The Cost of Complexity", desc: "Finding the breaking point of rule weight.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Complexity", categoryColor: "text-accent" },
    { type: "Thought", date: "Feb 01, 2023", title: "Legacy Mechanics", desc: "Is tearing cards sacrilegious?", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Legacy", categoryColor: "text-blue-600" },
    { type: "Essay", date: "Jan 10, 2023", title: "Game Theory 101", desc: "Basic concepts for board game designers.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Theory", categoryColor: "text-accent" },
    { type: "Thought", date: "Dec 05, 2022", title: "Meeple Shapes", desc: "Does the shape of the wood matter?", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Meeple", categoryColor: "text-blue-600" },
    { type: "Thought", date: "Nov 20, 2022", title: "Box Inserts", desc: "The unsung heroes of setup time.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Insert", categoryColor: "text-blue-600" },
    { type: "Essay", date: "Oct 01, 2022", title: "The psychology of 'Take That'", desc: "Why we love to hurt our friends in games.", link: "thought_detail.html", image: "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Psychology", categoryColor: "text-accent" }
];

// ---------- helpers ----------
function _parseArchiveDate(dateStr) {
    // Supports: "Feb 22, 2026" / "May 05, 2023" etc.
    // Fallback: Date.parse, then 0 if invalid.
    const t = Date.parse(dateStr);
    return Number.isFinite(t) ? t : 0;
}

function _normalizeArchiveItem(item) {
    const isEssay = item.type === "Essay";
    return {
        ...item,
        // Ensure optional fields exist
        image: item.image || "https://placehold.co/300x200/e5e5e5/a3a3a3?text=Article",
        categoryColor: item.categoryColor || (isEssay ? "text-accent" : "text-blue-600")
    };
}

// Normalize all
const _normalizedArchiveData = archiveData.map(_normalizeArchiveItem);

// ---------- Recent Thoughts sidebar data ----------
// Keep the same variable name your article page expects: recentArticlesData
const recentArticlesData = _normalizedArchiveData
    .slice()
    .sort((a, b) => _parseArchiveDate(b.date) - _parseArchiveDate(a.date))
    .slice(0, 10)
    .map(a => ({
        title: a.title,
        category: a.type,
        categoryColor: a.categoryColor,
        image: a.image,
        link: a.link
    }));

// If you prefer to use normalized archive data elsewhere:
const archiveDataNormalized = _normalizedArchiveData;