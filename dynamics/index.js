const tiempo = document.getElementById("tiempo");
const modal = document.getElementById("exampleModal");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const boton = document.getElementById("boton");
const iniciar = document.getElementById("Iniciar");
const detener = document.getElementById("Detener");
const alarma = new Audio("./statics/audio/picadura-de-la-cobra-g-.mp3")

// console.log(segundos.value);
// console.log(horas.value);
// console.log(minutos.value); 



boton.addEventListener("click", () =>{
    if(horas.value < 0 || horas.value >23 || horas.value == null || horas.value == ""){
        horas.value = "00";
    }
    if(minutos.value < 0 || minutos.value > 59 || minutos.value == null || minutos.value == ""){
        minutos.value = "00";
    }
    if(segundos.value < 0 || segundos.value > 59 || segundos.value == null || segundos.value == ""){
        segundos.value = "00";
    }
    
    tiempo.innerHTML = horas.value +":";
    if(minutos.value < 10 && minutos.value != "00" && minutos.value != ""){
        tiempo.innerHTML += "0";
    }
    tiempo.innerHTML += minutos.value +":";
    if(segundos.value < 10 && segundos.value != "00" && segundos.value != ""){
        tiempo.innerHTML += "0";
    }
    tiempo.innerHTML += segundos.value;
    
    // console.log(segundos.value);
    // console.log(horas.value);
    // console.log(minutos.value); 
})

iniciar.addEventListener("click", () =>{
    let intervalo = setInterval(()=>{
        if(segundos.value > 0 && segundos.value != "00")
            segundos.value--;
        else{
            if(minutos.value > 0){
                segundos.value = 59;
                minutos.value--;
                // console.log(segundos.value);
            }
            else{
                alarma.play();
            }
        }
        // if(minutos.value > 0)
        //     minutos.value--;
        if(minutos.value == 0 && segundos.value == 0){
            if(horas.value > 0){
                minutos.value = 59;
                horas.value--;
            }
            else{
                horas.value = 0;
            }
        }
        // console.log(segundos.value);
        tiempo.innerHTML = horas.value +":";
        if(minutos.value < 10 && minutos.value != "00" && minutos.value != ""){
            tiempo.innerHTML += "0";
        }
        tiempo.innerHTML += minutos.value +":";
        if(segundos.value < 10 != "00"){
            tiempo.innerHTML += "0";
        }
        tiempo.innerHTML += segundos.value;
    }, 1000)
})

detener.addEventListener("click", (iniciar)=>{
    iniciar.preventDefault();
})


