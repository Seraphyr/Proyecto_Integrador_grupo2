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




const reiniciarModal = () => location.reload();

const botonReiniciar = document.getElementById("modal__ingresar");
botonReiniciar.onclick = reiniciarModal



// MENU DESPLEGABLE FORMATO MOVIL

let btnDesplegar = document.getElementById("btn-desplegar");
let menuNavegacion = document.getElementById("menu-navegacion");
btnDesplegar.addEventListener('click', function(){
    menuNavegacion.classList.toggle("viewMenu");
});

$(".angle-view-sub-menu").click(function(){
  $(this).siblings("ul").toggle();
})


