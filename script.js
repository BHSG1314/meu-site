// NOVO: Adiciona a lógica do menu mobile
const menuToggle = document.getElementById("menu-toggle");
const menuMobileList = document.getElementById("menu-mobile-list");
const menuLinks = menuMobileList.querySelectorAll('a');

function toggleMenu() {
    menuMobileList.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active');
    // Adiciona/remove 'no-scroll' no body para evitar scroll quando o menu está aberto
    document.body.classList.toggle('no-scroll'); 
}

// Evento para o botão hambúrguer
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Evento para fechar o menu ao clicar em um link (navegação)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se o menu está aberto (se as classes existem)
        if (menuMobileList.classList.contains('is-open')) {
            toggleMenu(); // Fecha o menu
        }
    });
});
// FIM NOVO


// --- FUNCIONALIDADE DE MAPA ---
const btnVerMapa = document.getElementById("btn-ver-mapa");
const mapaContainer = document.getElementById("mapa-container");
let mapaVisivel = false;

// URL ATUALIZADA: Nova Lima, MG (localização aproximada da Av. José Bernardo de Barros)
const mapaSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0336215160914!2d-43.856943825129186!3d-20.01529608151834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e9c0b11c97a5%3A0x600b3e512419f725!2sAv.%20Jos%C3%A9%20Bernardo%20de%20Barros%2C%20501%20-%20Cascalho%2C%20Nova%20Lima%20-%20MG%2C%2034000-000!5e0!3m2!1spt-BR!2sbr!4v1678890000000!5m2!1spt-BR!2sbr"; // Substitua por sua URL REAL de incorporação do Google Maps

btnVerMapa.addEventListener("click", function () {
    const iframeId = "mapa-iframe";
    let iframe = document.getElementById(iframeId);

    if (!mapaVisivel) {
        // Mostrar o mapa
        mapaContainer.style.display = "block";

        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.src = mapaSrc; 
            iframe.width = "100%";
            iframe.height = "100%"; 
            iframe.style.border = "0";
            iframe.allowFullscreen = true;
            iframe.loading = "lazy";
            iframe.referrerPolicy = "no-referrer-when-downgrade";
            iframe.id = iframeId;
            mapaContainer.appendChild(iframe);
        }

        btnVerMapa.textContent = "OCULTAR MAPA";
        mapaVisivel = true;
    } else {
        // Ocultar o mapa
        if (iframe) {
            mapaContainer.removeChild(iframe); 
        }
        mapaContainer.style.display = "none";
        btnVerMapa.textContent = "VER LOCALIZAÇÃO NO MAPA";
        mapaVisivel = false;
    }
});
// FIM FUNCIONALIDADE DE MAPA


// --- FUNCIONALIDADE DE MODALIDADES (NOVA) ---
const cardProgramas = document.querySelectorAll(".card-programa");
const detalheModalidades = document.querySelectorAll(".detalhe-modalidade");

function mostrarDetalheModalidade(modalidadeId) {
    // Oculta todos os detalhes
    detalheModalidades.forEach(detalhe => {
        detalhe.classList.remove('ativo');
    });

    // Remove o destaque de todos os cards
    cardProgramas.forEach(card => {
        card.classList.remove('ativo');
    });

    // Exibe o detalhe correspondente, se existir
    const detalheElement = document.getElementById(modalidadeId + '-detalhe');
    if (detalheElement) {
        detalheElement.classList.add('ativo');

        // Adiciona o destaque ao card clicado
        document.querySelector(`.card-programa[data-modalidade="${modalidadeId}"]`).classList.add('ativo');

        // Rola a tela para o container do detalhe
        const container = document.getElementById('detalhe-modalidade-container');
        if (container) {
             container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Adiciona o evento de clique a cada card
cardProgramas.forEach(card => {
    card.addEventListener('click', function() {
        const modalidade = this.getAttribute('data-modalidade');
        mostrarDetalheModalidade(modalidade);
    });
});

// A função de inicialização que causava o scroll foi removida.
// Os detalhes das modalidades agora só aparecerão após o clique.
// --- FIM FUNCIONALIDADE DE MODALIDADES ---


// --- FUNCIONALIDADE DE ENVIO DO FORMULÁRIO ---
const formMatricula = document.getElementById("form-matricula");

if (formMatricula) {
    formMatricula.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário (para esta simulação)

        // 1. Coleta os dados do formulário (apenas para exibição)
        const nome = document.getElementById("nome").value;
        const planoSelect = document.getElementById("plano-interesse");
        const plano = planoSelect.options[planoSelect.selectedIndex].text;

        // 2. Exibe uma mensagem de sucesso
        alert(`Obrigado, ${nome}! Seu interesse em '${plano}' foi registrado com sucesso. Entraremos em contato em breve para finalizar sua matrícula!`);

        // 3. Opcional: Limpa o formulário após o "envio"
        formMatricula.reset();
    });
}
