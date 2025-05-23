// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
            
            // In a real application, you would send this data to your server
            console.log('Form submitted:', { name, email, company, message });
        });
    }

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .expertise-card, .value').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat h3').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function animateCounter(element) {
    const target = parseFloat(element.textContent);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number based on the original text
        if (element.textContent.includes('TB')) {
            element.textContent = Math.floor(current) + 'TB+';
        } else if (element.textContent.includes('%')) {
            element.textContent = current.toFixed(1) + '%';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Add CSS for animations
const animationStyles = `
    .service-card,
    .expertise-card,
    .value {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .service-card.animate-in,
    .expertise-card.animate-in,
    .value.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .service-card:nth-child(2).animate-in {
        transition-delay: 0.1s;
    }

    .service-card:nth-child(3).animate-in {
        transition-delay: 0.2s;
    }

    .service-card:nth-child(4).animate-in {
        transition-delay: 0.3s;
    }

    .expertise-card:nth-child(2).animate-in {
        transition-delay: 0.1s;
    }

    .expertise-card:nth-child(3).animate-in {
        transition-delay: 0.2s;
    }

    .value:nth-child(2).animate-in {
        transition-delay: 0.1s;
    }

    .value:nth-child(3).animate-in {
        transition-delay: 0.2s;
    }

    /* Hover effects for interactive elements */
    .service-card:hover .service-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }

    .expertise-card:hover {
        transform: translateX(5px);
        transition: transform 0.3s ease;
    }

    .btn:hover {
        transform: translateY(-2px);
    }

    .tech-tag:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
        transition: all 0.3s ease;
    }

    /* Loading animation for the hero visualization */
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .data-visualization::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
        border-radius: 2px;
        animation: pulse 2s ease-in-out infinite;
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (hero && heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});
