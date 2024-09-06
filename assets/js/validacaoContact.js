// Função para verificar os campos
function verificarCampo(campo) {
  if (campo.checkValidity()) {
    campo.classList.remove("invalid");
    campo.classList.add("valid");
  } else {
    campo.classList.remove("valid");
    campo.classList.add("invalid");
  }
}

// Selecionar os campos do formulário
const campos = document.querySelectorAll(
  "#meuFormulario input, #meuFormulario textarea"
);

// Adicionar eventos de input e blur para todos os campos
campos.forEach((campo) => {
  campo.addEventListener("input", () => verificarCampo(campo));
  campo.addEventListener("blur", () => verificarCampo(campo)); // Aciona a validação ao perder o foco
});

// Verificar o formulário na submissão
document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    let valido = true;
    campos.forEach((campo) => {
      verificarCampo(campo);
      if (!campo.checkValidity()) {
        valido = false;
      }
    });

    if (!valido) {
      event.preventDefault(); // Impede o envio se o formulário não for válido
    }
  });
