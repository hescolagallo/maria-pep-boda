// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initCalendariScroll();
    initI18n();
    initMobileMenu();
    initSmoothScrolling();
    initFormHandling();
    initAnimations();
    initCopyToClipboard();
    initScrollEffects();
});

const translations = {
    ca: {
        pageTitle: "Maria i Pep - 18 d'octubre de 2026",
        calendariAlt: "Calendari — 18 d'octubre de 2026",
        'nav.wedding': 'El casament',
        'nav.ourDay': 'El nostre dia',
        'nav.schedule': 'Horaris',
        'nav.rsvp': 'Assistència',
        'nav.gift': 'Regal',
        'nav.photos': 'Fotos',
        'ceremony.title': 'Cerimònia',
        'celebration.title': 'Celebració',
        directions: 'Com arribar-hi',
        'ceremony.locationLine1': 'Santuari de la Mare de Déu',
        'ceremony.locationLine2': 'de la Misericòrdia',
        'celebration.locationLine1': 'Turó',
        'celebration.locationLine2': 'del Sol',
        'schedule.title': 'Horaris',
        'schedule.closing': 'Tancament',
        'schedule.closingApprox': 'aproximadament',
        'rsvp.title': 'Confirma la teva assistència',
        'rsvp.name': 'Nom*',
        'rsvp.surname': 'Cognoms*',
        'rsvp.attendLabel': "Vindràs el 18 d'octubre?*",
        'rsvp.attendYes': 'Sí, hi assistiré',
        'rsvp.attendNo': 'No, no hi podré assistir',
        'rsvp.typeLabel': 'A què vindré?*',
        'rsvp.typeCeremony': 'Vindré només a la cerimònia',
        'rsvp.typeBoth': 'Vindré a la cerimònia i a la celebració',
        'rsvp.dishLabel': 'Elecció de plat*',
        'rsvp.dishMeat': 'Entrecot de Girona',
        'rsvp.dishFish': 'Suprema de Dorada',
        'rsvp.dishVeg': 'Vegetarià / Vegà',
        'rsvp.allergies': 'Intoleràncies i al·lèrgies alimentàries',
        'rsvp.song': 'Cançó que no pot faltar',
        'rsvp.submit': 'Enviar',
        'rsvp.submitting': 'Enviant...',
        'rsvp.deadline': "*Us demanem que confirmeu abans del 10 de setembre de 2026",
        'rsvp.required': 'Si us plau, completa tots els camps obligatoris.',
        'rsvp.success': "Gràcies per confirmar la teva assistència! T'esperem el 18 d'octubre.",
        'rsvp.error': 'Hi ha hagut un error en enviar el formulari. Si us plau, torna-ho a provar.',
        'gift.text': "El millor regal per a nosaltres és poder compartir aquest dia tan especial amb tots vosaltres. Tanmateix, si us fa il·lusió col·laborar amb les despeses de la celebració o ajudar-nos a posar la primera pedra al nostre nou projecte de vida, us deixem aquí el nostre número de compte. Recordeu que és totalment opcional: la vostra presència és el que realment compta per a nosaltres!",
        'gift.copy': 'Copia',
        'gift.copied': 'Copiat!',
        'photos.title': 'Comparteix les teves fotos',
        'photos.text': "Durant el casament, fes fotos amb el mòbil i puja-les a la nostra carpeta compartida. Així podrem guardar tots els records d'aquest dia junts!",
        'photos.button': 'Pujar fotos',
        'footer.date': "18 d'octubre de 2026",
        'footer.credit': '© 2026 Creat per M&P',
        'lang.aria': 'Canviar a portuguès'
    },
    pt: {
        pageTitle: 'Maria e Pep - 18 de outubro de 2026',
        calendariAlt: 'Calendário — 18 de outubro de 2026',
        'nav.wedding': 'O casamento',
        'nav.ourDay': 'O nosso dia',
        'nav.schedule': 'Horários',
        'nav.rsvp': 'Presença',
        'nav.gift': 'Presente',
        'nav.photos': 'Fotos',
        'ceremony.title': 'Cerimônia',
        'celebration.title': 'Celebração',
        directions: 'Como chegar',
        'ceremony.locationLine1': 'Santuari de la Mare de Déu',
        'ceremony.locationLine2': 'de la Misericòrdia',
        'celebration.locationLine1': 'Turó',
        'celebration.locationLine2': 'del Sol',
        'schedule.title': 'Horários',
        'schedule.closing': 'Encerramento',
        'schedule.closingApprox': 'aproximadamente',
        'rsvp.title': 'Confirme a sua presença',
        'rsvp.name': 'Nome*',
        'rsvp.surname': 'Sobrenome*',
        'rsvp.attendLabel': 'Você virá no dia 18 de outubro?*',
        'rsvp.attendYes': 'Sim, estarei presente',
        'rsvp.attendNo': 'Não, não poderei comparecer',
        'rsvp.typeLabel': 'A que você virá?*',
        'rsvp.typeCeremony': 'Virei apenas à cerimônia',
        'rsvp.typeBoth': 'Virei à cerimônia e à celebração',
        'rsvp.dishLabel': 'Escolha do prato*',
        'rsvp.dishMeat': 'Entrecôte de Girona',
        'rsvp.dishFish': 'Suprema de Dourada',
        'rsvp.dishVeg': 'Vegetariano / Vegano',
        'rsvp.allergies': 'Intolerâncias e alergias alimentares',
        'rsvp.song': 'Música que não pode faltar',
        'rsvp.submit': 'Enviar',
        'rsvp.submitting': 'Enviando...',
        'rsvp.deadline': '*Pedimos que confirmem até 10 de setembro de 2026',
        'rsvp.required': 'Por favor, preencha todos os campos obrigatórios.',
        'rsvp.success': 'Obrigado por confirmar a sua presença! Esperamos você no dia 18 de outubro.',
        'rsvp.error': 'Houve um erro ao enviar o formulário. Por favor, tente novamente.',
        'gift.text': 'O melhor presente para nós é poder compartilhar este dia tão especial com todos vocês. Ainda assim, se quiserem contribuir com as despesas da celebração ou nos ajudar a colocar a primeira pedra no nosso novo projeto de vida, deixamos aqui o nosso número de conta. Lembrem-se de que é totalmente opcional: a sua presença é o que realmente importa para nós!',
        'gift.copy': 'Copiar',
        'gift.copied': 'Copiado!',
        'photos.title': 'Compartilhe suas fotos',
        'photos.text': 'Durante o casamento, tire fotos com o celular e envie-as para a nossa pasta compartilhada. Assim guardaremos juntos todas as memórias deste dia!',
        'photos.button': 'Enviar fotos',
        'footer.date': '18 de outubro de 2026',
        'footer.credit': '© 2026 Criado por M&P',
        'lang.aria': 'Mudar para catalão'
    }
};

