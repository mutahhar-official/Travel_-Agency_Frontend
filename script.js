// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe destination cards with stagger effect
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe package cards with stagger effect
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Form submission handler (visual only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Visual feedback
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending
        setTimeout(() => {
            submitBtn.textContent = '✓ Message Sent!';
            submitBtn.style.backgroundColor = '#2E5C55';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}

// Package card button handlers
const packageButtons = document.querySelectorAll('.package-btn');
packageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const packageCard = e.target.closest('.package-card');
        const packageName = packageCard.querySelector('h3').textContent;
        
        // Visual feedback
        const originalText = btn.textContent;
        btn.textContent = 'Added to Cart!';
        btn.style.backgroundColor = '#2E5C55';
        
        // Show alert (in a real app, this would add to cart)
        setTimeout(() => {
            alert(`Great choice! You've selected the ${packageName} package. Our team will contact you shortly.`);
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 500);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Add entrance animation to hero content
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 300);
    }
});