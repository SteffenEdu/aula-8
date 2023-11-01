const aplausos = document.querySelector("#som_tecla_aplausos")
function tocaSom(som){
    alert(som);
}
 tocaSom("clap,clap,clap")

let controle = "tocar";

if (controle == "tocar"){
    alert("audio pronto para tocar");
}else{
    alert("o audio não está pronto")
}

const buttons = document.querySelectorAll("button")
let contador = 0;
while (contador < buttons.length){
    buttons[contador].textContent = contador;
    contador = contador + 1;
}