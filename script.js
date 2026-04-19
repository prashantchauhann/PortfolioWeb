// Logo interaction with glow burst
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#home';
        createLogoBurst(e);
    });
    
    logo.addEventListener('mouseenter', () => {
        createLogoGlitter();
    });
}

// Contact buttons interaction
const contactBtns = document.querySelectorAll('.contact-btn');
contactBtns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        createContactBtnGlow(e.target.closest('.contact-btn'));
    });
    
    btn.addEventListener('click', (e) => {
        createContactBtnBurst(e.target.closest('.contact-btn'));
    });
});

function createContactBtnGlow(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 3 + 1.5;
        
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + x) + 'px';
        particle.style.top = (rect.top + y) + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 6) + 'px rgba(14, 165, 233, 1)';
        particle.style.animation = `glitter-particle 0.9s ease-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 100 - 120 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 900);
    }
}

function createContactBtnBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        const angle = (i / 20) * Math.PI * 2;
        const distance = 120;
        
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 6) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 12) + 'px rgba(14, 165, 233, 0.8)';
        particle.style.animation = `glitter-particle 1.1s ease-out forwards`;
        particle.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--y', Math.sin(angle) * distance - 100 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1100);
    }
}

// Skill badges interaction
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', (e) => {
        createSkillBadgeGlow(e.target);
    });
});

function createSkillBadgeGlow(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 3 + 1;
        
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + x) + 'px';
        particle.style.top = (rect.top + y) + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 6) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 12) + 'px rgba(14, 165, 233, 0.8)';
        particle.style.animation = `glitter-particle 0.9s ease-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 80 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 80 - 100 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 900);
    }
}

// Skill badges interaction
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinksContainer.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        createNavGlitter(e.target);
    });
    
    link.addEventListener('click', (e) => {
        createNavBurst(e.target);
        if (navLinksContainer && navToggle) {
            navLinksContainer.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

function createNavGlitter(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height - rect.height;
        const size = Math.random() * 3 + 1.5;
        
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + x) + 'px';
        particle.style.top = (rect.top + y) + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 4) + 'px rgba(14, 165, 233, 1)';
        particle.style.animation = `glitter-particle 0.8s ease-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 60 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 60 - 100 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}

function createNavBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 5) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 10) + 'px rgba(14, 165, 233, 0.8)';
        particle.style.animation = `glitter-particle 1s ease-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 150 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 150 - 80 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

function createLogoBurst(e) {
    const rect = e.target.closest('.logo').getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const angle = (i / 30) * Math.PI * 2;
        const distance = 150;
        
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 5) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 10) + 'px rgba(14, 165, 233, 0.8)';
        particle.style.animation = `glitter-particle 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        particle.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--y', Math.sin(angle) * distance - 150 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

function createLogoGlitter() {
    const logo = document.querySelector('.logo');
    const rect = logo.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 4 + 2;
        
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + x) + 'px';
        particle.style.top = (rect.top + y) + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 5) + 'px rgba(14, 165, 233, 1)';
        particle.style.animation = `glitter-particle 0.8s ease-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 100 - 80 + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}

// Intersection Observer to handle fade-in animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            createGlitterEffect(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Select all elements with the class 'hidden' and observe them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Enhanced glitter particle effect on hover
function createGlitterEffect(element) {
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
            const size = Math.random() * 5 + 3;
            
            particle.style.position = 'fixed';
            particle.style.left = (rect.left + x) + 'px';
            particle.style.top = (rect.top + y) + 'px';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(14, 165, 233, 1))';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.boxShadow = '0 0 ' + (size * 3) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 6) + 'px rgba(14, 165, 233, 0.8)';
            particle.style.animation = `glitter-particle ${0.8 + Math.random() * 0.6}s ease-out forwards`;
            particle.style.setProperty('--x', (Math.random() - 0.5) * 150 + 'px');
            particle.style.setProperty('--y', (Math.random() - 0.5) * 150 - 80 + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1500);
        }
    });
}

// Continuous long-duration twinkling glitter particles
function createBackgroundGlitter() {
    setInterval(() => {
        const particle = document.createElement('div');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 1.5;
        
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(14, 165, 233, 1))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 ' + (size * 4) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 8) + 'px rgba(14, 165, 233, 0.8), 0 0 ' + (size * 12) + 'px rgba(14, 165, 233, 0.5)';
        particle.style.zIndex = '0';
        particle.style.animation = `long-twinkle ${3 + Math.random() * 2}s ease-in-out forwards`;
        particle.style.setProperty('--x', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 100 - 150 + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 5000);
    }, 200);
}

// Create burst effect on button clicks
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn')) {
        const btn = e.target.closest('.btn');
        const rect = btn.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 6 + 4;
            
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(14, 165, 233, 1))';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.boxShadow = '0 0 ' + (size * 4) + 'px rgba(14, 165, 233, 1), 0 0 ' + (size * 8) + 'px rgba(14, 165, 233, 0.8)';
            particle.style.animation = `glitter-particle ${1 + Math.random() * 0.8}s ease-out forwards`;
            particle.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
            particle.style.setProperty('--y', (Math.random() - 0.5) * 200 - 100 + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }
    }
});

// Start background glow/twinkle effect on load
window.addEventListener('load', createBackgroundGlitter);
