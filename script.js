
// ABRIR CONVITE
function abrirConvite() {
    const cover = document.getElementById("cover");

    cover.classList.add("open");
    
    // Revela os elementos com a classe "reveal"
    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
            el.classList.add("active");
        });
    }, 800);
    
    // Vai suavemente para o topo (Hero)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// CONTAGEM REGRESSIVA
const dataCasamento = new Date("2026-11-28T14:00:00"); // ajuste o horário depois

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
        document.querySelector(".countdown").innerHTML =
        "<p>Chegou o grande dia! 💍</p>";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

// BOTÃO DE PRÓXIMO

const scrollButtons = document.querySelectorAll(".scroll-indicator");

scrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentSection = button.closest("section");
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Verificar Rota
function tracarRota() {
    const origem = document.getElementById("origin").value;

    if (!origem) {
        alert("Digite seu endereço.");
        return;
    }

    const destino = "Av. Gaspar de Lemos, 450 Ilha de Guaratiba RJ";

    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origem)}&destination=${encodeURIComponent(destino)}`;

    window.open(url, "_blank");
}

// PIX
function mostrarPix() {
    const pixArea = document.getElementById("pix-area");
    const qrcodeContainer = document.getElementById("qrcode-container");
    const btnPix = document.getElementById("btn-pix");

    // Sua chave pix (pode ser CPF, E-mail ou Telefone)
    // Exemplo de como fica o código "Copia e Cola"
    const chavePix = "00020101021126580014br.gov.bcb.pix01364fbc930c-30b4-4d7e-93fd-52938d11fc295204000053039865802BR5915THIAGO L SANTOS6013RIO DE JANEIR62070503***63040112"; 

    // URL da API que gera o QR Code com base no texto da chave
    const urlQrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(chavePix)}`;

    // Insere a imagem dentro do container
    qrcodeContainer.innerHTML = `<img src="${urlQrCode}" alt="QR Code Pix">`;

    // Mostra a área do Pix com uma animação simples
    pixArea.style.display = "block";
    
    // Esconde o botão após clicar (opcional)
    btnPix.style.display = "none";
}

// Copia CHAVE pix
function copiarPix() {
    // A mesma chave que você usou na outra função
    const chavePix = "00020101021126580014br.gov.bcb.pix01364fbc930c-30b4-4d7e-93fd-52938d11fc295204000053039865802BR5915THIAGO L SANTOS6013RIO DE JANEIR62070503***63040112";  
    
    // Copia para a área de transferência
    navigator.clipboard.writeText(chavePix).then(() => {
        alert("Código Pix copiado! Agora é só colar no app do seu banco.");
    });
}

// CONFIRMAÇÃO DE PRESENÇA
document.querySelector(".rsvp-form").addEventListener("submit", function(e){
    e.preventDefault();
    this.innerHTML = `
        <div class="rsvp-success">
            <h3>Presença confirmada!</h3>
            <p>Estamos muito felizes por ter você conosco ❤️</p>
        </div>
    `;
});
