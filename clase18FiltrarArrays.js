var victor = {
  nombre: 'Victor',
  apellido: 'Garza',
  altura: 1.75,
  libros: 30
}
var raul = {
  nombre: 'Raúl',
  apellido: 'Escudero',
  altura: 1.75,
  libros: 5
}
var diego = {
  nombre: 'Diego',
  apellido: 'Garrido',
  altura: 1.68,
  libros: 10
}
var ricardo = {
  nombre: 'Ricardo',
  apellido: 'Nieto',
  altura: 1.89,
  libros: 50
}
var omar = {
  nombre: 'Omar',
  apellido: 'Garcia',
  altura: 1.80,
  libros: 20
}
//const esBaja = ({altura}) => altura < 1.8
//
var personas = [victor, raul, diego, ricardo, omar]
//
// var personasBajas = personas.filter(function(personas){
//   return personas.altura < 1.8
// })
//

//const reducer = (acum, persona) => acum + persona.
const reducer = (acum, {libros}) => acum + libros

var totalDeLibros = personas.reduce(reducer, 0)
console.log(totalDeLibros)
