var persona = {
  nombre: 'Victor',
  edad: 24,
  peso: 75,
  altura: 175
};
console.log(`Peso inicial ${persona.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = person => persona.peso += INCREMENTO_PESO
const adelgazar = person => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < .4

const META = persona.peso - 3
var dias = 0

while (persona.peso > META) { //mientras que el peso de persona sea mayor que la meta, se ejecutará el codigo

  if (comeMucho()) {
    aumentarDePeso(persona)
  }if(realizaDeporte()) {
    adelgazar(persona)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazó 3kg`)
