document.addEventListener("DOMContentLoaded", function () {
    let ingresar = document.getElementById("ingresar");
    let botonCerrar = document.getElementById("botonCerrar");
    let modal = document.getElementById("modal");

    // Botón "Ingresar" abre el modal
    ingresar.addEventListener("click", function () {
        modal.style.display = "flex"; // Mostrar el modal
    });

    // Botón para cerrar el modal
    botonCerrar.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar el modal
    });
});

