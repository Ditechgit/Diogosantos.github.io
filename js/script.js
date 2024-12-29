function showSidebar(){
    const sidebar = document.querySelector(".vertical-menu")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".vertical-menu")
    sidebar.style.display = "none"
}

const scrollToTopButton = document.querySelector("#scrollToTop");

// Função para mostrar ou esconder o botão baseado na posição de rolagem
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Função para voltar ao topo
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
