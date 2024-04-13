document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensagemContainer = document.getElementById("mensagem-container");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Obter valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const bairro = document.getElementById("bairro").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const preco = document.getElementById("preco").value.trim();
        const tempoAtendimento = document.getElementById("inputGroupSelect02").value.trim();
        const especialidade = document.getElementById("especialidade").value.trim();
        const sobre = document.getElementById("sobre").value.trim();

        // Validação dos campos
        if (!nome || !bairro || !email || !telefone || !preco || tempoAtendimento === 'Tempo de Atendimento Médio' || !especialidade || !sobre) {
            showMessage("Por favor, preencha todos os campos corretamente.", "error");
        } else {
            showMessage("Formulário enviado com sucesso!", "success");
            contactForm.reset(); // Limpa o formulário após o envio bem-sucedido
        }
    });

    // Função para exibir mensagem na tela
    function showMessage(message, type) {
        const div = document.createElement("div");
        div.textContent = message;
        div.classList.add("mensagem", type);

        mensagemContainer.innerHTML = ''; // Limpa mensagens anteriores
        mensagemContainer.appendChild(div);

        // Limpa a mensagem após 3 segundos (opcional)
        setTimeout(() => {
            div.remove();
        }, 3000);
    }
});