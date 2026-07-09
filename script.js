// ===== LANGUAGE SYSTEM =====
const translations = {
  es: {
    'nav.features': 'Características',
    'nav.how-it-works': 'Cómo Funciona',
    'nav.pricing': 'Precios',
    'nav.faq': 'Preguntas',
    'nav.download': 'Descargar',
    'hero.badge': '100% Offline — Sin Nube',
    'hero.title': 'Escribe más rápido.<br>Sin tipear.<span class="accent-text">Al instante.</span>',
    'hero.subtitle': 'iVoz convierte tu voz en texto en cualquier app de tu Mac. Ahorra horas cada semana. 100% offline, 100% privado.',
    'hero.cta-primary': 'Comenzar Prueba Gratuita',
    'hero.cta-secondary': 'Ver Cómo Funciona',
    'hero.stat1': 'Llamadas API',
    'hero.stat2': 'Latencia',
    'hero.stat3': 'Privado',
    'features.badge': 'Características',
    'features.title': 'Ahorra horas cada semana.',
    'features.subtitle': 'Lo esencial. Nada más.',
    'features.feature1': 'Dicta en cualquier app',
    'features.feature1-desc': 'WhatsApp, Slack, Notion, Google Docs, email — donde sea que escribas, iVoz pega el texto al instante. Sin integraciones, sin configuración.',
    'features.feature2': '100% offline y privado',
    'features.feature2-desc': 'Tu voz nunca sale de tu Mac. Todo el procesamiento se hace localmente con el Motor Neural de Apple. Sin cloud, sin cuentas, sin rastreo.',
    'features.feature3': 'Limpieza inteligente con IA',
    'features.feature3-desc': 'La IA elimina los "eh", "um" y arregla la gramática automáticamente. Tu dictado suena profesional sin editar. Ahorra horas de revisión.',
    'carousel.label': 'Funciona en tus apps favoritas',
    'howitworks.badge': 'Proceso',
    'howitworks.title': 'Más simple que nunca',
    'howitworks.step1': 'Presiona tu atajo',
    'howitworks.step1-desc': 'Define un atajo de teclado personalizado (⌘ + tu tecla)',
    'howitworks.step2': 'Dicta',
    'howitworks.step2-desc': 'Habla de forma natural. iVoz escucha y transcribe en tiempo real.',
    'howitworks.step3': 'Pega',
    'howitworks.step3-desc': 'El texto se pega al instante en cualquier app. Listo para usar.',
    'pricing.badge': 'Precios',
    'pricing.title': 'Elige tu plan',
    'pricing.free': 'Gratis',
    'pricing.free-trial': '5 días gratis',
    'pricing.free-limit': '3500 palabras/mes después',
    'pricing.pro': 'Pro',
    'pricing.pro-price': '$9.99 USD',
    'pricing.pro-lifetime': 'De por vida',
    'pricing.pro-feature': 'Acceso ilimitado',
    'pricing.cta': 'Comprar Ahora',
    'faq.badge': 'Preguntas Frecuentes',
    'faq.title': 'Tu preguntas respondidas',
    'footer.copyright': '© 2025 iVoz. Todos los derechos reservados.',
    'checkout.title': 'Obtener iVoz Pro',
    'checkout.step1': 'Información de contacto',
    'checkout.name': 'Nombre',
    'checkout.email': 'Correo Electrónico',
    'checkout.next': 'Continuar',
    'checkout.step2': 'Selecciona método de pago',
    'checkout.paypal': 'PayPal',
    'checkout.mercadopago': 'Mercado Pago',
    'checkout.close': 'Cerrar',
    'success.title': '✓ ¡Pago Recibido!',
    'success.subtitle': 'Tu licencia de iVoz Pro está lista.',
    'success.code-label': '⚠️ Tu código de activación (usa una sola vez):',
    'success.code-warning': 'Guárdalo en un lugar seguro. Es como una API key — úsalo una sola vez para activar iVoz Pro en tu Mac.',
    'success.step1': 'Copia el código de arriba',
    'success.step2': 'Abre iVoz en tu Mac',
    'success.step3': 'Ve a Configuración → Licencia',
    'success.step4': 'Pega el código y haz clic en Activar',
    'success.step5': '¡Listo! Acceso ilimitado de por vida',
    'success.back': 'Volver al Inicio'
  },
  en: {
    'nav.features': 'Features',
    'nav.how-it-works': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',
    'hero.badge': '100% Offline — No Cloud',
    'hero.title': 'Write faster.<br>No typing.<span class="accent-text">Instantly.</span>',
    'hero.subtitle': 'iVoz converts your voice to text in any Mac app. Save hours every week. 100% offline, 100% private.',
    'hero.cta-primary': 'Start Free Trial',
    'hero.cta-secondary': 'See How It Works',
    'hero.stat1': 'API Calls',
    'hero.stat2': 'Latency',
    'hero.stat3': 'Private',
    'features.badge': 'Features',
    'features.title': 'Save hours every week.',
    'features.subtitle': 'The essentials. Nothing more.',
    'features.feature1': 'Dictate in any app',
    'features.feature1-desc': 'WhatsApp, Slack, Notion, Google Docs, email — wherever you type, iVoz pastes instantly. No integrations, no setup.',
    'features.feature2': '100% offline and private',
    'features.feature2-desc': 'Your voice never leaves your Mac. All processing happens locally with Apple\'s Neural Engine. No cloud, no accounts, no tracking.',
    'features.feature3': 'Smart AI cleanup',
    'features.feature3-desc': 'AI removes "uh", "um" and fixes grammar automatically. Your dictation sounds professional without editing. Save hours of review.',
    'carousel.label': 'Works in your favorite apps',
    'howitworks.badge': 'Process',
    'howitworks.title': 'Easier than ever',
    'howitworks.step1': 'Press your hotkey',
    'howitworks.step1-desc': 'Set a custom keyboard shortcut (⌘ + your key)',
    'howitworks.step2': 'Dictate',
    'howitworks.step2-desc': 'Speak naturally. iVoz listens and transcribes in real time.',
    'howitworks.step3': 'Paste',
    'howitworks.step3-desc': 'Text pastes instantly into any app. Ready to use.',
    'pricing.badge': 'Pricing',
    'pricing.title': 'Choose your plan',
    'pricing.free': 'Free',
    'pricing.free-trial': '5 days free',
    'pricing.free-limit': '3500 words/month after',
    'pricing.pro': 'Pro',
    'pricing.pro-price': '$9.99 USD',
    'pricing.pro-lifetime': 'Lifetime',
    'pricing.pro-feature': 'Unlimited access',
    'pricing.cta': 'Buy Now',
    'faq.badge': 'FAQ',
    'faq.title': 'Your questions answered',
    'footer.copyright': '© 2025 iVoz. All rights reserved.',
    'checkout.title': 'Get iVoz Pro',
    'checkout.step1': 'Contact Information',
    'checkout.name': 'Name',
    'checkout.email': 'Email',
    'checkout.next': 'Continue',
    'checkout.step2': 'Select payment method',
    'checkout.paypal': 'PayPal',
    'checkout.mercadopago': 'Mercado Pago',
    'checkout.close': 'Close',
    'success.title': '✓ Payment Received!',
    'success.subtitle': 'Your iVoz Pro license is ready.',
    'success.code-label': '⚠️ Your activation code (one-time use):',
    'success.code-warning': 'Save it somewhere safe. It\'s like an API key — use it once to activate iVoz Pro on your Mac.',
    'success.step1': 'Copy the code above',
    'success.step2': 'Open iVoz on your Mac',
    'success.step3': 'Go to Settings → License',
    'success.step4': 'Paste the code and click Activate',
    'success.step5': 'Done! Lifetime unlimited access',
    'success.back': 'Back to Home'
  }
};

