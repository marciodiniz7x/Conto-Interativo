// Seletores
const capa = document.querySelector('.capa');
const particles = document.querySelector('.particles');
const titleDestaque = document.querySelector('.destacar-title');
const titleText = document.querySelector('.title');
const page01 = document.querySelector('.page01');

// Botões
const iniciarLeitura = document.querySelector('.iniciar-leitura');
const voltarCapa = document.querySelector('.voltar-capa');

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
const pageFlip = new Audio('audio/page-flip.mp3');

// Tocar e pausar música tema
function tocarMusica() {
    music.volume = 1;
    music.currentTime = 0;
    music.loop = true
    music.play();
}

function pausarMusica() {
    music.volume = 0;
    music.play();
}

// Adiciona animação para piscar os olhos
gooEyes.classList.add('piscar');

// Animações ao iniciar a capa
function animarCapa() {

    capa.classList.add('blurin');
    setTimeout(() => {
        titleDestaque.style.marginTop = "0px";
        setTimeout(() => {
            titleText.style.marginLeft = "0px";
            setTimeout(() => {
                particles.classList.replace("sumir","glitch");
                iniciarLeitura.classList.remove('sumir');
                iniciarLeitura.classList.add('blurin');
                
            }, 600);
        }, 400);
    }, 300);

}

// Desligar animações finalizadas
function desligarCapa() {

    capa.classList.remove('blurin');
    titleDestaque.style.marginTop = "";
    titleText.style.marginLeft = "";
    iniciarLeitura.classList.add('sumir');
    iniciarLeitura.classList.remove('blurin');

}

function iniciarCapa() {

    tocarMusica();
    animarCapa();

}

iniciarLeitura.addEventListener('click', () => {

    magicTransition01.play();

    const fadeOut = setInterval(() => {

        if (music.volume > 0.2) {
            music.volume -= 0.2;
        } else {
            music.pause();
            music.volume = 1;
            clearInterval(fadeOut);
        }

        // Garante que o volume ficará no intervalo [0, 1]
        if (music.volume < 0) {
            music.volume = 0;
        } else if (music.volume > 1) {
            music.volume = 1;
        }
    }, 200);
    capa.classList.add('blurout');
    setTimeout(() => {
        capa.classList.add("sumir");
        page01.classList.remove('sumir');
        page01.classList.add('blurin');
        setTimeout(() => {
            pageFlip.play();
            capa.classList.remove('blurout');
            desligarCapa();
        }, 200);
    }, 2000);
    
});

voltarCapa.addEventListener('click', ()  => {

    pageFlip.play();
    capa.classList.remove('sumir');
    capa.classList.add('blurin');
    page01.classList.add('sumir');
    animarCapa();
    tocarMusica();
    
})