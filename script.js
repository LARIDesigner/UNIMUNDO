/*pegar item no html*/
const boneco = document.querySelector('.boneco');
const pipe = document.querySelector('.pipe');
const mascara = document.querySelector('.mascara-gamer-over');

//animação para pular//
const jump = () => {
    boneco.classList.add('jump');

    setTimeout(() => {
        boneco.classList.remove('jump')
    }, 500);


}

//animação para perder a partida//
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '');

    if (pipePosition <= 110 && pipePosition > 0 && bonecoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        boneco.style.animation = 'none';
        boneco.style.bottom = `${bonecoPosition}px`;

        boneco.src = './img/fim.gif';
        boneco.style.width = '100px';
        boneco.style.marginLeft = '35px';
        


        clearInterval(loop);

    }

}, 10)


document.addEventListener('keydown', jump);