let currentLang = localStorage.getItem('iVozLang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('iVozLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (key === 'hero.title') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update language buttons
  document.getElementById('langES').classList.toggle('active', lang === 'es');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langES').addEventListener('click', () => setLanguage('es'));
  document.getElementById('langEN').addEventListener('click', () => setLanguage('en'));
  setLanguage(currentLang);
});

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

// ===== SUPABASE CLIENT =====
let supabaseClient = null;

function initSupabase() {
    if (!supabaseClient && window.supabase) {
        const { createClient } = window.supabase;
        const supabaseUrl = 'https://nfwcquwoyaeqgekncmyc.supabase.co';
        const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5md2NxdXdveWFlcWdla25jbXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODYwNDIsImV4cCI6MjA5NzQ2MjA0Mn0._nY420m1fbyfK1hlF-BBYQ2dMjHcvtJjHG2w00NnCLM';
        supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    }
    return supabaseClient;
}

// ===== PAYPAL & MERCADO PAGO INTEGRATION =====
document.addEventListener('DOMContentLoaded', () => {
    initDemoAnimation();
    initSupabase();
    checkMercadoPagoReturn();
});

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
            closeCheckoutModal();
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

    // Get translations for current language
    const t = translations[currentLang];

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
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #34c759;">${t['success.title']}</h2>
            <p style="font-size: 1.1rem; color: #555; margin-bottom: 30px;">${t['success.subtitle']}</p>

            <div style="background: #FFF3CD; border: 1px solid #FFC107; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
                <p style="font-size: 0.9rem; color: #856404; margin-bottom: 10px; font-weight: 600;">${t['success.code-label']}</p>
                <p style="font-size: 2rem; font-weight: 700; color: #0071e3; font-family: monospace; letter-spacing: 2px; margin: 0; padding: 10px; background: white; border-radius: 8px;">${code}</p>
                <p style="font-size: 0.85rem; color: #856404; margin-top: 10px; margin-bottom: 0;">${t['success.code-warning']}</p>
            </div>

            <ol style="text-align: left; color: #555; margin-bottom: 30px;">
                <li style="margin-bottom: 12px;"><strong>${t['success.step1']}</strong></li>
                <li style="margin-bottom: 12px;"><strong>${t['success.step2']}</strong></li>
                <li style="margin-bottom: 12px;"><strong>${t['success.step3']}</strong></li>
                <li style="margin-bottom: 12px;"><strong>${t['success.step4']}</strong></li>
                <li style="margin-bottom: 0;"><strong>${t['success.step5']}</strong></li>
            </ol>

            <button onclick="window.location.href='https://ivoz.vercel.app/'" style="background: #0071e3; color: white; border: none; padding: 12px 32px; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer;">
                ${t['success.back']}
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== MERCADO PAGO INTEGRATION =====

