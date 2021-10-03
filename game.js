document.getElementById("player").addEventListener("click" , sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;

setInterval(restarTiempo,1000);

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "<b>";
    randNum = Math.round(Math.random()*430);
    randNum2 = Math.round(Math.random()*430);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == necesarios) {
        alert("Ganaste");
        tiempo = 0;
    }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "Tiempo: "+tiempo;
    if (tiempo == 0) {
        alert("Perdiste por lento");
        tiempo = 0;
        puntos = 0;
    }
}



