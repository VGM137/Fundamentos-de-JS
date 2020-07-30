var contador = 0

const llueve = () => Math.random() < .25

do{
  contador++
}while (!llueve())

//Forma 1 con condicionante if
//if (contador === 1){
//Forma 2 con condicionante if
//if (contador < 2){
//   console.log(`Fui a ver si llovia ${contador} vez`)
// } else {
//   console.log(`Fui a ver si llovia ${contador} veces`)
// }

//Forma 3: operador condicional ternario ? que es como un atajo para la instrucción if
var frecuencia = contador === 1 ? 'vez':'veces'
console.log(`Fui a ver si llovia ${contador} ${frecuencia}`)