// Check if returning from Mercado Pago. MP appends payment_id/status itself;
// email travels via our own query param since the page fully reloads.
function checkMercadoPagoReturn() {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment');
    const paymentId = params.get('payment_id') || params.get('collection_id');
    const email = params.get('email');

    if (paymentStatus === 'success' && paymentId && email) {
        verifyMercadoPagoPayment(paymentId, decodeURIComponent(email));
    } else if (paymentStatus === 'failure') {
        alert('El pago no se pudo completar. Por favor intenta de nuevo.');
    }
}

async function verifyMercadoPagoPayment(paymentId, email) {
    try {
        const response = await fetch('https://nfwcquwoyaeqgekncmyc.supabase.co/functions/v1/handle-mercadopago-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'verify',
                paymentId: paymentId,
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

// ===== CHECKOUT MODAL =====
function openCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('checkout-step-1').style.display = 'block';
    document.getElementById('checkout-step-2').style.display = 'none';
    document.getElementById('payment-method-selector').style.display = 'flex';
    document.getElementById('paypal-render-container').style.display = 'none';
    document.getElementById('paypal-render-container').innerHTML = '';
    document.getElementById('mp-loading-state').style.display = 'none';
    document.getElementById('payment-nav-buttons').style.display = 'flex';
    document.getElementById('customer-form').reset();
}

async function proceedToPayment() {
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;

    if (!email) {
        alert('Por favor ingresa tu email');
        return;
    }

    // Save customer info to Supabase
    try {
        const client = initSupabase();
        const { error } = await client
            .from('customers')
            .insert({
                name: name || 'Usuario',
                email: email
            });

        if (error && error.code !== '23505') { // 23505 = duplicate email
            console.error('Error saving customer:', error);
        }

        // Move to payment method selection
        document.getElementById('checkout-step-1').style.display = 'none';
        document.getElementById('checkout-step-2').style.display = 'block';
        document.getElementById('payment-email').textContent = email;
        window.currentCheckoutEmail = email;
        window.currentCheckoutName = name;
    } catch (error) {
        console.error('Error:', error);
        alert('Error procesando tu información');
    }
}

function backToStep1() {
    document.getElementById('checkout-step-1').style.display = 'block';
    document.getElementById('checkout-step-2').style.display = 'none';
}

function selectPaymentMethod(method) {
    const email = window.currentCheckoutEmail;

    if (method === 'paypal') {
        renderPayPalButtons(email);
    } else if (method === 'mercadopago') {
        initiateMercadoPagoPayment(email);
    }
}

function renderPayPalButtons(email) {
    if (typeof paypal === 'undefined') {
        alert('PayPal no está disponible en este momento. Por favor intenta de nuevo o usa Mercado Pago.');
        return;
    }

    // Swap views: hide the method selector, show the PayPal render target
    document.getElementById('payment-method-selector').style.display = 'none';
    document.getElementById('payment-nav-buttons').style.display = 'none';
    const container = document.getElementById('paypal-render-container');
    container.style.display = 'block';
    container.innerHTML = ''; // clear any previous render

    // Back button so the user isn't stuck if they change their mind
    const backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'btn btn-outline';
    backBtn.textContent = 'Elegir otro método';
    backBtn.style.width = '100%';
    backBtn.style.marginTop = '12px';
    backBtn.onclick = () => {
        document.getElementById('payment-method-selector').style.display = 'flex';
        document.getElementById('payment-nav-buttons').style.display = 'flex';
        container.style.display = 'none';
        container.innerHTML = '';
    };

    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: '9.99' }
                }]
            });
        },
        onApprove: (data, actions) => {
            return verifyPaymentAndGenerateCode(data.orderID, actions);
        },
        onError: (err) => {
            console.error('PayPal Error:', err);
            alert('El pago falló. Por favor intenta de nuevo.');
        }
    }).render(container).then(() => {
        container.appendChild(backBtn);
    });
}

async function initiateMercadoPagoPayment(email) {
    document.getElementById('payment-method-selector').style.display = 'none';
    document.getElementById('payment-nav-buttons').style.display = 'none';
    document.getElementById('mp-loading-state').style.display = 'block';

    try {
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

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Edge Function returned ${response.status}: ${text}`);
        }

        const result = await response.json();

        if (result.success && result.initPoint) {
            window.location.href = result.initPoint;
        } else {
            throw new Error(result.error || 'Unknown error creating preference');
        }
    } catch (error) {
        console.error('Mercado Pago error:', error);
        alert('No se pudo iniciar el pago con Mercado Pago. Verifica que la función esté desplegada, o intenta con PayPal.');
        document.getElementById('mp-loading-state').style.display = 'none';
        document.getElementById('payment-method-selector').style.display = 'flex';
        document.getElementById('payment-nav-buttons').style.display = 'flex';
    }
}
