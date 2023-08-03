// codigo do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [5, 4, 6, 3.7, 2, 3.3];
let comprimentoCarros = 50;
let alturaCarros = 40; 

//mostra carros
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
   }
}

//movimenta os carros
function movimentaCarro() {
  for (let m = 0; m < imagemCarros.length; m++){
   xCarros[m] -= velocidadeCarros[m];
  }
}
// volta dos carros 
function voltaInicialCarro(){
  for (let v = 0; v < imagemCarros.length; v++){
    if( passouTodaTela(xCarros[v])){
    xCarros[v] = 600
    }
  }
}

function passouTodaTela (xCarros){
  return xCarros < -50;
}
