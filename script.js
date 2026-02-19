// ABRIR CONVITE
function abrirConvite() {
    const cover = document.getElementById("cover");
    cover.classList.add("open");
    
    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
            el.classList.add("active");
        });
    }, 800);
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// CONTAGEM REGRESSIVA
const dataCasamento = new Date("2026-11-28T15:00:00");

function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {
        document.querySelector(".countdown").innerHTML = "<p style='font-size: 1.5rem; color: var(--primary);'>Chegou o grande dia! 💍</p>";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("days").textContent = String(dias).padStart(2, '0');
    document.getElementById("hours").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
    document.getElementById("seconds").textContent = String(segundos).padStart(2, '0');
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

// SCROLL INDICATOR
const scrollButtons = document.querySelectorAll(".scroll-indicator");

scrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentSection = button.closest("section");
        const nextSection = currentSection.nextElementSibling;
        
        // Pula os divisores florais
        if (nextSection && nextSection.classList.contains('floral-divider')) {
            nextSection.nextElementSibling.scrollIntoView({ behavior: "smooth" });
        } else if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// INTERSECTION OBSERVER PARA ANIMAÇÕES
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// TRAÇAR ROTA
function tracarRota() {
    const origem = document.getElementById("origin").value;
    if (!origem) {
        alert("Por favor, digite seu endereço.");
        return;
    }
    const destino = "Sítio Casa das Pedras, Av. Gaspar de Lemos, 450, Ilha de Guaratiba, Rio de Janeiro - RJ";
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origem)}&destination=${encodeURIComponent(destino)}`;
    window.open(url, "_blank");
}

// PIX MELHORADO
let pixVisivel = false;

function mostrarPix() {
    const qrcodeContainer = document.getElementById("qrcode-container");
    const placeholder = document.getElementById("pix-placeholder");
    const keyBox = document.getElementById("pix-key-box");
    const btnMostrar = document.getElementById("btn-mostrar");
    const btnCopiar = document.getElementById("btn-copiar");
    
    const chavePix = "00020101021126580014br.gov.bcb.pix01364fbc930c-30b4-4d7e-93fd-52938d11fc295204000053039865802BR5915THIAGO L SANTOS6013RIO DE JANEIR62070503***63040112";
    const urlQrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(chavePix)}`;
    
    qrcodeContainer.innerHTML = `<img src="${urlQrCode}" alt="QR Code Pix">`;
    
    placeholder.style.display = 'none';
    qrcodeContainer.style.display = 'flex';
    keyBox.style.display = 'block';
    btnMostrar.style.display = 'none';
    btnCopiar.style.display = 'inline-flex';
    
    pixVisivel = true;
}

function copiarPix() {
    const chavePix = "00020101021126580014br.gov.bcb.pix01364fbc930c-30b4-4d7e-93fd-52938d11fc295204000053039865802BR5915THIAGO L SANTOS6013RIO DE JANEIR62070503***63040112";
    
    navigator.clipboard.writeText(chavePix).then(() => {
        const btn = document.getElementById("btn-copiar");
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copiado!
        `;
        btn.style.background = '#4CAF50';
        btn.style.color = 'white';
        btn.style.borderColor = '#4CAF50';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

// RSVP MELHORADO
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.rsvp-button');
    btn.innerHTML = 'Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
        this.innerHTML = `
            <div class="rsvp-success reveal active">
                <h3>🎉 Presença Confirmada!</h3>
                <p>Estamos muito felizes por ter você conosco.<br>Um e-mail de confirmação foi enviado!</p>
            </div>
        `;
    }, 1000);
});