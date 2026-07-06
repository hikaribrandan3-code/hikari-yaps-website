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

// ===== WAVEFORM CANVAS ANIMATION =====
function initWaveform(canvasId, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    function resize() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    const barCount = options.barCount || 40;
    const bars = [];
    
    for (let i = 0; i < barCount; i++) {
        bars.push({
            height: Math.random(),
            speed: 0.02 + Math.random() * 0.04,
            offset: Math.random() * Math.PI * 2
        });
    }
    
    let time = 0;
    
    function draw() {
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        ctx.clearRect(0, 0, width, height);
        
        const barWidth = (width / barCount) * 0.6;
        const gap = (width / barCount) * 0.4;
        
        bars.forEach((bar, i) => {
            const center = barCount / 2;
            const dist = Math.abs(i - center) / center;
            const envelope = 1 - dist * dist;
            
            const h = (0.3 + 0.7 * Math.sin(time * bar.speed + bar.offset)) * envelope * height * 0.8;
            const x = i * (barWidth + gap) + gap / 2;
            const y = (height - h) / 2;
            
            const gradient = ctx.createLinearGradient(x, y, x, y + h);
            gradient.addColorStop(0, 'rgba(233, 181, 76, 0.1)');
            gradient.addColorStop(0.5, 'rgba(233, 181, 76, 0.6)');
            gradient.addColorStop(1, 'rgba(233, 181, 76, 0.1)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, h, barWidth / 2);
            ctx.fill();
        });
        
        time += 0.05;
        requestAnimationFrame(draw);
    }
    
    draw();
}

// Initialize waveforms when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initWaveform('downloadWaveform', { barCount: 24 });
    initDemoAnimation();
});

// ===== LIVE DEMO ANIMATION =====
function initDemoAnimation() {
    const states = ['demoState1', 'demoState2', 'demoState3', 'demoState4'];
    const typedText = document.getElementById('typedText');
    const textToType = "Yeah, so we're aiming to have the report finalized by Friday morning...";
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
        
        // State durations: listening=2s, transcribing=2s, typing=3s, done=2s
        const durations = [2000, 2000, 3500, 2000];
        
        setTimeout(() => {
            currentState = (currentState + 1) % states.length;
            cycle();
        }, durations[currentState]);
    }
    
    // Start the cycle
    cycle();
}
document.addEventListener('DOMContentLoaded', () => {
    initWaveform('waveformCanvas', { barCount: 36 });
    initWaveform('downloadWaveform', { barCount: 24 });
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
document.querySelectorAll('.feature-card, .step, .testimonial-card, .faq-item, .comparison-row').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
