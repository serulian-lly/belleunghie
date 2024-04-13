document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sugestaoForm");
    const mensagemEnviada = document.getElementById("mensagemEnviada");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validar se os campos estão preenchidos
        const nome = document.getElementById("nome").value.trim();
        const bairro = document.getElementById("bairro").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
       

        if (!nome || !bairro || !email || !telefone) {
            alert("Por favor, preencha todos os campos.");
            return; // Impede o envio se algum campo estiver vazio
        }

        // Aqui você pode adicionar lógica para enviar a sugestão
        // Mostra a mensagem de sugestão enviada
        mensagemEnviada.style.display = "block";

        // Limpa os campos do formulário (opcional)
        form.reset();
    });
});
