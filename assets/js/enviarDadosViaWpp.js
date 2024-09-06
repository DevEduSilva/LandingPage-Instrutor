document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    // Formatação da mensagem para WhatsApp
    const whatsappMessage = `*ATENDIMENTO:*\n_Envie essa mensagem para completar o atendimento!_\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const phoneNumber = "+5561995705982"; // Número de telefone para enviar a mensagem

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Mensagens de feedback e controle do botão de envio
    const btnSend = document.querySelector('button[type="submit"]');
    let agradecimento = document.getElementById("thankYouMessage");

    // Se o elemento ainda não existir, criá-lo
    if (!agradecimento) {
      agradecimento = document.createElement("p");
      agradecimento.id = "thankYouMessage";
      agradecimento.textContent =
        "Obrigado! Só confirmar a mensagem pelo WhatsApp e eu respondo!";

      // Adicionando estilo diretamente no JavaScript
      agradecimento.style.display = "none"; // Inicialmente oculto
      agradecimento.style.color = "#fff";
      agradecimento.style.backgroundColor = "#28a745";
      agradecimento.style.padding = "10px";
      agradecimento.style.borderRadius = "5px";
      agradecimento.style.marginTop = "20px";
      agradecimento.style.textAlign = "center";

      // Adiciona o elemento ao formulário
      document.getElementById("meuFormulario").appendChild(agradecimento);
    }

    // Ocultar o botão de enviar e mostrar a mensagem de agradecimento
    btnSend.style.display = "none";
    agradecimento.style.display = "block";

    // Abrir o WhatsApp após 4 segundos
    setTimeout(function () {
      window.open(whatsappURL, "_blank");
    }, 4000);

    // Voltar a exibir o botão de envio após 5 segundos
    setTimeout(function () {
      btnSend.style.display = "block";
      agradecimento.style.display = "none";
    }, 5000);

    // Resetar o formulário após 15 segundos
    setTimeout(function () {
      document.getElementById("meuFormulario").reset();
    }, 15000);
  });
