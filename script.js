// =====================================================
// OBTENER ELEMENTOS
// =====================================================

const sobre =
    document.getElementById("sobre");

const botonAbrir =
    document.getElementById("abrir");

const botonCerrar =
    document.getElementById("cerrar");


// =====================================================
// FUNCIÓN PARA ABRIR
// =====================================================

function abrirCarta() {

    sobre.classList.add("abierto");

}


// =====================================================
// FUNCIÓN PARA CERRAR
// =====================================================

function cerrarCarta() {

    sobre.classList.remove("abierto");

}


// =====================================================
// BOTÓN OPEN
// =====================================================

botonAbrir.addEventListener(
    "click",
    function () {

        abrirCarta();

    }
);


// =====================================================
// BOTÓN CLOSE
// =====================================================

botonCerrar.addEventListener(
    "click",
    function () {

        cerrarCarta();

    }
);


// =====================================================
// TOCAR EL SOBRE
// =====================================================

sobre.addEventListener(
    "click",
    function (evento) {


        /*
         Evitamos que el clic
         interfiera con los botones.
        */

        if (
            evento.target.closest(".botones")
        ) {

            return;

        }


        /*
         Si está cerrado,
         lo abrimos.
        */

        if (
            !sobre.classList.contains("abierto")
        ) {

            abrirCarta();

        }

    }
);