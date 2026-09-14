// WHY8 Foundation — why8.org
// Cut from the esposure4all-website mould's main.js: the navigation toggle, smooth scrolling,
// the navbar shadow and the fade-in observer. The mould's contact modal, its counters and its
// mailto form are not on this site (contact is a plain mailto:info@why8.org), so they are gone
// rather than left to throw on missing elements.
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 80; // fixed navbar
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        });
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.pageYOffset > 50);
        });
    }

    // Fade-in on scroll for any animated blocks a later page adds
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.pillar, .component, .impact-card, .option-card, .animate-on-scroll').forEach((el) => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // Keyboard navigation between nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && index < navLinks.length - 1) navLinks[index + 1].focus();
            else if (e.key === 'ArrowLeft' && index > 0) navLinks[index - 1].focus();
        });
    });
});
