function encriptar(mensaje) {

  mensaje = mensaje.replace(/e/g, "enter");
  mensaje = mensaje.replace(/i/g, "imes");
  mensaje = mensaje.replace(/a/g, "ai");
  mensaje = mensaje.replace(/o/g, "ober");
  mensaje = mensaje.replace(/u/g, "ufat");
  return mensaje;
}
  
function encriptarMensaje() {

  var inputMensaje = document.getElementById("inputMensaje").value;
  var mensajeEncriptado = encriptar(inputMensaje);
  document.getElementById("mensaje").innerHTML = mensajeEncriptado;

  if(mensajeEncriptado === ""){

    document.getElementById("btnCopiar").style.display = "none";
  }

  else{

    document.getElementById("btnCopiar").style.display = "block";
  }
}
  
function descifrar(mensaje) {

  mensaje = mensaje.replace(/ufat/g, "u");
  mensaje = mensaje.replace(/ober/g, "o");
  mensaje = mensaje.replace(/ai/g, "a");
  mensaje = mensaje.replace(/imes/g, "i");
  mensaje = mensaje.replace(/enter/g, "e");
  return mensaje;
}
  
function descifrarMensaje() {

  var inputMensaje = document.getElementById("inputMensaje").value;
  var mensajeDescifrado = descifrar(inputMensaje);
  document.getElementById("mensaje").innerHTML = mensajeDescifrado;

  if(mensajeDescifrado === ""){

    document.getElementById("btnCopiar").style.display = "none";
  }

  else{

    document.getElementById("btnCopiar").style.display = "block";
  } 
}
  
function copiarMensaje() {

  var mensaje = document.getElementById("mensaje");
  var seleccion = window.getSelection();
  var rango = document.createRange();
  rango.selectNodeContents(mensaje);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand('copy');
  alert("¡Mensaje copiado!");
}


  