// Seletores
const titleDestaque = document.querySelector('.destacar-title');
const titleText = document.querySelector('.title');
const iniciarLeitura = document.querySelector('.iniciar-leitura');

function iniciarCapa() {
    titleDestaque.style.marginTop = "0px";
    setTimeout(() => {
        titleText.style.marginLeft = "0px";
        setTimeout(() => {
            iniciarLeitura.classList.remove('sumir');
            iniciarLeitura.classList.add('blur-surgir');
        }, 600);
    }, 400);
    
}