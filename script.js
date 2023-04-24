// Seletores
const capa = document.querySelector('.capa');
const particles = document.querySelector('.particles');
const titleDestaque = document.querySelector('.destacar-title');
const titleText = document.querySelector('.title');
const iniciarLeitura = document.querySelector('.iniciar-leitura');

// Cria os olhos de Goo na capa
const gooEyes = document.createElement('div');
gooEyes.classList.add('goo-eyes');

const olho1 = document.createElement('div');
olho1.classList.add('olho1', "eyes");

const olho2 = document.createElement('div');
olho2.classList.add('olho2', 'eyes');

gooEyes.appendChild(olho1);
gooEyes.appendChild(olho2);

capa.appendChild(gooEyes);

// Audios
const music = new Audio('audio/awaken.mp3');
const magicTransition01 = new Audio('audio/magic-transition01.mp3');

function iniciarCapa() {
    
    // Adiciona animação para piscar os olhos
    gooEyes.classList.add('piscar');

    // Tocar tema
    music.loop = true
    music.play();

    capa.classList.add('blur-surgir');
    setTimeout(() => {
        titleDestaque.style.marginTop = "0px";
        setTimeout(() => {
            titleText.style.marginLeft = "0px";
            setTimeout(() => {
                particles.classList.replace("sumir","glitch");
                iniciarLeitura.classList.remove('sumir');
                iniciarLeitura.classList.add('blur-surgir');
            }, 600);
        }, 400);
    }, 300);
    
}

iniciarLeitura.addEventListener('click', () => {
    magicTransition01.play();
    const fadeOut = setInterval(() => {
        if (music.volume > 0) {
            music.volume -= 0.1;
        } else {
            music.pause();
            clearInterval(fadeOut);
        }
    }, 100);
})