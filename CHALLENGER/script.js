
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


// Validacion Texto

function validarTexto(texto){
    var reglaValidacion = new RegExp("[°!$%&/()=?¡'¿áéíóú]|[0-9]","g");
    var mensaje = texto.value;

    if (mensaje==""){
        alert("debe ingresar un texto");
        return false;
    }else{
        if (!reglaValidacion.test(mensaje)){
            return true;
        }else{
            alert("Solo acepta caracteres alfabeticos, sin acentos");
            return false;
        }
    }
}

// Encriptacion
function encriptar (texto){
    var textoAEncriptar = texto.value;
    textoAEncriptar = textoAEncriptar.toLowerCase();
    textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");    
    textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");    
    textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");    
    textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");    
    textoAEncriptar = textoAEncriptar.replaceAll("u", "ufar");  
    document.querySelector("#msg").value = textoAEncriptar;    
}

//Desencriptacion
function desencriptar (texto){
    var textoADesencriptar = texto.value;
    textoADesencriptar = textoADesencriptar.toLowerCase();
    textoADesencriptar = textoADesencriptar.replaceAll("enter", "e");    
    textoADesencriptar = textoADesencriptar.replaceAll("imes", "i");    
    textoADesencriptar = textoADesencriptar.replaceAll("ai", "a");    
    textoADesencriptar = textoADesencriptar.replaceAll("ober", "o");    
    textoADesencriptar = textoADesencriptar.replaceAll("ufar", "u");
    document.querySelector("#msg").value = textoADesencriptar;   
}
 //copiar   
function copiar (input){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
}

//Botones
var botonEncriptar = document.querySelector("#btn-encriptar");
var textoIngresado = document.querySelector("#input-texto");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var copiarTexto = document.querySelector("#msg");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();       
    validarTexto(textoIngresado);   
    encriptar(textoIngresado);      
    textoIngresado.value = "";       
})

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();         
    validarTexto(textoIngresado);   
    desEncriptar(textoIngresado);   
    textoIngresado.value = "";       
})

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiar(copiarTexto)
})


