// Seleciona elementos relevantes
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
  // Alterna a classe 'nav-open' no nav para exibir ou ocultar os links
  nav.classList.toggle('nav-open');
  // Altera o ícone do hambúrguer para um X quando o menu está aberto
  if (nav.classList.contains('nav-open')) {
    hamburger.textContent = '✖';  // ícone de X (fechar)
  } else {
    hamburger.textContent = '☰';  // ícone de três linhas (abrir)
  }
}

// Fechar o menu automaticamente ao selecionar um item (melhora UX em mobile)
document.querySelectorAll('nav .nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('nav-open')) {
      toggleMenu();
    }
  });
});
