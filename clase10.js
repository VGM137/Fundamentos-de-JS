// var persona = {
//   nombre: 'Victor',
//   edad: 14,
// }
//
// function mayoriaDeEdad(p){
//   if(p.edad >= 18){
//     console.log(`${p.nombre} es mayor de edad`)
//   }else{
//     console.log(`${p.nombre} es menor de edad`)
//   }
// }
// mayoriaDeEdad(persona)

//Otra Forma:

var persona = {
  nombre: 'Victor',
  edad: 14,
 }

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(p) {
  return p.edad >= MAYORIA_DE_EDAD
}
function imprimirSiEsMayorDeEdad(p) {
  if(esMayorDeEdad(p)) {
    console.log(`${p.nombre} es mayor de edad`)
  }else{
    console.log(`${p.nombre} es menor de edad`)
  }
}

// De estas forma se crean diferentes funciones para identificar dierentes cosas y no una sola para todas: una funcion para detectar si es mayor de edad y otra para imprimirlo
