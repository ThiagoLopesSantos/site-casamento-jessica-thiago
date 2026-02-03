function abrirConvite() {
    const cover = document.getElementById("cover");
    cover.classList.add("open");

    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("active");
        });
    }, 400);
}
