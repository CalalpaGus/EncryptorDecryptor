/*Scripts de los botones*/

function enviarTextoNoEnc(){
    var mensaje=document.getElementById("mensaje").value;
    document.getElementById("mensajeEncriptado").value=encriptarTexto(mensaje);
}

function enviarTextoEnc(){
    var mensaje=document.getElementById("mensaje").value;
    document.getElementById("mensajeEncriptado").value=desencriptarTexto(mensaje);
}

function copiarAlPorta(){
    let mensaje= document.getElementById("mensajeEncriptado");
    mensaje.select();
    document.execCommand("copy");   
}

/*Encriptar texto del text-area*/
function encriptarTexto(mensaje) {
    var mensaje= mensaje;
    var encriptado="";
    for(var i=0; i<mensaje.length; i++){
        if(mensaje[i]=="a"){
            ent="ai";   
        }else if(mensaje[i]=="e"){
            ent="enter";
        }else if(mensaje[i]=="i"){
            ent="imes";
        }else if(mensaje[i]=="o"){
            ent="ober";
        }else if(mensaje[i]=="u"){
            ent="ufat";
        }else{
            ent=mensaje[i];
        }
        encriptado=encriptado+ent;
    }
    return encriptado;
}
/*Desencriptar texto del text-area*/
function desencriptarTexto(mensaje){
    var mensaje = mensaje;
    var desencriptado ="";
    for(var j=0; j<mensaje.length; j++){
        if(mensaje[j]=="a"){
            ent="a";
            j=j+1;
        }else if(mensaje[j]=="e"){
            ent="e";
            j=j+4;
        }else if(mensaje[j]=="i"){
            ent="i";
            j=j+3;
        }else if(mensaje[j]=="o"){
            ent="o";
            j=j+3;
        }else if(mensaje[j]=="u"){
            ent="u";
            j=j+3;
        }else{
            ent=mensaje[j];
        }
        desencriptado=desencriptado+ent;
    }
    return desencriptado;
}

