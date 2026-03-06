// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'bg-white/95');
        navbar.classList.remove('bg-white/80', 'shadow-sm');
    } else {
        navbar.classList.add('bg-white/80', 'shadow-sm');
        navbar.classList.remove('shadow-md', 'bg-white/95');
    }
});

// Close mobile menu when clicking a link
const mobileLinks = menu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Basic Intersection Observer for fade-in animations on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add initial opacity-0 to sections to animate them
document.querySelectorAll('section > div > div').forEach(el => {
    if (el.parentElement.parentElement.id !== 'home') {
        el.classList.add('opacity-0');
        observer.observe(el);
    }
});
