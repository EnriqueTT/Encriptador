function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//asignarTextoElemento("p","Ingresa el texto que deseas encriptar o desencriptar");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encriptador(){
    let texto=document.getElementById('textoUsuario').value;
    
    console.log(texto);
    console.log(typeof(texto));
    console.log(texto.length);
}
function desencriptador(){

}