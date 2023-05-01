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

// Botão iniciar livro
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

        if (!inicioCriado) {
            iniciarPage01();
            inicioCriado = true;
        }

        setTimeout(() => {

            pageFlip.play();
            capa.classList.remove('blurout');
            desligarCapa();

        }, 200);

    }, 2000);
    
});

// Botão voltar à capa do livro
voltarCapa.addEventListener('click', ()  => {

    pageFlip.play();
    capa.classList.remove('sumir');
    capa.classList.add('blurin');
    page01.classList.add('sumir');
    animarCapa();
    tocarMusica();
    
});

// Gera container principai para conteúdo do livro
const conteudo = document.querySelector('.conteudo');

// Inicia página 01
let inicioCriado = false;
const escolha001 = document.createElement('button');
function iniciarPage01() {

    setTimeout(() => {

        // Gerar parágrafo inicial
        const p001 = document.createElement('span');
        p001.classList.add('p001', 'blurin');
        $(document).ready(function() {
            $(".p001").load("textos/p001.txt");
        });
        conteudo.appendChild(p001);

        setTimeout(() => { 
        
        // Gerar botão de escolha
        
        escolha001.classList.add('escolhas', 'escolha001a', 'blurin');
        escolha001.innerText = "Olhar ao redor";
        conteudo.appendChild(escolha001);

        }, 1000);

    }, 1000);

}

// Escolha 1 - Click - Gera Parágrafo 002
let p002Gerado = false;
const gerarP002 = () => {

    if (!p002Gerado) {

        escolha001.classList.add('escolhido', 'clicado');
        const p002 = document.createElement('p');
        p002.classList.add('p002', 'blurin');
        $(document).ready(function() {
            $(".p002").load("textos/p002.txt", () => {
                var texto = $(".p002").text();
                var i = 0;
                setInterval(function() {
                    if (i <= texto.length) {
                        $(".p002").text(texto.slice(0, i++));
                    }
                }, 10);
            });
        });
        conteudo.appendChild(p002);

        let i = 0;
        setInterval(function() {
        if (i <= texto.length) {
            p002.textContent = texto.slice(0, i++);
        }
        }, 100);
        
        p002Gerado = true;

        // Gera botões escolha 2
        setTimeout(() => {

            // Flexbox opções de escolha
            const escolhasBox2 = document.createElement('div');
            escolhasBox2.classList.add('escolhas-box2');
            conteudo.appendChild(escolhasBox2);

            // Cria os botões de escolha 2 dentro da Flexbox

            // Escolha 2a
            const escolha002a = document.createElement('button');
            escolha002a.classList.add('escolhas', 'escolha002a', 'blurin');
            escolha002a.innerText = "Ter esperança";
            escolhasBox2.appendChild(escolha002a);

            // Escolha 2b
            const escolha002b = document.createElement('button');
            escolha002b.classList.add('escolhas', 'escolha002b', 'blurin');
            escolha002b.innerText = "Lamentar-se";
            escolhasBox2.appendChild(escolha002b);

            // Evento de clique em cada botão
            let p003Gerado = false;
            
            const gerarP003a = () => {
                if (!p003Gerado) {

                    const p003 = document.createElement('p');
                    p003.classList.add('p003', 'blurin');
                    $(document).ready(function() {
                        $(".p003").load("textos/p003a.txt", () => {
                            var texto = $(".p003").text();
                            var i = 0;
                            setInterval(function() {
                                if (i <= texto.length) {
                                    $(".p003").text(texto.slice(0, i++));
                                }
                            }, 10);
                        });
                    });
                    conteudo.appendChild(p003);
                    p003Gerado = true;
            
                }
            }

            const gerarP003b = () => {
                if (!p003Gerado) {

                    const p003 = document.createElement('p');
                    p003.classList.add('p003', 'blurin');
                    $(document).ready(function() {
                        $(".p003").load("textos/p003b.txt", () => {
                            var texto = $(".p003").text();
                            var i = 0;
                            setInterval(function() {
                                if (i <= texto.length) {
                                    $(".p003").text(texto.slice(0, i++));
                                }
                            }, 10);
                        });
                    });
                    conteudo.appendChild(p003);
                    p003Gerado = true;
            
                }
            }

            escolha002a.addEventListener('click', gerarP003a);
            escolha002b.addEventListener('click', gerarP003b);

        }, 5000);

    }

}
escolha001.addEventListener('click', gerarP002);

// Escolha 2 click





        // setTimeout(() => {
        //     const p003 = document.createElement('p');
        //     p003.classList.add('p003', 'blurin');
        //     $(document).ready(function() {
        //         $(".p003").load("textos/p003.txt");
        //     });
        //     conteudo.appendChild(p003);
        // }, 1000);

const p004 = document.createElement('p');
p004.classList.add('p004');
$(document).ready(function() {
    $(".p004").load("textos/p004.txt");
});



// Adicionando os textos child e Escolhas
// conteudo.appendChild(p000);



// 
// conteudo.appendChild(p004);


// Ações Escolhas
