const slider = document.getElementById("carousel");
let isDown = false;
let startX;
let scrollLeft;

// Função para começar o arrasto ou toque
function startDragging(e) {
  isDown = true;
  slider.classList.add("dragging");
  
  // Verifica se é um toque ou um clique
  startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing"; // Altera o cursor durante o arrasto (para desktops)
}

// Função para parar o arrasto ou toque
function stopDragging() {
  isDown = false;
  slider.classList.remove("dragging");
  slider.style.cursor = "grab"; // Restaura o cursor (para desktops)
}

// Função para mover o slider durante o arrasto ou toque
function moveSlider(e) {
  if (!isDown) return;
  
  e.preventDefault();
  
  // Verifica se é um toque ou um clique
  const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // Aumenta a sensibilidade do arrasto
  
  slider.scrollLeft = scrollLeft - walk;

  // Limitar o movimento para não deslocar além dos limites
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  if (slider.scrollLeft < 0) {
    slider.scrollLeft = 0; // Limita a rolagem para não ir além do início
  } else if (slider.scrollLeft > maxScrollLeft) {
    slider.scrollLeft = maxScrollLeft; // Limita para não ir além do final
  }
}

// Eventos de mouse
slider.addEventListener("mousedown", startDragging);
slider.addEventListener("mouseleave", stopDragging);
slider.addEventListener("mouseup", stopDragging);
slider.addEventListener("mousemove", moveSlider);

// Eventos de toque para dispositivos móveis
slider.addEventListener("touchstart", startDragging);
slider.addEventListener("touchend", stopDragging);
slider.addEventListener("touchmove", moveSlider);
