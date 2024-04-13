document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.formss form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const avaliacao = document.getElementById('mensagem').value.trim();
        const sugestao = document.querySelectorAll('textarea')[1].value.trim();

        if (!nome || !sobrenome || !email || !telefone || !avaliacao || !sugestao) {
            showMessage("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Simulação de envio bem-sucedido
        showMessage("Formulário enviado com sucesso!", "success");

        // Limpar campos após o envio bem-sucedido (opcional)
        form.reset();
    });

    function showMessage(message, type) {
        const mensagemContainer = document.createElement('div');
        mensagemContainer.textContent = message;
        mensagemContainer.classList.add('mensagem', type);

        form.appendChild(mensagemContainer);

        // Limpar a mensagem após 3 segundos (opcional)
        setTimeout(() => {
            mensagemContainer.remove();
        }, 3000);
    }
});
