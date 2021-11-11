document.getElementById("player").addEventListener("click" , sumarPuntos);

let puntos = 0; //prueba
let tiempo = 30;
let necesarios = 15;
let nivel = 1;
let centinela = false;

let it = setInterval(restarTiempo,1000); 

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "<b>";
    randNum = Math.round(Math.random()*430);
    randNum2 = Math.round(Math.random()*430);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == necesarios) {
        if(nivel == 2){
            puntajeFinal = tiempo*100;
            alert("Ganaste el nivel 2, tu puntuacion es de "+puntajeFinal);
            clearInterval(it);
        }else{
        var puntajeFinal = tiempo*100;
        alert("Ganaste el nivel 1, tu puntuacion es de "+puntajeFinal);
        document.getElementById("titulo").innerHTML="NIVEL 2";
        clearInterval(it);
        centinela = true;
        tiempo = 15;
        puntos = 0;
        necesarios = 20;
        nivel++;
        }
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



