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
    var textoProc="";
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
                textoProc+=comparacion(n);
                listaNumeros[0]=1;
                x=1;
            }else{
                textoProc+=texto.substr(x,listaNumeros[n]-x)+comparacion(n);
                x=listaNumeros[n]+1;
            }       
        n++;
    }
    if(vocal==1){
        textoProc+=texto.substr(x,(texto.length-x));

    }   
    pantalla(textoProc);
}
function desencriptador(){
    texto="";
    texto=minusculas(document.getElementById('textoUsuario').value);
    var textoProc="";
    for (let n=0;n<texto.length;n++ ){
        textoProc = textoProc + texto[n];
        if (texto[n]=="a" || texto[n]=="e" || texto[n]=="i" || texto[n]=="o" || texto[n]=="u"){
            n= n + convertiravocales(texto[n]);
        }
    }
    pantalla(textoProc);
    }

function pantalla(textop){
    document.querySelector('#textoImpreso').innerHTML=textop;
    document.getElementById('muñeco').style.display="none";
    document.getElementById('textoImpreso').style.height="80%";
    document.getElementById('textoImpreso').style.textAlign="left"
    impresion=textop;
    //console.log(textop);
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
    document.getElementById('muñeco').style.display="initial";
    document.getElementById('textoImpreso').style.height="40%";
    document.getElementById('textoImpreso').style.textAlign="center";
    document.querySelector('#textoImpreso').innerHTML="";
}
function minusculas(t){
    if(t.includes("A") || t.includes("E") || t.includes("I") || t.includes("O") || t.includes("U")){
        alert("Te dije que sin mayúsculas y fue lo primero que hiciste :P");
    }
    return t.toLocaleLowerCase();
}
limpiador();
console.log("Bienvenido a mi programa");
console.log("Es un placer para mi poder aplicar lo aprendido en los cursos de Alura en un proyecto tan práctico como este.");
console.log("Se que hay un camino largo por recorrer, y eso solo lo hace más emocionante");
console.log("PD: Hay un mensaje oculto si decides colocar alguna vocal en mayúscula ;D");
