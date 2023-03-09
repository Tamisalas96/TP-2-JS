
let frases = "";

do {
    let cadena = prompt("Introduce una cadena");
 
    if(frases == ""){
      frases = frases + cadena;
    }else {
      frases = frases + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
document.write(resultado);