const flagSvgs = {
    catalonia: `<svg viewBox="0 0 24 16" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="24" height="16" fill="#FCDD09"/><rect y="2" width="24" height="2" fill="#DA121A"/><rect y="6" width="24" height="2" fill="#DA121A"/><rect y="10" width="24" height="2" fill="#DA121A"/><rect y="14" width="24" height="2" fill="#DA121A"/></svg>`,
    brazil: `<svg viewBox="0 0 24 16" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="24" height="16" fill="#009739"/><polygon points="12,1.5 22.5,8 12,14.5 1.5,8" fill="#FFDF00"/><circle cx="12" cy="8" r="3.2" fill="#002776"/></svg>`
};

let currentLang = 'ca';
let updateCalendariPosition = null;
let calendariFocusEnd = 0.65;
const calendariFocusCache = {};

const localeImages = {
    ca: {
        heroDesktop: 'Portada.jpg',
        heroMobile: 'Portada_Telef.jpg',
        calendari: 'Calendari.jpg',
        calendariMobile: 'Calendari_Telef.jpg'
    },
    pt: {
        heroDesktop: 'Portada_PT.jpg',
        heroMobile: 'Portada_Telef_PT.jpg',
        calendari: 'Calendari_PT.jpg',
        calendariMobile: 'Calendari_Telef_PT.jpg'
    }
};

