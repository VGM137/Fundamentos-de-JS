var maquina = Math.floor(aleatorio(1,4))
var eleccionMaquina;

function aleatorio(min, max){
  return Math.random()*(max-min)+min
}

if(maquina == 1){
  eleccionMaquina = 'piedra'
  console.log(eleccionMaquina)
}
if(maquina == 2){
  eleccionMaquina = 'papel'
  console.log(eleccionMaquina)
}
if(maquina == 3){
  eleccionMaquina = 'tijera'
  console.log(eleccionMaquina)
}
