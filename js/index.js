const relogio = document.querySelector('.relogio');

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function transformaSegundoEmHora(segundo){
  const data = new Date(segundo * 1000);
  return data.toLocaleTimeString('pt-br',{
    hour12:false,
    timeZone:'UTC'
  })
}

function initializedStyle(){
  relogio.classList.remove('paused');
  relogio.classList.add('initialized');
}

function pausedStyle(){
  relogio.classList.remove('initialized');
  relogio.classList.add('paused');
}

iniciar.addEventListener('click', ()=>{
  initializedStyle()
  clearInterval(timer)
  timer = setInterval(()=>{
    relogio.innerHTML = transformaSegundoEmHora(segundos);
    segundos++;
  },1000)
})

pausar.addEventListener('click',()=>{
  clearInterval(timer);
  pausedStyle();
})

zerar.addEventListener('click',()=>{
  const zerar = confirm('Deseja mesmo zerar o cronometro?')
  if(zerar){
    initializedStyle();
    segundos = 0;
    relogio.innerHTML = transformaSegundoEmHora(segundos);
    clearInterval(timer);
  }
})