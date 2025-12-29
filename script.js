const toggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// 1. Theme Logic
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', target);
    localStorage.setItem('theme', target);
    toggleBtn.textContent = target === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
});

// 2. Navbar Scroll Logic
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

console.log("Embedded Systems Portfolio Logic Loaded.");
