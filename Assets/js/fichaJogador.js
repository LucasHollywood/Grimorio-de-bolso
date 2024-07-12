const botaoInfoBasica = document.querySelector('.infobasicaBt');
const telaInfoBasica = document.querySelector('.telaInforbasica');
const botaoVida = document.querySelector('.vidaBt');
const telaVida = document.querySelector('.telaVida');


//tela em pasta
botaoInfoBasica.addEventListener("click", tela1, false)
function tela1() {
    telaVida.classList.add("oculto")
    telaInfoBasica.classList.remove("oculto")
};

botaoVida.addEventListener("click", tela2, false)
function tela2() {
    telaInfoBasica.classList.add("oculto")
    telaVida.classList.remove("oculto")
}


