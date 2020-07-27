var persona = {
  nombre: 'Victor',
  edad: 24,
  peso: 75,
  altura: 175
};
console.log(`Peso inicial ${persona.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

// function aumentarDePeso(persona){
//   return persona.peso += 200
// }
//para resumir una funcion se usa una funcion arrow
const aumentarDePeso = person => persona.peso += INCREMENTO_PESO
const adelgazar = person => persona.peso -= INCREMENTO_PESO

// la estructura repetitiva for se inicia con un contador llamado i en un valor inicial, la segunda parte es una condición, mientras i este dentro de esa condicion la funcion que hay entro del for se va a ejecutar y finalmente i++ nos sirve para aumentar el número de repeticiones.
for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random()//arroja un numero random
  if (random < 0.25){
    aumentarDePeso(persona)
  }else if (random < 0.5)
    adelgazar(persona)
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}`)
