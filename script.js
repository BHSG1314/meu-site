const btnVerMapa = document.getElementById("btn-ver-mapa");
const mapaContainer = document.getElementById("mapa-container");
let mapaVisivel = false;

// ⚠️ DADO FICTÍCIO: SUBSTITUA ESTA URL PELA URL DE INCORPORAÇÃO REAL DO GOOGLE MAPS DA SUA ACADEMIA!
const mapaSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.056637311758!2d-47.93664085!3d-15.7981881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3962d2946919%3A0xc07474431f4a4282!2sPra%C3%A7a%20dos%20Tr%C3%AAs%20Poderes!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"; 
// A URL acima aponta para um local conhecido (Praça dos Três Poderes - Brasília) como um placeholder funcional.

btnVerMapa.addEventListener("click", function () {
    const iframeId = "mapa-iframe";
    let iframe = document.getElementById(iframeId);

    if (!mapaVisivel) {
        // Mostrar o mapa
        mapaContainer.style.display = "block";

        if (!iframe) {
            iframe = document.createElement("iframe");
            iframe.src = mapaSrc; // Usa a URL de incorporação real
            iframe.width = "100%";
            iframe.height = "100%"; // 100% da div container
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
            // Opção: Apenas remover o container. Remover o iframe é mais "limpo".
            mapaContainer.removeChild(iframe); 
        }
        mapaContainer.style.display = "none";
        btnVerMapa.textContent = "VER LOCALIZAÇÃO NO MAPA";
        mapaVisivel = false;
    }
});