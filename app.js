let listaNumeros=[];
var texto="";
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
    texto=document.getElementById('textoUsuario').value;
    var textoEncrip="";
    let vocal=0;
    for (let n=0;n<texto.length;n++ ){
        if (texto[n]=="a" || texto[n]=="e" || texto[n]=="i" || texto[n]=="o" || texto[n]=="u"){
            listaNumeros.push(n);
        }else{
            if(n+1==texto.length){
                vocal=1;
            }
        }
    }
    let n=0,x=0;
    while(n<listaNumeros.length){
            if (listaNumeros[0]==0){
                textoEncrip=comparacion(2,x);
            }else{
                textoEncrip+=comparacion(n,x);
            }       
        x=listaNumeros[n]+1;
        n++;
    }
    if(vocal==1){
        textoEncrip+=texto.substr(x,(texto.length-x));
        console.log("cii");
    }   
    console.log(textoEncrip);
}
function desencriptador(){

}
function comparacion(n,x){
    if(texto[listaNumeros[n]]=="a"){
        return texto.substr(x,listaNumeros[n]-x)+"ai";
     
    }else if(texto[listaNumeros[n]]=="e"){
        return texto.substr(x,listaNumeros[n]-x)+"enter";
  
    }
    else if(texto[listaNumeros[n]]=="i"){
        return texto.substr(x,listaNumeros[n]-x)+"imes";
    }
    else if(texto[listaNumeros[n]]=="o"){
        return texto.substr(x,listaNumeros[n]-x)+"ober";
    }
    else if(texto[listaNumeros[n]]=="u"){
        return texto.substr(x,listaNumeros[n]-x)+"ufat";
       
    }
    return ;
}
