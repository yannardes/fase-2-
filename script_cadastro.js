document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");
  const message = document.getElementById("message");
  const cpfInput = document.getElementById("cpf");

  // Máscara e validação para CPF
  cpfInput.addEventListener("input", function () {
    let value = cpfInput.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 11) value = value.slice(0, 11);

    // Formatação do CPF (000.000.000-00)
    if (value.length > 9) {
      cpfInput.value = value.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    } else if (value.length > 6) {
      cpfInput.value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (value.length > 3) {
      cpfInput.value = value.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else {
      cpfInput.value = value;
    }
  });

  // Validação do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmSenha = document.getElementById("confirmSenha").value;

    // Validação do CPF
    if (cpfInput.value.length !== 14) {
      message.textContent = "CPF inválido! Verifique o formato.";
      message.style.color = "red";
      return;
    }

    // Verifica se os emails coincidem
    if (email !== confirmEmail) {
      message.textContent = "Os emails não coincidem!";
      message.style.color = "red";
      return;
    }

    // Verifica se as senhas coincidem e são seguras
    if (senha !== confirmSenha) {
      message.textContent = "As senhas não coincidem!";
      message.style.color = "red";
      return;
    }
    if (senha.length < 6) {
      message.textContent = "A senha deve ter pelo menos 6 caracteres!";
      message.style.color = "red";
      return;
    }

    // Exibe mensagem de sucesso
    message.textContent = "Cadastro realizado com sucesso! 🎉";
    message.style.color = "green";

    // Simulação de envio
    setTimeout(() => form.reset(), 2000);
  });
});
