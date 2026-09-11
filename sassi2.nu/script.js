// script.js
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function openChat() {
    // Simulera chattöppning, t.ex. visa en modal eller redirect
    alert('Chatt öppnas snart! Kontakta oss via formuläret.');
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Tack, ${name}! Vi hör av oss snart via ${email}.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Vänligen fyll i alla fält.');
    }
}

// Ladda animationer vid scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card, .tip-card, .step-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});