const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const difficultyValue = document.getElementById("dificuldade");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const wrapper = document.querySelector(".wrapper")
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let podeClicar = true;
let tempoAcabou = false;
let dificuldade = 1;

//array dos nomes e imagems das cartinhas
const items = [
  { name: "flor1", image: "../jogomemoria/imgs/flor1.png" },
  { name: "flor2", image: "../jogomemoria/imgs/flor2.png" },
  { name: "flor3", image: "../jogomemoria/imgs/flor3.png" },
  { name: "flor4", image: "../jogomemoria/imgs/flor4.png" },
  { name: "flor5", image: "../jogomemoria/imgs/flor5.png" },
  { name: "flor6", image: "../jogomemoria/imgs/flor6.png" },
  { name: "flor7", image: "../jogomemoria/imgs/flor7.png" },
  { name: "flor8", image: "../jogomemoria/imgs/flor8.png" },
  { name: "flor9", image: "../jogomemoria/imgs/flor9.png" },
  { name: "flor10", image: "../jogomemoria/imgs/flor10.png" },
  { name: "flor11", image: "../jogomemoria/imgs/flor11.png" },
  { name: "flor12", image: "../jogomemoria/imgs/flor12.png" },
  { name: "flor13", image: "../jogomemoria/imgs/flor13.png" },
  { name: "flor14", image: "../jogomemoria/imgs/flor14.png" },
  { name: "flor15", image: "../jogomemoria/imgs/flor15.png" },
  { name: "flor16", image: "../jogomemoria/imgs/flor16.png" },
  { name: "flor17", image: "../jogomemoria/imgs/flor17.png" },
  { name: "flor18", image: "../jogomemoria/imgs/flor18.png" },
];

let tamanho = 4
//tempo inicial
let seconds = 0,
  minutes = 0, 
  secondsShowed = 0, 
  minutesShowed = 0;
//movimentos e contador de vitorias inicial
let movesCount = 0,
  winCount = 0;


