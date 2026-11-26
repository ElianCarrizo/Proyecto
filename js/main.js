// =========================================
// 1. MODO OSCURO
// =========================================
const btnModo = document.getElementById("btn-modo");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btnModo.textContent = "Modo claro";
    } else {
        btnModo.textContent = "Modo oscuro";
    }
});

// =========================================
// 2. MOSTRAR / OCULTAR CONTENIDO (Consigna TP)
// =========================================
const btnVerMas = document.getElementById("btn-ver-mas");
const infoExtra = document.getElementById("info-extra");

btnVerMas.addEventListener("click", () => {
    infoExtra.classList.toggle("d-none");

    if (infoExtra.classList.contains("d-none")) {
        btnVerMas.textContent = "Ver más sobre nuestra historia";
    } else {
        btnVerMas.textContent = "Ocultar información";
    }
});

// =========================================
// 3. BOTÓN VOLVER ARRIBA
// =========================================
const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", () => {
    btnArriba.classList.toggle("d-none", window.scrollY < 300);
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});