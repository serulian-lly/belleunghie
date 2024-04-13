document.addEventListener("DOMContentLoaded", function () {
    const formSugestao = document.getElementById("sugestaoForm");
    const mensagemContainer = document.createElement('div');
    mensagemContainer.id = "mensagem-container";
    formSugestao.appendChild(mensagemContainer);

    formSugestao.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Obter valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const bairro = document.getElementById("bairro").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        // Validação dos campos
        if (nome === '' || bairro === '' || email === '' || telefone === '') {
            showMessage("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Simulação de envio (você pode substituir isso por uma solicitação AJAX ou algo similar)
        // Aqui, após a validação, você pode enviar os dados do formulário para o servidor
        // e exibir uma mensagem de sucesso
        showMessage("Formulário enviado com sucesso!", "success");

        // Limpar campos após o envio bem-sucedido (opcional)
        formSugestao.reset();
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
