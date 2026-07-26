// ===== LANGUAGE SYSTEM ====
const translations = {
  es: {
    'nav.features': 'Características',
    'nav.how-it-works': 'Cómo Funciona',
    'nav.pricing': 'Precios',
    'nav.faq': 'Preguntas',
    'nav.download': 'Descargar',
    'hero.badge': '100% Offline — Sin Nube',
    'hero.title': 'Escribe más rápido.<br>Sin teclear. <span class="accent-text">Al instante.</span>',
    'hero.subtitle': 'iVoz convierte tu voz en texto en cualquier app de tu Mac. Ahorra horas cada semana. 100% offline, 100% privado.',
    'hero.cta-primary': 'Comenzar Prueba Gratuita',
    'hero.cta-secondary': 'Ver Cómo Funciona',
    'hero.requirements': '3 días gratis, ilimitado · Requiere Mac con Apple Silicon (M1 o superior), macOS 14+',
    'hero.stat1': 'Llamadas API',
    'hero.stat2': 'Servidores',
    'hero.stat3': 'Privado',
    'video.badge': 'Demo real',
    'video.title': 'Míralo funcionar.',
    'video.subtitle': 'Sin cortes, sin trucos. Así de rápido es.',
    'video.unsupported': 'Tu navegador no soporta video. Descarga iVoz y pruébalo gratis.',
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
    'who.badge': 'Para quién es',
    'who.title': 'Hecho para la gente que escribe todo el día.',
    'who.card1': 'Estudiantes',
    'who.card1-desc': 'Dicta tu tesis, tus apuntes y ensayos en una fracción del tiempo. Captura las clases sin perderte nada.',
    'who.card2': 'Creadores de contenido',
    'who.card2-desc': 'Guiones de video, newsletters y posts — dictados mientras caminas. Tu voz es tu teclado más rápido.',
    'who.card3': 'Developers y vibe coders',
    'who.card3-desc': 'Prompts, documentación y comentarios dictados directo en Cursor, VS Code o ChatGPT. Incluso sin WiFi.',
    'who.card4': 'Trabajadores de oficina',
    'who.card4-desc': 'Vacía tu bandeja de entrada dictando respuestas en vez de teclearlas. Los 50 mails del día, en una hora.',
    'who.devnote': '"Construí iVoz porque estaba pagando $15/mes por un dictado que mandaba mi voz a un servidor. Esto es lo que yo mismo uso todos los días — y por eso es un pago único, no una suscripción."',
    'who.devnote-author': '— Brandan, desarrollador de iVoz · Córdoba, Argentina',
    'howitworks.badge': 'Cómo Funciona',
    'howitworks.title': 'Tres pasos. Cero complicaciones.',
    'howitworks.step1': 'Presiona',
    'howitworks.step1-desc': 'Mantén presionada tu tecla de acceso directo (por defecto: Ctrl). Un punto rojo y barras de onda aparecen en la parte inferior de tu pantalla.',
    'howitworks.step2': 'Habla',
    'howitworks.step2-desc': 'Habla a tu ritmo normal. El Motor Neural procesa tu voz en tiempo real. Di "nueva línea" o "nuevo párrafo" para formatear.',
    'howitworks.step3': 'Listo',
    'howitworks.step3-desc': 'Suelta la tecla. El texto aparece al instante en cualquier campo — ChatGPT, Slack, un editor de código, donde sea. Una marca dorada confirma que está listo.',
    'howitworks.point1': '<strong>Funciona offline</strong> — tu voz nunca sale de tu Mac',
    'howitworks.point2': '<strong>Sin cloud.</strong> Sin datos en servidores extraños.',
    'howitworks.point3': '<strong>Privacidad real.</strong> Velocidad real.',
    'pricing.badge': 'Precios',
    'pricing.title': 'Una sola compra. Para siempre.',
    'pricing.subtitle': 'Sin suscripciones mensuales. Sin compromisos.',
    'pricing.free': 'Prueba Gratis',
    'pricing.free-trial': '3 días · <strong>Todo ilimitado</strong>',
    'pricing.free-f1': '<span class="check">✓</span> Palabras ilimitadas por 3 días',
    'pricing.free-f2': '<span class="check">✓</span> Todas las funciones Pro incluidas',
    'pricing.free-f3': '<span class="check">✓</span> Funciona 100% offline',
    'pricing.free-f4': '<span class="check">✓</span> Sin tarjeta de crédito',
    'pricing.free-f5': '<span class="check">✓</span> Sin nube, sin suscripción',
    'pricing.free-cta': 'Descargar Gratis',
    'pricing.launch-offer': 'Oferta de Lanzamiento',
    'pricing.pro': 'PRO',
    'pricing.pro-price': '$9.99<span class="price-note"> de una sola vez</span>',
    'pricing.savings': 'Ahorras $15',
    'pricing.pro-lifetime': 'Ilimitado. Para siempre.',
    'pricing.pro-f1': '<span class="check">✓</span> <strong>Palabras ilimitadas</strong>',
    'pricing.pro-f2': '<span class="check">✓</span> Limpieza con IA',
    'pricing.pro-f3': '<span class="check">✓</span> Todos los tonos (4)',
    'pricing.pro-f4': '<span class="check">✓</span> Vocabulario ilimitado',
    'pricing.pro-f5': '<span class="check">✓</span> Historial completo',
    'pricing.pro-f6': '<span class="check">✓</span> 100% offline, sin cloud',
    'pricing.pro-cta': 'Desbloquear Pro — $9.99',
    'pricing.pro-footer': 'Un pago. Tuyo para siempre.',
    'pricing.guarantee': '🛡️ Garantía de 30 días — si no te gusta, te devuelvo el dinero.',
    'compare.title': 'Comparado con software similar',
    'compare.ivoz-period': 'de una sola vez',
    'compare.wispr-period': 'por año ($15/mes)',
    'table.badge': 'Comparación',
    'table.title': 'Elige lo que necesitas.',
    'table.col-feature': 'Característica',
    'table.col-trial': 'Prueba (3 días)',
    'table.row1': 'Palabras',
    'table.row1-trial': 'Ilimitadas (3 días)',
    'table.row1-pro': 'Ilimitadas',
    'table.row2': 'Limpieza IA',
    'table.row3': 'Todos los tonos',
    'table.row4': 'Historial',
    'table.row5': 'Después de la prueba',
    'table.row5-trial': 'Se bloquea hasta pagar',
    'table.row5-pro': 'Tuyo para siempre',
    'cta.title': '¿Listo para trabajar más rápido?',
    'cta.subtitle': 'Comienza tu prueba gratuita hoy. Sin tarjeta de crédito. Sin obligaciones.',
    'cta.button': 'Comenzar Prueba Gratuita — 3 días ilimitados',
    'cta.subtext': 'Sin tarjeta de crédito. $9.99 una sola vez si te gusta. Garantía de 30 días.',
    'contact.badge': 'Contacto',
    'contact.title': '¿Preguntas?',
    'contact.subtitle': 'Estamos aquí para ayudarte.',
    'contact.label': 'Teléfono / WhatsApp',
    'faq.badge': 'Preguntas Frecuentes',
    'faq.title': '¿Tienes dudas? Te las resolvemos.',
    'faq.q1': '¿Cómo funciona la prueba gratis?',
    'faq.a1': 'Descargas iVoz y lo usas completo — palabras ilimitadas, limpieza con IA, todos los tonos — gratis por 3 días. Sin tarjeta de crédito. Cuando termina la prueba, desbloqueas Pro por $9.99 una sola vez. Sin suscripciones, sin pagos mensuales, nunca.',
    'faq.q2': '¿Qué Mac necesito?',
    'faq.a2': 'Cualquier Mac con chip Apple Silicon (M1, M2, M3 o M4) y macOS 14 (Sonoma) o posterior. La app está optimizada para el Motor Neural y la GPU, por lo que funciona rápido y eficiente en todos los chips Apple Silicon.',
    'faq.q3': '¿Funciona con mi idioma?',
    'faq.a3': 'iVoz transcribe en 10 idiomas: español, inglés, portugués, francés, alemán, italiano, japonés, coreano, chino y detección automática. La interfaz de la app está disponible en español, inglés y portugués. La limpieza con IA funciona mejor en español e inglés.',
    'faq.q4': '¿Cuánto espacio usa?',
    'faq.a4': 'La app ocupa ~34 MB. Los modelos se descargan al iniciar por primera vez: el modelo de voz es ~145 MB y el modelo opcional de limpieza IA es ~1 GB. Total: aproximadamente 1.2 GB. Todo se almacena localmente y nunca se actualiza a menos que tú elijas hacerlo.',
    'faq.q5': '¿Mis datos son realmente privados?',
    'faq.a5': 'Absolutamente. Tu audio se procesa completamente en tu Mac usando el Motor Neural y la GPU. Nada se envía a ningún servidor. Tu historial de transcripciones se guarda localmente en ~/Library/Application Support/iVoz/. No recopilamos telemetría, no requerimos cuenta y no rastreamos nada.',
    'footer.tagline': 'Dictado por voz para macOS.<br>Construido con amor, café y el Motor Neural.',
    'footer.copyright': '© 2026 iVoz. Todos los derechos reservados.',
    'checkout.title': 'Completa tu compra',
    'checkout.step1': 'Información de contacto',
    'checkout.name': 'Nombre (opcional)',
    'checkout.email': 'Email *',
    'checkout.next': 'Continuar',
    'checkout.step2': 'Elige tu método de pago',
    'checkout.paypal': 'PayPal',
    'checkout.mercadopago': 'Mercado Pago',
    'demo.listening': 'Escuchando...',
    'demo.transcribing': 'Transcribiendo...',
    'demo.done': 'Listo',
    'demo.pasted': 'Pegado en tu app',
    'demo.live': 'Demo en vivo',
    'demo.accuracy': '98% Precisión',
    'demo.line1': 'Hola equipo, respecto a la',
    'demo.line2': 'hoja de ruta del Q3, creo que',
    'demo.line3': 'deberíamos priorizar...',
    'checkout.subtitle': 'iVoz Pro — Acceso ilimitado de por vida',
    'checkout.cancel': 'Cancelar',
    'checkout.back': 'Atrás',
    'checkout.secure': 'Tu información está segura y encriptada.',
    'checkout.paypal-desc': 'Rápido y seguro',
    'checkout.mp-desc': 'Tarjetas y billeteras',
    'checkout.mp-redirect': 'Redirigiendo a Mercado Pago...',
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
    'success.back': 'Volver al Inicio',
    'download.title': 'Instrucciones de Configuración',
    'download.subtitle': 'Un comando para comenzar',
    'download.paste_instruction': 'Abre Terminal y pega esto:',
    'download.explanation': 'Esto descarga, extrae, elimina la advertencia de seguridad e inicia la app. Sin cuotas corporativas — el 100% de tu pago va al desarrollo.',
    'download.download_button': 'Descargar (10 MB)',
    'download.copy_button': 'Copiar',
  },
  en: {
    'nav.features': 'Features',
    'nav.how-it-works': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',
    'hero.badge': '100% Offline — No Cloud',
    'hero.title': 'Write faster.<br>No typing. <span class="accent-text">Instantly.</span>',
    'hero.subtitle': 'iVoz turns your voice into text in any Mac app. Save hours every week. 100% offline, 100% private.',
    'hero.cta-primary': 'Start Free Trial',
    'hero.cta-secondary': 'See How It Works',
    'hero.requirements': '3-day free trial, unlimited · Requires Mac with Apple Silicon (M1 or later), macOS 14+',
    'hero.stat1': 'API Calls',
    'hero.stat2': 'Servers',
    'hero.stat3': 'Private',
    'video.badge': 'Real demo',
    'video.title': 'Watch it work.',
    'video.subtitle': 'No cuts, no tricks. This is how fast it is.',
    'video.unsupported': 'Your browser does not support video. Download iVoz and try it free.',
    'features.badge': 'Features',
    'features.title': 'Save hours every week.',
    'features.subtitle': 'The essentials. Nothing more.',
    'features.feature1': 'Dictate in any app',
    'features.feature1-desc': 'WhatsApp, Slack, Notion, Google Docs, email — wherever you type, iVoz pastes the text instantly. No integrations, no setup.',
    'features.feature2': '100% offline and private',
    'features.feature2-desc': 'Your voice never leaves your Mac. All processing happens locally on Apple\'s Neural Engine. No cloud, no accounts, no tracking.',
    'features.feature3': 'Smart AI cleanup',
    'features.feature3-desc': 'AI removes the "uh"s and "um"s and fixes grammar automatically. Your dictation sounds professional with zero editing. Save hours of review.',
    'carousel.label': 'Works in your favorite apps',
    'who.badge': 'Who it\'s for',
    'who.title': 'Built for people who type all day.',
    'who.card1': 'Students',
    'who.card1-desc': 'Dictate your thesis, notes, and essays in a fraction of the time. Capture lectures without missing a thing.',
    'who.card2': 'Content creators',
    'who.card2-desc': 'Video scripts, newsletters, and posts — dictated while you walk. Your voice is your fastest keyboard.',
    'who.card3': 'Developers & vibe coders',
    'who.card3-desc': 'Prompts, docs, and comments dictated straight into Cursor, VS Code, or ChatGPT. Even without WiFi.',
    'who.card4': 'Office workers',
    'who.card4-desc': 'Clear your inbox by dictating replies instead of typing them. The day\'s 50 emails, done in an hour.',
    'who.devnote': '"I built iVoz because I was paying $15/month for dictation that sent my voice to a server. This is what I use every single day — which is why it\'s a one-time payment, not a subscription."',
    'who.devnote-author': '— Brandan, developer of iVoz · Córdoba, Argentina',
    'howitworks.badge': 'How It Works',
    'howitworks.title': 'Three steps. Zero complications.',
    'howitworks.step1': 'Press',
    'howitworks.step1-desc': 'Hold your hotkey (default: Ctrl). A red dot and waveform bars appear at the bottom of your screen.',
    'howitworks.step2': 'Speak',
    'howitworks.step2-desc': 'Talk at your normal pace. The Neural Engine processes your voice in real time. Say "new line" or "new paragraph" to format.',
    'howitworks.step3': 'Done',
    'howitworks.step3-desc': 'Release the key. Text appears instantly in any field — ChatGPT, Slack, a code editor, anywhere. A gold check confirms it\'s ready.',
    'howitworks.point1': '<strong>Works offline</strong> — your voice never leaves your Mac',
    'howitworks.point2': '<strong>No cloud.</strong> No data on strangers\' servers.',
    'howitworks.point3': '<strong>Real privacy.</strong> Real speed.',
    'pricing.badge': 'Pricing',
    'pricing.title': 'One purchase. Forever.',
    'pricing.subtitle': 'No monthly subscriptions. No commitments.',
    'pricing.free': 'Free Trial',
    'pricing.free-trial': '3 days · <strong>Everything unlimited</strong>',
    'pricing.free-f1': '<span class="check">✓</span> Unlimited words for 3 days',
    'pricing.free-f2': '<span class="check">✓</span> All Pro features included',
    'pricing.free-f3': '<span class="check">✓</span> Works 100% offline',
    'pricing.free-f4': '<span class="check">✓</span> No credit card required',
    'pricing.free-f5': '<span class="check">✓</span> No cloud, no subscription',
    'pricing.free-cta': 'Download Free',
    'pricing.launch-offer': 'Launch Offer',
    'pricing.pro': 'PRO',
    'pricing.pro-price': '$9.99<span class="price-note"> one-time</span>',
    'pricing.savings': 'Save $15',
    'pricing.pro-lifetime': 'Unlimited. Forever.',
    'pricing.pro-f1': '<span class="check">✓</span> <strong>Unlimited words</strong>',
    'pricing.pro-f2': '<span class="check">✓</span> AI cleanup',
    'pricing.pro-f3': '<span class="check">✓</span> All tones (4)',
    'pricing.pro-f4': '<span class="check">✓</span> Unlimited vocabulary',
    'pricing.pro-f5': '<span class="check">✓</span> Full history',
    'pricing.pro-f6': '<span class="check">✓</span> 100% offline, no cloud',
    'pricing.pro-cta': 'Unlock Pro — $9.99',
    'pricing.pro-footer': 'One payment. Yours forever.',
    'pricing.guarantee': '🛡️ 30-day guarantee — if you don\'t love it, I\'ll refund you.',
    'compare.title': 'Compared to similar software',
    'compare.ivoz-period': 'one-time',
    'compare.wispr-period': 'per year ($15/mo)',
    'table.badge': 'Comparison',
    'table.title': 'Choose what you need.',
    'table.col-feature': 'Feature',
    'table.col-trial': 'Trial (3 days)',
    'table.row1': 'Words',
    'table.row1-trial': 'Unlimited (3 days)',
    'table.row1-pro': 'Unlimited',
    'table.row2': 'AI cleanup',
    'table.row3': 'All tones',
    'table.row4': 'History',
    'table.row5': 'After the trial',
    'table.row5-trial': 'Locks until you pay',
    'table.row5-pro': 'Yours forever',
    'cta.title': 'Ready to work faster?',
    'cta.subtitle': 'Start your free trial today. No credit card. No obligations.',
    'cta.button': 'Start Free Trial — 3 unlimited days',
    'cta.subtext': 'No credit card. $9.99 once if you love it. 30-day guarantee.',
    'contact.badge': 'Contact',
    'contact.title': 'Questions?',
    'contact.subtitle': 'We\'re here to help.',
    'contact.label': 'Phone / WhatsApp',
    'faq.badge': 'Frequently Asked Questions',
    'faq.title': 'Questions? We\'ve got answers.',
    'faq.q1': 'How does the free trial work?',
    'faq.a1': 'Download iVoz and use the full app — unlimited words, AI cleanup, all tones — free for 3 days. No credit card. When the trial ends, unlock Pro for $9.99, once. No subscriptions, no monthly payments, ever.',
    'faq.q2': 'What Mac do I need?',
    'faq.a2': 'Any Mac with Apple Silicon (M1, M2, M3, or M4) running macOS 14 (Sonoma) or later. The app is optimized for the Neural Engine and GPU, so it runs fast and efficiently on every Apple Silicon chip.',
    'faq.q3': 'Does it work in my language?',
    'faq.a3': 'iVoz transcribes in 10 languages: Spanish, English, Portuguese, French, German, Italian, Japanese, Korean, Chinese, plus automatic detection. The app interface is available in Spanish, English, and Portuguese. AI cleanup works best in Spanish and English.',
    'faq.q4': 'How much space does it use?',
    'faq.a4': 'The app is ~34 MB. Models download once on first launch: the voice model is ~145 MB and the optional AI cleanup model is ~1 GB. Total: about 1.2 GB. Everything stays local and never updates unless you choose to.',
    'faq.q5': 'Is my data really private?',
    'faq.a5': 'Absolutely. Your audio is processed entirely on your Mac using the Neural Engine and GPU. Nothing is sent to any server. Your transcription history is stored locally in ~/Library/Application Support/iVoz/. We collect no telemetry, require no account, and track nothing.',
    'footer.tagline': 'Voice dictation for macOS.<br>Built with love, coffee, and the Neural Engine.',
    'footer.copyright': '© 2026 iVoz. All rights reserved.',
    'checkout.title': 'Complete your purchase',
    'checkout.step1': 'Contact information',
    'checkout.name': 'Name (optional)',
    'checkout.email': 'Email *',
    'checkout.next': 'Continue',
    'checkout.step2': 'Choose your payment method',
    'checkout.paypal': 'PayPal',
    'checkout.mercadopago': 'Mercado Pago',
    'demo.listening': 'Listening...',
    'demo.transcribing': 'Transcribing...',
    'demo.done': 'Done',
    'demo.pasted': 'Pasted into your app',
    'demo.live': 'Live demo',
    'demo.accuracy': '98% Accuracy',
    'demo.line1': 'Hey team, regarding the',
    'demo.line2': 'Q3 roadmap, I think we',
    'demo.line3': 'should prioritize...',
    'checkout.subtitle': 'iVoz Pro — Lifetime unlimited access',
    'checkout.cancel': 'Cancel',
    'checkout.back': 'Back',
    'checkout.secure': 'Your information is safe and encrypted.',
    'checkout.paypal-desc': 'Fast and secure',
    'checkout.mp-desc': 'Cards and wallets',
    'checkout.mp-redirect': 'Redirecting to Mercado Pago...',
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
    'success.back': 'Back to Home',
    'download.title': 'Setup Instructions',
    'download.subtitle': 'One command to get started',
    'download.paste_instruction': 'Open Terminal and paste this:',
    'download.explanation': 'This downloads, extracts, removes the security warning, and launches the app. No corporate signing fees — 100% of your payment goes to development.',
    'download.download_button': 'Download (10 MB)',
    'download.copy_button': 'Copy',
  }
};

