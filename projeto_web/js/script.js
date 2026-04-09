document.addEventListener('DOMContentLoaded', function() {
    console.log('Elétrica Souza - Site Carregado');

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Validação simples do formulário
    const form = document.getElementById('formContato');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pelo contato! Em breve um especialista da Elétrica Souza entrará em contato.');
            form.reset();
        });
    }

    // Animação simples ao scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});