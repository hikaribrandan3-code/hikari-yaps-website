// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ===== LIVE DEMO ANIMATION =====
function initDemoAnimation() {
    const states = ['demoState1', 'demoState2', 'demoState3', 'demoState4'];
    const typedText = document.getElementById('typedText');
    const textToType = "Sí, entonces apuntamos a tener el informe listo para el viernes por la mañana...";
    let currentState = 0;
    let typingInterval;
    
    function showState(index) {
        // Hide all states
        states.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });
        
        // Show current state
        const current = document.getElementById(states[index]);
        if (current) {
            current.classList.add('active');
            
            // If it's the typing state, start typing
            if (index === 2 && typedText) {
                typedText.textContent = '';
                let charIndex = 0;
                clearInterval(typingInterval);
                typingInterval = setInterval(() => {
                    if (charIndex < textToType.length) {
                        typedText.textContent += textToType[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 35);
            }
        }
    }
    
    function cycle() {
        showState(currentState);
        
        // State durations: listening=2s, transcribing=2s, typing=3.5s, done=2s
        const durations = [2000, 2000, 3500, 2000];
        
        setTimeout(() => {
            currentState = (currentState + 1) % states.length;
            cycle();
        }, durations[currentState]);
    }
    
    // Start the cycle
    cycle();
}

// ===== PROGRESS BAR ANIMATION =====
function animateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (!progressFill) return;
    
    const targetWidth = progressFill.style.width;
    progressFill.style.width = '0%';
    
    setTimeout(() => {
        progressFill.style.width = targetWidth;
    }, 400);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll('.feature-card, .step, .pricing-card, .faq-item, .comparison-row, .contact-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== STAT COUNTER ANIMATION =====
function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * eased);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Animate stats when hero is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('ms')) {
                    stat.textContent = '0ms';
                    setTimeout(() => animateCounter(stat, 0, 'ms'), 300);
                } else if (text.includes('%')) {
                    stat.textContent = '0%';
                    setTimeout(() => animateCounter(stat, 100, '%'), 300);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== PROGRESS BAR OBSERVER =====
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBar();
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const pricingCard = document.querySelector('.pricing-card-free');
if (pricingCard) {
    progressObserver.observe(pricingCard);
}

// ===== TESTIMONIALS CAROUSEL AUTO-ROTATE =====
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonials-dots .dot');

function switchTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));

    testimonialCards[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentTestimonial = index;
}

function autoRotateTestimonials() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    switchTestimonial(currentTestimonial);
}

if (testimonialCards.length > 0) {
    setInterval(autoRotateTestimonials, 5000); // Change every 5 seconds
}

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initDemoAnimation();
});
