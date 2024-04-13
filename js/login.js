document.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("cadastroForm");
  const loginContainer = document.querySelector(".login-container");
  const loaderContainer = document.querySelector(".loader-container");
  const loginBtn = document.getElementById("loginBtn");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const emailError = document.getElementById("email-error");
  const senhaError = document.getElementById("senha-error");

  loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Limpa mensagens de erro
    emailError.textContent = "";
    senhaError.textContent = "";

    // Validação dos campos de entrada
    if (email === '' || senha === '') {
      if (email === '') {
        emailError.textContent = "Por favor, preencha o campo E-mail.";
      }
      if (senha === '') {
        senhaError.textContent = "Por favor, preencha o campo Senha.";
      }
      return;
    } 
    if (senha.length < 6) {
      senhaError.textContent = "A senha deve ter no mínimo 6 caracteres.";
      return;
    } else {
  
        window.location.href = '/index.html';
  
    }})});
