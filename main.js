//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }
    //chamando/invocando a função TocaSomPom pelo clique do botão pom
    document.querySelector('.tecla_pom').onclick = tocaSomPom;  


//criando referência constante ListaDeTeclas buscando todos
const listaDeTeclas = document.querySelectorAll('.tecla');

//invocando a função tocaSomPom a partir do item 0, 1º botão
listaDeTeclas [0].onclick = tocaSomPom;

//criando referência variável "contador" iniciando = 0
let contador = 0; 

//estrutura de repetição while = enquanto
while(contador <9){
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;

    console.log(contador);
}
