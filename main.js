
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
    }
    document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
    }
    document.querySelector('.tecla_tim').onclick = tocaSomTim;

    const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas [0].onclick = tocaSomPom;
