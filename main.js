const botoes = document. querySelectorAll\(".botao");
console.log (botoes);

for(let i=0; i < botoes.length; ii++) {

    for (let j=0<botoes.lenght, j++){
        botoes [j].classList.remove ("ativo");
    }

    botoes[i].onclick=function(){
        botoes [i].classList.add ("ativo");
    }

})