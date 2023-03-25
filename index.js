let millisecond = 0
let seconds = 0
let minutes = 0          //Variaveis que guardam os tempos em função de milisegundos || Variables that store times in milliseconds
let hours = 0

let cron

document.getElementById('start').onclick = () => start();
document.getElementById('pause').onclick = () => pause();
document.getElementById('reset').onclick = () => reset();



function start() {
    // Função do botão 'start', que serve para iniciar o cronômetro || Function of the 'start' button, which is used to start the stopwatch
    pause()
    cron = setInterval(() => {timer(); }, 10)
}

function pause() {
    // Função do botão 'pause', que serve para pausar o cronômetro || Function of the 'pause' button, which serves to pause the stopwatch
    clearInterval(cron)
}

function reset() {  // Função do botão 'reset', que serve para resetar o cronômetro || Function of the 'reset' button, which is used to reset the stopwatch
    seconds = 0
    hours = 0
    minutes = 0
    
    document.getElementById("seconds").innerText = '00'
    document.getElementById("minutes").innerText = '00'
    document.getElementById("hours").innerText = '00'
}

function timer () {
      //Função que faz o cronônometro aumentar os segundos, minutos e horas e altera o DOM 
      //|| Function that makes the stopwatch increase the seconds, minutes and hours and changes the DOM


    if ((millisecond += 10) == 1000) {
        millisecond = 0
        seconds++
    }

    if (seconds == 60) {
        seconds = 0
        minutes++
    }

    if (minutes == 60) {
        minutes = 0
        hours++
    }

    document.getElementById("seconds").innerText = returnData(seconds)
    document.getElementById("minutes").innerText = returnData(minutes)
    document.getElementById("hours").innerText = returnData(hours)
}

function returnData(input) {
    // Função para formatação dos segundos, minutos e horas. || Function for formatting seconds, minutes and hours.
    return input >= 10 ? input : `0${input}`
}
