document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let slide = 0;

    // Adiciona classes de inicialização
    items[0].classList.add('current-item');
    gallery.style.width = totalItems * 100 + '%';

    // Adiciona eventos de clique aos botões de controle
    arrowRight.addEventListener('click', function () {
        if (slide < totalItems - 1) {
            slide++;
            updateCarousel();
        }
    });

    arrowLeft.addEventListener('click', function () {
        if (slide > 0) {
            slide--;
            updateCarousel();
        }
    });

    // Atualiza a posição do carrossel e desabilita os botões
    function updateCarousel() {
        gallery.style.transform = 'translateX(' + -slide * 100 / totalItems + '%)';
        items.forEach(item => item.classList.remove('current-item'));
        items[slide].classList.add('current-item');

        // Desabilita o botão direito ao alcançar a última imagem
        arrowRight.disabled = slide === totalItems - 1;
        // Desabilita o botão esquerdo ao voltar para a primeira imagem
        arrowLeft.disabled = slide === 0;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensagemContainer = document.getElementById("mensagem-container");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Obter valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação dos campos
        if (nome === '' || email === '' || mensagem === '') {
            showMessage("Por favor, preencha todos os campos.", "error");
            return;
        }

        // Simulação de envio (você pode substituir isso por uma solicitação AJAX ou algo similar)
        // Aqui, após a validação, você pode enviar os dados do formulário para o servidor
        // e exibir uma mensagem de sucesso
        showMessage("Formulário enviado com sucesso!", "success");

        // Limpar campos após o envio bem-sucedido (opcional)
        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mensagem").value = '';
    });

    // Função para exibir mensagem na tela
    function showMessage(message, type) {
        const div = document.createElement("div");
        div.textContent = message;
        div.classList.add("message", type);

        mensagemContainer.innerHTML = ''; // Limpa mensagens anteriores
        mensagemContainer.appendChild(div);

        // Limpa a mensagem após 3 segundos (opcional)
        setTimeout(() => {
            div.remove();
        }, 3000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const calendarioContainer = document.getElementById("calendario");
    const modalAgendamento = document.getElementById("modalAgendamento");
    const fecharModal = document.querySelector(".fechar-modal");
    const formAgendamento = document.getElementById("formAgendamento");
    const diaSelecionadoSpan = document.getElementById("diaSelecionado");

    function criarCalendario() {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const mesAtual = dataAtual.getMonth();

        const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate(); // Obtém o número de dias no mês atual
        const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay(); // Obtém o dia da semana do primeiro dia do mês
        const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

        let calendarioHTML = '<div class="semana">';
        // Cria os cabeçalhos dos dias da semana
        diasSemana.forEach(dia => {
            calendarioHTML += `<div class="dia-semana">${dia}</div>`;
        });
        calendarioHTML += '</div>';

        let dia = 1;
        // Cria os espaços em branco até o primeiro dia do mês
        for (let i = 0; i < primeiroDiaSemana; i++) {
            calendarioHTML += '<div class="dia"></div>';
        }

        // Preenche o restante do calendário com os dias do mês
        while (dia <= diasNoMes) {
            calendarioHTML += `<div class="dia">${dia}</div>`;
            dia++;
        }

        calendarioContainer.innerHTML = calendarioHTML;
    }

    // Função para exibir o modal e atualizar o dia selecionado
    function mostrarModal(event) {
        const diaSelecionado = event.target.textContent.trim(); // Remove espaços em branco
        console.log('Dia selecionado:', diaSelecionado);

        // Atualiza o conteúdo do modal com o dia selecionado
        diaSelecionadoSpan.textContent = diaSelecionado;

        // Exibe o modal ao clicar no dia
        modalAgendamento.style.display = "block";
    }

    // Adiciona um evento de clique para os dias do calendário
    calendarioContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('dia')) {
            mostrarModal(event);
        }
    });

    // Fecha o modal ao clicar no botão de fechar
    fecharModal.addEventListener('click', function () {
        modalAgendamento.style.display = "none";
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modalAgendamento) {
            modalAgendamento.style.display = "none";
        }
    });

    // Evita o fechamento do modal se clicar dentro do formulário
    formAgendamento.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Envia o formulário de agendamento (você pode adicionar a lógica de envio aqui)
    formAgendamento.addEventListener('submit', function (event) {
        event.preventDefault();
        // Lógica de envio do formulário aqui
        alert("Formulário de agendamento enviado para o dia " + diaSelecionadoSpan.textContent);
        modalAgendamento.style.display = "none";
    });

    // Inicializa o calendário
    criarCalendario();
});
