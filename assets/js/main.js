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

// Event delegation for experience details toggle - works with dynamically loaded content
document.addEventListener('click', function(e) {
    // Check if clicked element or its parent is a details-link
    const detailsLink = e.target.closest('.details-link');
    
    if (detailsLink && detailsLink.classList.contains('details-link')) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Details link clicked:', detailsLink);
        
        const targetId = detailsLink.getAttribute('data-target');
        console.log('Target ID:', targetId);
        
        if (!targetId) {
            console.error('No data-target attribute found');
            return false;
        }
        
        const details = document.getElementById(targetId);
        console.log('Details element found:', details);
        
        if (!details) {
            console.error('Details element not found for ID:', targetId);
            return false;
        }
        
        const icon = detailsLink.querySelector('i');
        
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            if (icon) {
                icon.className = 'fas fa-chevron-up';
            }
            detailsLink.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
            console.log('Showing details for:', targetId);
        } else {
            details.style.display = 'none';
            if (icon) {
                icon.className = 'fas fa-chevron-down';
            }
            detailsLink.innerHTML = '<i class="fas fa-chevron-down"></i> View Details';
            console.log('Hiding details for:', targetId);
        }
        
        return false;
    }
});

// Legacy function for any remaining onclick handlers
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (!details) return false;
    
    const icon = event.target.querySelector('i');
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        if (icon) {
            icon.className = 'fas fa-chevron-up';
            event.target.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
        }
    } else {
        details.style.display = 'none';
        if (icon) {
            icon.className = 'fas fa-chevron-down';
            event.target.innerHTML = '<i class="fas fa-chevron-down"></i> View Details';
        }
    }
    
    return false;
}

// Make toggleDetails globally available for any remaining onclick handlers
window.toggleDetails = toggleDetails;
