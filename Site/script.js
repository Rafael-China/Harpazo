// Função para rolagem suave ao clicar nos links do menu
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Adiciona um evento de clique para os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});