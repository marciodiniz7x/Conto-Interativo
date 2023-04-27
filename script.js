// Seleciona elementos criados
const capa = document.querySelector('.capa');
const particles = document.querySelector('.particles');
const titleDestaque = document.querySelector('.destacar-title');
const titleText = document.querySelector('.title');
const page01 = document.querySelector('.page01');

// Cria novos elementos dinamicamente
const escurecer = document.createElement('div');
escurecer.classList.add('escurecer');
// capa.appendChild(escurecer); *será adicionado ao pai com ações do usuário e fará o livro escurecer//

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
const mouseover = new Audio('audio/mouseover.mp3');

// Tocar e pausar música tema
function tocarMusica() {
    music.volume = 1;
    music.currentTime = 0;
    music.autoplay = true;
    music.loop = true
    music.play();
}

function pausarMusica() {
    music.volume = 0;
    music.play();
}

// Tocar e pausar efeitos sonoros
function playMouseOver() {
    mouseover.pause();
    mouseover.currentTime = 0;
    setTimeout(() => {
        mouseover.play();
    }, 50);
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

iniciarLeitura.focus()

function iniciarCapa() {

    tocarMusica();
    animarCapa();

}

// Escurece tela ao passar o mouse no botão
const funcaoEscurecer = () => {

    capa.appendChild(escurecer);
    setTimeout(() => {
        escurecer.style.opacity = "0.5";
    }, 10);
    playMouseOver();

}

const funcaoClarear = () => {

    escurecer.style.opacity = "0";
    setTimeout(() => {
        capa.removeChild(escurecer);
    }, 100);

}

iniciarLeitura.addEventListener("mouseover", funcaoEscurecer);
iniciarLeitura.addEventListener('mouseout', funcaoClarear);

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
    
});

// Livro
const conteudo = document.querySelector('.conteudo');

const p000 = document.createElement('p');
p000.classList.add('p000');
$(document).ready(function() {
    $(".p000").load("textos/p000.txt");
});

const p001 = document.createElement('span');
p001.classList.add('p001');
$(document).ready(function() {
    $(".p001").load("textos/p001.txt");
});

// Escolha 1 - Create
const escolha001 = document.createElement('button');
escolha001.classList.add('escolha001-a');
escolha001.innerText = "Olhar ao redor";

// Escolha 1 - Click
let p002Gerado = false;
const gerarP002 = () => {
    if (!p002Gerado) {
        const p002 = document.createElement('p');
        p002.classList.add('p002', 'blurin');
        $(document).ready(function() {
            $(".p002").load("textos/p002.txt");
        });
        conteudo.appendChild(p002);
        p002Gerado = true;
    }
}
escolha001.addEventListener('click', gerarP002);


const p003 = document.createElement('p');
p003.classList.add('p003');
$(document).ready(function() {
    $(".p003").load("textos/p003.txt");
});

const p004 = document.createElement('p');
p004.classList.add('p004');
$(document).ready(function() {
    $(".p004").load("textos/p004.txt");
});

// Adicionando os textos child e Escolhas
// conteudo.appendChild(p000);
conteudo.appendChild(p001);
// Escolha 1 - Add
conteudo.appendChild(escolha001);


// conteudo.appendChild(p003);
// conteudo.appendChild(p004);


// Ações Escolhas
