// DEIXAR HEADER TRANSPARENTE OU COR FIXA
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("translucent");
  } else {
    header.classList.remove("translucent");
  }
});

//ABRIR MENU DROPDOWN
function toggleMenu() {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}
