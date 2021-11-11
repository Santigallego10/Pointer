document.getElementById("player").addEventListener("click" , sumarPuntos);

let puntos = 0; //prueba
let tiempo = 30;
let necesarios = 15;

setInterval(restarTiempo,1000);

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "<b>";
    randNum = Math.round(Math.random()*430);
    randNum2 = Math.round(Math.random()*430);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == necesarios) {
        var puntajeFinal = tiempo*100;
        alert("Ganaste, tu puntuacion es de "+puntajeFinal);
        tiempo = 0;
        location.reload();
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



