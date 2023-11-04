const dialog = document.getElementById("modal");
const botonMostrar = document.getElementById("ingresar");
const botonCerrar = document.getElementById("botonCerrar");

function mostrarModal() {
    dialog.showModal();
};

function cerrarModal() {
    dialog.close();
};

botonMostrar.onclick = mostrarModal;
botonCerrar.onclick = cerrarModal;