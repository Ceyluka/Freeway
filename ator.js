// codigos do ator

// variaveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false
let meusPontos = 0;
 
// mostra o ator

function mostraAtor() {
  image(imagemAtor, xAtor , yAtor , 30, 30);
}

//movimenta o ator 

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
     yAtor -= 4
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
     yAtor += 4
    }
  }
}

function verificaColisao(){
  //collideReactCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length ; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros,     alturaCarros, xAtor, yAtor, 15 )
      if (colisao){
        voltaAtor();
        somDaColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255, 240, 60))
  textAlign(CENTER);
  textSize(25)
  text(meusPontos, width / 5, 27);
}
 
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}
 
function podeSeMover(){
  return yAtor < 366;
}