//funcao geradora de tempo
const timeGenerator = () => {
  seconds -= 1;
  secondsShowed += 1 

  if (seconds < 1) {
    if (minutes > 0) {
      minutes -= 1;
      seconds = 60;
    } else {
      tempoAcabou = true
    }
  }

  if (secondsShowed >= 60) {
    minutesShowed += 1;
    secondsShowed = 0;
  }

  //formatacao da minutagem 
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Tempo Restante:</span>${minutesValue}:${secondsValue}`;

  let secondsShowedValue = secondsShowed < 10 ? `0${secondsShowed}` : secondsShowed;
  let minutesShowedValue = minutesShowed < 10 ? `0${minutesShowed}` : minutesShowed;


  timePassed = () => {
    wrapper.classList.add("hide");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    result.innerHTML = `<h2>O tempo acabou :( </h2>
    <h4>Movimentos: ${movesCount}</h4>
    <h4>Tempo Total: ${minutesShowedValue}:${secondsShowedValue}</h4>`;
    clearInterval(interval);
  }

  if (tempoAcabou) {
    timePassed()
  }
};

//calcular movimentos
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Movimentos:</span>${movesCount}`;
};

//pegar objetos aleatorios da array
const generateRandom = (size = tamanho) => {
  //array temporaria copiando a array de items
  let tempArray = [...items];
  //inicializa a array do valor das cartas
  let cardValues = [];
  //todos os cartoes devem ser duplicados (4*4 matrix)/2 pq os pares dos objetos devem existir
  size = (size * size) / 2; 
  //selecionar card aleatorio
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //se selecionado tira o objeto da array (para nao repetir o mesmo elemento)
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = tamanho) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
        Criar os Cards
        before => frente (interrogacao)
        after => back side (imagem);
        data-card-values eh um atributo que guarda o nome das cartas para usar depois
      */
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid (alinhamento das cartas)
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

  //Cartas
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //So roda se a carta nao tiver sido selecionado (se ela ja tiver sido clicada eh ignorado)
      if (!card.classList.contains("matched") && !card.classList.contains("flipped") && podeClicar) {
        //gira a carta
        card.classList.add("flipped");
        //se eh a primeira carta (!firstCard pq a firstCard comeca como falsa)
        if (!firstCard) {
          //entao a carta clicada se tornara a firstCard
          firstCard = card;
          //e o nome da carta se torna o firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          //incrementa movimentos desde que o usuario selecionou a segunda carta
          movesCounter();
          //segunda carta selecionada e o nome dela
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //se ambas forem selecionadas (acerto), nao dara pra selecionar elas denovo
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //coloca a firstCard como false pq a proxima carta sera a primeira agora
            firstCard = false;
            //winCount incrementa se o usuario encontrar duas iguais
            winCount += 1;
            //se o winCount ter o mesmo valor de metade das cartas (ou seja, todas as cartas foram achadas), o jogo acaba
            if (winCount == Math.floor(cardValues.length / 2)) {
              if (dificuldade <= 2) {
                setTimeout(() => {
                    result.innerHTML = `<h2>Você venceu o ${dificuldade} nível!</h2>
                    <h4>Movimentos: ${movesCount}</h4>
                    <h4>Tempo Total: ${minutesShowed}:${secondsShowed}</h4>`;
                    dificuldade++
                    continueGame();
                  }, 500) 
              }
              if (dificuldade >= 3) {
                setTimeout(() => {
                    result.innerHTML = `<h2>Você venceu o jogo :) </h2>
                    <h4>Movimentos: ${movesCount}</h4>
                    <h4>Tempo Total: ${minutesShowed}:${secondsShowed}</h4>`;
                    dificuldade = 1
                    restartGame()
                  }, 500) 
                }
            }
          } else {
            //se as cartas nao forem iguais, retornar elas pro normal
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            podeClicar = false
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
              podeClicar = true
            }, 450);
          }
        }
      }
    });
  });
};

//Comecar o jogo
startButton.addEventListener("click", () => {
  tempoAcabou = false

  if (dificuldade == 1){
    tamanho = 4
    seconds = 30;
    minutes = 1;
    wrapper.style.width = '26.87em'
  } else if (dificuldade == 2) {
    seconds = 59;
    minutes = 0;
    tamanho = 4
    wrapper.style.width = '26.87em'
  } else if (dificuldade == 3) {
    seconds = 30;
    minutes = 3;
    tamanho = 6
    wrapper.style.width = '45em'
  }

  //visibilidade dos botoes
  wrapper.classList.remove("hide");
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  //comecar o timer
  interval = setInterval(timeGenerator, 1000);
  //iniciar movimentos
  moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
  initializer();
});

//Parar o jogo
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    wrapper.classList.add("hide");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);

restartGame = () => {
  seconds = 0,
  minutes = 0, 
  secondsShowed = 0, 
  minutesShowed = 0;
  movesCount = 0;
  wrapper.classList.add("hide");
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
  clearInterval(interval);
}

continueGame = () => {
  tempoAcabou = false
  wrapper.classList.add("hide");
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  clearInterval(interval);
  setTimeout(() => {
    if (dificuldade == 1){
      seconds = 30;
      minutes = 1;
      tamanho = 4
      wrapper.style.width = '26.87em'
    } else if (dificuldade == 2) {
      seconds = 59;
      minutes = 0;
      tamanho = 4
      wrapper.style.width = '26.87em'
    } else if (dificuldade == 3) {
      seconds = 30;
      minutes = 3;
      tamanho = 6
      wrapper.style.width = '45em'
    }
    interval = setInterval(timeGenerator, 1000);
    wrapper.classList.remove("hide");
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    moves.innerHTML = `<span>Movimentos:</span> ${movesCount}`;
    initializer();
  }, 5000)
}

//inicializar valores e funcoes
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};