function isMobileViewport() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function updateLocaleImages() {
    const imgs = localeImages[currentLang];
    const mobile = isMobileViewport();
    const heroImg = document.getElementById('heroImg');
    const calendariImg = document.querySelector('.calendari-img');

    if (heroImg) {
        heroImg.src = mobile ? imgs.heroMobile : imgs.heroDesktop;
    }

    if (calendariImg) {
        const target = mobile ? imgs.calendariMobile : imgs.calendari;
        const current = calendariImg.getAttribute('src') || '';
        if (!current.endsWith(target)) {
            calendariImg.src = target;
            calendariImg.onload = () => {
                refreshCalendariFocus(calendariImg);
            };
        } else {
            refreshCalendariFocus(calendariImg);
        }
    }
}

function detectCalendariFocusSync(img) {
    const cacheKey = img.currentSrc || img.src;
    if (calendariFocusCache[cacheKey]) {
        return calendariFocusCache[cacheKey];
    }

    const src = cacheKey.split('/').pop() || cacheKey;
    const isMobileCal = src.includes('Telef');
    // 18 = columna 7 de 10 (escriptori) o columna central de 3 (mòbil)
    const focusX = isMobileCal ? 0.5 : 0.65;

    calendariFocusCache[cacheKey] = focusX;
    return focusX;
}

function refreshCalendariFocus(img) {
    if (!img) return;

    const applyFocus = () => {
        calendariFocusEnd = detectCalendariFocusSync(img);
        if (updateCalendariPosition) updateCalendariPosition();
    };

    if (img.complete && img.naturalWidth) {
        applyFocus();
    } else {
        img.addEventListener('load', applyFocus, { once: true });
    }
}

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
        (translations.ca && translations.ca[key]) ||
        key;
}

function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'ca';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (el.tagName === 'TITLE') {
            document.title = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langToggleLabel');
    const langFlag = document.getElementById('langToggleFlag');
    if (langLabel) langLabel.textContent = t('lang.aria');
    if (langToggle) langToggle.setAttribute('aria-label', t('lang.aria'));
    if (langFlag) {
        langFlag.innerHTML = currentLang === 'ca' ? flagSvgs.brazil : flagSvgs.catalonia;
    }

    updateLocaleImages();

    try {
        localStorage.setItem('weddingLang', lang);
    } catch (e) {
        // ignore
    }
}

function initLocaleImages() {
    updateLocaleImages();
    window.addEventListener('resize', debounce(updateLocaleImages, 150));
}

