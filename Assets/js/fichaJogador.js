const botaoInfoBasica = document.querySelector('.infobasicaBt');
const telaInfoBasica = document.querySelector('.telaInforbasica');
const botaoVida = document.querySelector('.vidaBt');
const telaVida = document.querySelector('.telaVida');
const botaoAtributos = document.querySelector('.atribBt')
const telaAtributos = document.querySelector('.telaAtributos')


//tela em pasta
botaoInfoBasica.addEventListener("click", tela1, false)
function tela1() {
    telaAtributos.classList.add("oculto")
    telaVida.classList.add("oculto")
    telaInfoBasica.classList.remove("oculto")
};

botaoVida.addEventListener("click", tela2, false)
function tela2() {
    telaAtributos.classList.add("oculto")
    telaInfoBasica.classList.add("oculto")
    telaVida.classList.remove("oculto")
}

botaoAtributos.addEventListener("click", tela3, false)
function tela3 () {
    telaInfoBasica.classList.add("oculto")
    telaVida.classList.add("oculto")
    telaAtributos.classList.remove("oculto")
}
