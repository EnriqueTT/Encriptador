let listaNumeros=[];
var texto="";
var impresion="";
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
    texto=minusculas(document.getElementById('textoUsuario').value);
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
                textoEncrip+=comparacion(n);
                listaNumeros[0]=1;
                x=1;
            }else{
                textoEncrip+=texto.substr(x,listaNumeros[n]-x)+comparacion(n);
                x=listaNumeros[n]+1;
            }       
        n++;
    }
    if(vocal==1){
        textoEncrip+=texto.substr(x,(texto.length-x));

    }   
    document.querySelector('#textoImpreso').innerHTML=textoEncrip;
    console.log(textoEncrip);
    impresion=textoEncrip;
    limpiador();
}
function desencriptador(){
    texto="";
    texto=minusculas(document.getElementById('textoUsuario').value);
    var textoDesencrip="";
    for (let n=0;n<texto.length;n++ ){
        textoDesencrip = textoDesencrip + texto[n];
        if (texto[n]=="a" || texto[n]=="e" || texto[n]=="i" || texto[n]=="o" || texto[n]=="u"){
            n= n + convertiravocales(texto[n]);
        }
    }
        console.log(textoDesencrip);
        document.querySelector('#textoImpreso').innerHTML=textoDesencrip;
        impresion=textoDesencrip;
        limpiador();
    }

function convertiravocales(letra){
   switch (letra)
   {
    case 'a': 
     return 1;
    case 'e':
     return 4;
    case 'i':
     return 3;
    case 'o':
     return 3;
    case 'u':
     return 3;
     default: return 0;
   }
}
function comparacion(n){
    if(texto[listaNumeros[n]]=="a"){
        return "ai";
     
    }else if(texto[listaNumeros[n]]=="e"){
        return "enter";
  
    }
    else if(texto[listaNumeros[n]]=="i"){
        return "imes";
    }
    else if(texto[listaNumeros[n]]=="o"){
        return "ober";
    }
    else if(texto[listaNumeros[n]]=="u"){
        return "ufat";
       
    }
    return ;
}
function limpiador(){
     listaNumeros=[];
     texto="";
     document.querySelector('#textoUsuario').value='';
     

}
function copiar(){
    navigator.clipboard.writeText(impresion);
}
function minusculas(t){
    if(t.includes("A") || t.includes("E") || t.includes("I") || t.includes("O") || t.includes("U")){
        alert("Te dije que sin mayúsculas y fue lo primero que hiciste :P");
    }
    return t.toLocaleLowerCase();
}
limpiador();