function initI18n() {
    let saved = 'ca';
    try {
        saved = localStorage.getItem('weddingLang') || 'ca';
    } catch (e) {
        saved = 'ca';
    }

    if (saved !== 'ca' && saved !== 'pt') saved = 'ca';
    applyTranslations(saved);
    initLocaleImages();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            applyTranslations(currentLang === 'ca' ? 'pt' : 'ca');
        });
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const langToggle = document.getElementById('langToggle');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const clickedLang = langToggle && langToggle.contains(event.target);
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target) && !clickedLang) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Handling - Envío a Google Forms
function initFormHandling() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        const tipusGroup = document.getElementById('tipusAssistenciaGroup');
        const platoGroup = document.getElementById('platoGroup');
        const tipusInputs = rsvpForm.querySelectorAll('input[name="tipusAssistencia"]');
        const platoInputs = rsvpForm.querySelectorAll('input[name="plato"]');
        const asistenciaInputs = rsvpForm.querySelectorAll('input[name="asistencia"]');

        const syncConditionalFields = () => {
            const selected = rsvpForm.querySelector('input[name="asistencia"]:checked');
            const attending = selected && selected.value === 'Sí, hi assistiré';
            const tipusSelected = rsvpForm.querySelector('input[name="tipusAssistencia"]:checked');
            const goesToCelebration = !tipusSelected ||
                tipusSelected.value === 'Vindré a la cerimònia i a la celebració';

            if (tipusGroup) {
                tipusGroup.style.display = attending || !selected ? 'block' : 'none';
            }
            tipusInputs.forEach(input => {
                input.required = attending || !selected;
                if (!attending && selected) input.checked = false;
            });

            // El plat es mostra sempre que no hagin dit que només vénen a la cerimònia
            const showPlato = (attending || !selected) && goesToCelebration;
            if (platoGroup) {
                platoGroup.style.display = showPlato ? 'block' : 'none';
            }
            platoInputs.forEach(input => {
                input.required = showPlato && attending;
                if (!showPlato) input.checked = false;
            });
        };

        asistenciaInputs.forEach(input => {
            input.addEventListener('change', syncConditionalFields);
        });
        tipusInputs.forEach(input => {
            input.addEventListener('change', syncConditionalFields);
        });
        syncConditionalFields();

        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Estat de càrrega
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = t('rsvp.submit');
            submitBtn.textContent = t('rsvp.submitting');
            submitBtn.classList.add('loading');
            
            // Recollir dades del formulari
            if (!validateForm()) {
                showMessage(t('rsvp.required'), 'error');
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('loading');
                return;
            }

            const formData = new FormData(rsvpForm);
            const data = {
                nombre: formData.get('nombre'),
                apellidos: formData.get('apellidos'),
                asistencia: formData.get('asistencia'),
                tipusAssistencia: formData.get('tipusAssistencia') || '',
                plato: formData.get('plato') || '',
                intolerancias: formData.get('intolerancias') || '',
                cancion: formData.get('cancion') || ''
            };
            
            // Enviar al formulari de Google (pendent d'associar el nou Google Form)
            submitToGoogleForm(data)
                .then(() => {
                    showMessage(t('rsvp.success'), 'success');
                    rsvpForm.reset();
                    syncConditionalFields();
                })
                .catch((error) => {
                    console.error('Error en enviar el formulari:', error);
                    showMessage(t('rsvp.error'), 'error');
                })
                .finally(() => {
                    submitBtn.textContent = t('rsvp.submit');
                    submitBtn.classList.remove('loading');
                });
        });
    }
}

// Submit to Google Form
async function submitToGoogleForm(data) {
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfG6y5ihsBjgYZnKyYngAgU8k63R1AN4nJmIGT0rLSRT82KPQ/formResponse';

    const fields = [
        { name: 'entry.1323571690', value: data.nombre || '' },
        { name: 'entry.1066147080', value: data.apellidos || '' },
        { name: 'entry.86885448', value: data.asistencia || '' },
        { name: 'entry.638683468', value: data.tipusAssistencia || '' },
        { name: 'entry.1568783192', value: data.plato || '' },
        { name: 'entry.1844740743', value: data.intolerancias || '' },
        { name: 'entry.1410520106', value: data.cancion || '' }
    ];

    const formData = new URLSearchParams();
    fields.forEach(field => formData.append(field.name, field.value));

    await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    });
}

// Show Message Function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert after form
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.parentNode.insertBefore(messageDiv, rsvpForm.nextSibling);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Copy to Clipboard Function
function initCopyToClipboard() {
    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showCopySuccess();
            }).catch(err => {
                console.error('Error en copiar el text: ', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            fallbackCopyToClipboard(text);
        }
    };
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('La còpia alternativa ha fallat: ', err);
    }
    
    document.body.removeChild(textArea);
}

