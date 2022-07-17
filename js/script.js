const character = document.querySelector('.character'); 
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

//Função para atribuir a animação do pulo
function handleKeyDown(event) {
  if (event.keyCode === 32) {
  character.classList.add('jump');

  setTimeout(() => {
  character.classList.remove('jump');
    },500);
  }
}   

//Loop de verificação para saber se acabou o jogo
const loop = setInterval(() =>{
  const pipePosition = pipe.offsetLeft;
  const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');
  const cloudsPosition = clouds.offsetLeft;

  if(pipePosition <= 120 && pipePosition > 0 && characterPosition < 80){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
  
    character.style.animation = 'none';
    character.style.bottom = `${characterPosition}px`;

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;    

    character.src = './images/game-over.png';
    character.style.width = '75px';
    character.style.marginLeft = '50px';

    document.body.innerHTML = '<h1 class="game-over">GAME OVER<br> PRESS F5 TO START OVER</h1>';

    clearInterval(loop);

  }
}, 10);

document.addEventListener('keydown', handleKeyDown);
