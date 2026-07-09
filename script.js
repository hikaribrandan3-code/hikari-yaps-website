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

// ===== PAYPAL & MERCADO PAGO INTEGRATION =====
document.addEventListener('DOMContentLoaded', () => {
    initDemoAnimation();
    initPayPal();
    initMercadoPago();
});

function initPayPal() {
    const proButton = document.querySelector('button[onclick="scrollToCheckout(\'pro\')"]');

    if (proButton && typeof paypal !== 'undefined') {
        proButton.style.display = 'none';

        const container = proButton.parentElement;
        const paypalContainer = document.createElement('div');
        paypalContainer.id = 'paypal-button-container';
        paypalContainer.style.marginTop = '20px';
        container.insertBefore(paypalContainer, proButton);

        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '14.99'
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return verifyPaymentAndGenerateCode(data.orderID, actions);
            },
            onError: (err) => {
                console.error('PayPal Error:', err);
                alert('Payment failed. Please try again.');
            }
        }).render('#paypal-button-container');
    }
}

async function verifyPaymentAndGenerateCode(orderId, actions) {
    try {
        // Get payer email from PayPal order details
        const orderDetails = await actions.order.get();
        const email = orderDetails.payer.email_address;

        // Call Supabase Edge Function to verify payment and generate code
        const response = await fetch('https://nfwcquwoyaeqgekncmyc.supabase.co/functions/v1/handle-paypal-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderId: orderId,
                email: email
            })
        });

        const result = await response.json();

        if (result.success) {
            showSuccessPage(result.code, result.email);
        } else {
            console.error('Payment verification failed:', result.error);
            alert('Payment verified but code generation failed. Please contact support.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Payment processing error. Please try again or contact support.');
    }
}

function showSuccessPage(code, email) {
    // Hide pricing section
    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) pricingSection.style.display = 'none';

    // Create success modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 20px; max-width: 500px; text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,0.1);">
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #34c759;">✓ ¡Pago Recibido!</h2>
            <p style="font-size: 1.1rem; color: #555; margin-bottom: 30px;">Tu licencia de iVoz Pro ha sido activada.</p>

            <div style="background: #f5f5f7; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 0.9rem; color: #999; margin-bottom: 10px;">Tu código de activación:</p>
                <p style="font-size: 2rem; font-weight: 700; color: #0071e3; font-family: monospace; letter-spacing: 2px; margin: 0;">${code}</p>
            </div>

            <p style="color: #555; margin-bottom: 10px;">Confirmación enviada a: <strong>${email}</strong></p>

            <ol style="text-align: left; color: #555; margin-bottom: 30px;">
                <li style="margin-bottom: 10px;">Abre iVoz en tu Mac</li>
                <li style="margin-bottom: 10px;">Ve a Configuración → Licencia</li>
                <li style="margin-bottom: 10px;">Ingresa el código: <strong>${code}</strong></li>
                <li>¡Listo! Disfruta acceso ilimitado</li>
            </ol>

            <button onclick="window.location.href='https://ivoz.vercel.app/'" style="background: #0071e3; color: white; border: none; padding: 12px 32px; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer;">
                Volver al Inicio
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== MERCADO PAGO INTEGRATION =====
function initMercadoPago() {
    const mpButton = document.getElementById('mp-button');

    if (mpButton) {
        mpButton.addEventListener('click', async () => {
            const email = prompt('Ingresa tu email para continuar:');
            if (!email) return;

            mpButton.disabled = true;
            mpButton.textContent = 'Cargando...';

            try {
                // Create preference
                const response = await fetch('https://nfwcquwoyaeqgekncmyc.supabase.co/functions/v1/handle-mercadopago-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        action: 'create',
                        email: email
                    })
                });

                const result = await response.json();

                if (result.success && result.initPoint) {
                    // Redirect to Mercado Pago
                    window.location.href = result.initPoint;
                } else {
                    alert('Error creating payment. Please try again.');
                    mpButton.disabled = false;
                    mpButton.textContent = 'Pagar con Mercado Pago — $14.99';
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error creating payment. Please try again.');
                mpButton.disabled = false;
                mpButton.textContent = 'Pagar con Mercado Pago — $14.99';
            }
        });
    }
}

// Check if returning from Mercado Pago
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment');
    const preferenceId = params.get('preference_id');

    if (paymentStatus === 'success' && preferenceId) {
        const email = prompt('Confirma tu email para generar el código:');
        if (email) {
            verifyMercadoPagoPayment(preferenceId, email);
        }
    }
});

async function verifyMercadoPagoPayment(preferenceId, email) {
    try {
        const response = await fetch('https://nfwcquwoyaeqgekncmyc.supabase.co/functions/v1/handle-mercadopago-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'verify',
                preferenceId: preferenceId,
                email: email
            })
        });

        const result = await response.json();

        if (result.success) {
            showSuccessPage(result.code, result.email);
        } else {
            alert('Payment verification failed: ' + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error verifying payment. Please contact support.');
    }
}
