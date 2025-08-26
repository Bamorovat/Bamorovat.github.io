// Smooth scrolling for navigation links
document.querySelectorAll('.nav-btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation item based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-btn[href^="#"]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Account for sticky nav
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Add scroll effect to navigation and update active state
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-container');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        backToTop.classList.add('show');
    } else {
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        backToTop.classList.remove('show');
    }
    
    updateActiveNavigation();
});

// Back to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize active navigation on page load
document.addEventListener('DOMContentLoaded', updateActiveNavigation);
