const pMinutos = document.querySelector('.minutos');
const pSegundos = document.querySelector('.segundos');
let interval;
let quadradinho = document.querySelector('.main-ativo');
let button = document.querySelector("cust");
let div = document.querySelector("#button");

function quadrados() {
    quadradinho.style.display = "flex";
    cust.style.display = "none";
    div.style.display = "none";
}

const atualizarParagrafos = function (minutos, segundos) {
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}


const iniciarJogo = function () {
    interval = setInterval(atualizarTimer, 1000);

}

const atualizarTimer = function () {
    let cores = Number ();
    let minuto = Number(pMinutos.innerHTML);
    let segundo = Number(pSegundos.innerHTML);
    var n=Math.random('#vermelho','verde','amarelo','azul');
    if (segundo === 0) {
        if (minuto === 0) {
            clearInterval(interval);
            coresaleatorio(cores);
            
        }
        else {
            minuto--;
            segundo = 59;
        }

    }
    else {
        segundo--;
    }


    atualizarParagrafos(minuto, segundo);
}

function coresaleatorio(cores)
{
    var cores = ('#vermelho','verde','amarelo','azul');
    var aleatorio = '';
    for (var i = 0; i < cores; i++) {
        var rnum = Math.floor(Math.random() * cores.length);
        aleatorio += cores.substring(rnum, rnum + 1);
    }
    return aleatorio;
}

cust.onclick = function () {
    quadrados();
    iniciarJogo();
    coresaleatorio();
};