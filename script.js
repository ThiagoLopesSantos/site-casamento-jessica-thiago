function abrirConvite() {
    const cover = document.getElementById("cover");
    cover.classList.add("open");

    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("active");
        });
    }, 800);
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
