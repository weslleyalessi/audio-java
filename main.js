//criando/declarando a função tocaSom
function tocaSom(IDaudio){
    //if else elemento comparadores comparação
    const elemento = document.querySelector(IDaudio);
        if (elemento && elemento.localName === 'audio'){
            elemento.play();
 
        }else{
                console.log("Elemento não encontrado")
   }
}

//criando referência constante ListaDeTeclas buscando todos
const listaDeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição while = enquanto
//mudar "while" para "for"
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //acessa o 2° item da classe de teclas
    const IDaudio = `#som_${efeito}`; //template string
    tecla.onclick = function(){ //cria função anônima para chamar tocaSom
        tocaSom(IDaudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === "Space" || evento.code === "Enter"){
        tecla.classList.add('.ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
        }
}

