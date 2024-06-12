const body = document.querySelector('body');
let crono = document.querySelector('h4')
let paragrafo = document.querySelector('p');
let milisegundos = 0
let segundos = 0
let minutos = 0
let min = document.getElementById('minutos')
let sec = document.getElementById('segundos')
function comecar(){
  
// Seleciona todos os botões
let botoes = document.querySelectorAll("button");

// Gera um número aleatório entre 0 e o número de botões menos 1
let indiceSorteado = Math.floor(Math.random() * botoes.length);

// Adiciona a classe "certo" ao botão sorteado
botoes[indiceSorteado].classList.add('certo');

// Apenas para verificação, você pode logar o índice sorteado
console.log(`Botão sorteado: ${indiceSorteado}`);
contagemCronometro()
}
  function Click(teste) {
    // Seleciona o botão com a classe "certo"
    let certo = document.querySelector(".certo");
  
    if (teste === certo) {
      body.style.backgroundColor = "lime";
      body.style.color = 'black'
      setTimeout(() => {
    paragrafo.innerHTML = `Parabéns você acertou!\nTempo: ${minutos}:${segundos}.${milisegundos}`;
  }, 2000);
      setTimeout(() => {
        paragrafo.textContent = "Reiniciando jogo em 3";
      }, 6000);
      setTimeout(() => {
        paragrafo.textContent = "Reiniciando jogo em 2";
      }, 7000);
      setTimeout(() => {
        paragrafo.textContent = "Reiniciando jogo em 1";
      }, 8000);
      setTimeout(() => {
        paragrafo.textContent = "Reiniciando";
      }, 9000);
      setTimeout(() => {
        reiniciarJogo();
      }, 12000);
    } else {
      body.style.backgroundColor = "darkred";
      setTimeout(() => {
        // Codigo que será executado
        paragrafo.textContent = 'Você errou!'
      }, 500);
      setTimeout(() => {
        voltar();
      }, 2500);
    }
  }
function voltar() {
  body.style.backgroundColor = "black";
  paragrafo.textContent = ''
}
function reiniciarJogo() {
  location.reload();
}

function contagemCronometro() {
  setTimeout(() => {


      if(milisegundos < 99){
     milisegundos++;
    crono.innerHTML = `${milisegundos}`
      }
      else{
        milisegundos = 0
        segundos++ 
        sec.innerHTML = `${segundos}.`
      }
      if(segundos == 60){
        minutos++
        min.innerHTML = `${minutos}:`
        segundos = 0
        sec.innerHTML = `${segundos}.`
      }
  contagemCronometro()
    }, 10);
}



