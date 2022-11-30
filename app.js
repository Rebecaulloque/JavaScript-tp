
let categoria = document.getElementById("categoria").value;
let cantEntradas = document.getElementById("cantidad").value;
let precioTotal = document.getElementById ("precioTotal");

const entradaGeneral = 200;

const resumir = document.getElementById("btnResumen");
const borrar = document.getElementById("btnBorrar");
resumir.addEventListener("click", mostrarPrecio);
borrar.addEventListener("click", borrarPrecio);


 var categorias = [
    { tipo: "estudiante", descuento: 0.8 } ,
    { tipo: "trainee", descuento: 0.5 } ,
    { tipo: "junior", descuento: 0.15 } ,
 ];


 function hacerDescuento(desc) {
    let descuento = entradaGeneral * desc;
    return entradaGeneral - descuento;
};

function mostrarPrecio( ) {
    categoria = document.getElementById("categoria").value;

    if (categoria == "--Categoría--") {
        alert ("Por favor, selecciona una categoría.");
    } else  {
        var fileCategorias = categorias.find ((cat) => cat.tipo === categoria);
        document.getElementById ("precioTotal").innerHTML = "$ " + hacerDescuento(fileCategorias.descuento) * document.getElementById("cantidad").value; 
     }    
}

function borrarPrecio() {
    borrar.onclick = document.getElementById ("precioTotal").innerHTML = 0 ;
    
}


