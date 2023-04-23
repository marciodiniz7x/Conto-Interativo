// Seletores
const capa = document.querySelector('.capa');
const particles = document.querySelector('.particles');
const titleDestaque = document.querySelector('.destacar-title');
const titleText = document.querySelector('.title');
const iniciarLeitura = document.querySelector('.iniciar-leitura');

function iniciarCapa() {
    

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