// Show copy success feedback
function showCopySuccess() {
    const copyBtn = document.querySelector('.copy-btn');
    if (!copyBtn) return;

    const copyLabel = copyBtn.querySelector('[data-i18n="gift.copy"]');
    copyBtn.classList.add('copied');
    if (copyLabel) copyLabel.textContent = t('gift.copied');

    setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (copyLabel) copyLabel.textContent = t('gift.copy');
    }, 2000);
}

// Animations on Scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.ceremony, .celebration, .schedule-item, .recommendation-category');
    animateElements.forEach(el => observer.observe(el));
}

// Scroll Effects
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const headerLogo = document.getElementById('headerLogo');
    const logoBlanco = 'Logo_Blanco.png';
    const logoColor = 'Logo_Color.png';
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Efecte de vidre al fer scroll + logo segons el fons
        if (scrollTop > 50) {
            header.classList.add('scrolled');
            if (headerLogo) headerLogo.src = logoColor;
        } else {
            header.classList.remove('scrolled');
            if (headerLogo) headerLogo.src = logoBlanco;
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Calendari: pan al fer scroll; al final el dia 18 queda centrat a la pantalla
function initCalendariScroll() {
    const wrapper = document.querySelector('.calendari-wrapper');
    const img = document.querySelector('.calendari-img');

    if (!wrapper || !img) return;

    const TRAVEL_RATIO = (0.6665 - 0.585) * 1.15;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const smoothstep = (t) => t * t * (3 - 2 * t);

    const getProgress = () => {
        const rect = wrapper.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportMid = viewportHeight / 2;
        const elementMid = rect.top + rect.height / 2;
        const scrollRange = viewportHeight * 1.1;
        const raw = clamp(1 - (elementMid - viewportMid) / scrollRange, 0, 1);
        return smoothstep(raw);
    };

    const updatePosition = () => {
        const viewW = wrapper.clientWidth;
        const imgW = img.offsetWidth;
        if (!viewW || !imgW) return;

        const progress = getProgress();
        const focusEnd = calendariFocusEnd;
        const focusStart = Math.max(0.04, focusEnd - TRAVEL_RATIO);
        const xEnd = viewW / 2 - focusEnd * imgW;
        const xStart = viewW / 2 - focusStart * imgW;
        const x = xStart + (xEnd - xStart) * progress;

        img.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    updateCalendariPosition = updatePosition;
    refreshCalendariFocus(img);

    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', () => {
        refreshCalendariFocus(img);
        updatePosition();
    });
}

// Countdown Timer (Optional)
function initCountdown() {
    const weddingDate = new Date('October 18, 2026 12:30:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // You can add a countdown display element to your HTML if desired
        // const countdownElement = document.getElementById('countdown');
        // if (countdownElement) {
        //     countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        // }
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            // Wedding day has arrived!
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize countdown if you want to add it
// initCountdown();

// Form Validation Enhancement
function validateForm() {
    const form = document.getElementById('rsvpForm');
    if (!form) return false;

    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    const checkedGroups = new Set();

    requiredFields.forEach(input => {
        if (input.type === 'radio') {
            if (checkedGroups.has(input.name)) return;
            checkedGroups.add(input.name);
            const groupChecked = form.querySelector(`input[name="${input.name}"]:checked`);
            const options = form.querySelectorAll(`input[name="${input.name}"]`);
            options.forEach(opt => {
                const option = opt.closest('.radio-option');
                if (option) {
                    option.style.borderColor = groupChecked ? 'transparent' : '#dc3545';
                }
            });
            if (!groupChecked) isValid = false;
            return;
        }

        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Lazy Loading for Images (if you add more images later)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
// initLazyLoading();

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll handling logic here
}, 16); // ~60fps

// Add scroll event listener with optimization
window.addEventListener('scroll', optimizedScrollHandler);

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Export functions for potential external use
window.WeddingWebsite = {
    showMessage,
    copyToClipboard,
    validateForm,
    scrollToTop
};
