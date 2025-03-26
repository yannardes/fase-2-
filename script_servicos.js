document.addEventListener("DOMContentLoaded", function () {
  // Capturando elementos
  const form = document.getElementById("deliveryForm");
  const message = document.getElementById("message");
  const pickupButton = document.getElementById("pickup");

  // Evento para quando o formulário for enviado
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático

    // Captura os valores dos campos
    const bairro = document.getElementById("bairro").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const referencia = document.getElementById("ptoreferencia").value.trim();

    // Validação: Verifica se os campos obrigatórios estão preenchidos
    if (bairro === "" || rua === "" || cep === "" || numero === "") {
      message.textContent = "Por favor, preencha todos os campos obrigatórios!";
      message.style.color = "red";
      return;
    }

    // Exibe mensagem de sucesso
    message.textContent = "Pedido realizado com sucesso! 🚀";
    message.style.color = "green";

    // Limpa o formulário
    form.reset();
  });

  // Evento para botão de Retirada no Local
  pickupButton.addEventListener("click", function () {
    message.textContent = "Você selecionou 'Retirada no Local'.";
    message.style.color = "blue";
  });
});