// Auto-detect browser language: Spanish speakers get ES, everyone else gets EN
const browserLang = (navigator.language || 'en').toLowerCase();
const defaultLang = browserLang.startsWith('es') ? 'es' : 'en';
let currentLang = localStorage.getItem('iVozLang') || defaultLang;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('iVozLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
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
    const textToType = currentLang === 'es' ? "Sí, entonces apuntamos a tener el informe listo para el viernes por la mañana..." : "Yes, so we're aiming to have the report ready by Friday morning...";
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
document.querySelectorAll('.feature-card, .step, .pricing-card, .faq-item, .comparison-row, .contact-card, .who-card, .dev-note, .demo-video-wrapper').forEach(el => {
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
                email: email,
                product: 'ivoz'
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

// ===== DOWNLOAD MODAL =====
function openDownloadModal() {
    document.getElementById('download-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    document.getElementById('download-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
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
                email: email,
                product: 'ivoz'
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

// ===== COPY TO CLIPBOARD =====
function copyDownloadCommand() {
    const cmd = document.getElementById('download-cmd').textContent;
    const btn = document.getElementById('copy-cmd-btn');

    navigator.clipboard.writeText(cmd).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied';
        btn.style.borderColor = '#34c759';
        btn.style.color = '#34c759';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '#d2d2d7';
            btn.style.color = '#0071e3';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        btn.textContent = 'Failed';
        setTimeout(() => {
            btn.textContent = 'Copy';
        }, 1500);
    });
}

// ===== DOWNLOAD LINK INTERCEPTOR =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href*="iVoz.zip"]').forEach(link => {
        // Don't intercept the download button inside the modal
        if (link.closest('#download-modal')) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            openDownloadModal();
        });
    });
});
