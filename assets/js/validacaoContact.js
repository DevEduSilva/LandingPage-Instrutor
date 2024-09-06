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

// Função para transformar letras em maiúsculas
function tornarMaiusculas(campo) {
  document.getElementById(campo).addEventListener("input", function (letters) {
    letters.target.value = letters.target.value.toUpperCase();
  });
}

tornarMaiusculas("nome");
tornarMaiusculas("mensagem");

// Validando a formatação dos números de telefone
document.getElementById("telefone").addEventListener("input", function (e) {
  let telefone = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  if (telefone.length > 0) {
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona os parênteses e o espaço
  }
  if (telefone.length >= 10) {
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen
  }
  e.target.value = telefone; // Atualiza o valor do campo de entrada
});
