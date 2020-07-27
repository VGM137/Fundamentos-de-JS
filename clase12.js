// Arrow function: permite escribir codigo en menos líneas y caracteres. Por ejemplo para escribir la funcion de la mayoria de edad de la clase 10 podemos hacer:

var persona = {
  nombre: 'Victor',
  edad: 14,
 }

const MAYORIA_DE_EDAD = 18

// var esMayorDeEdad = persona =>/*Arrow*/ persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({edad}) =>/*Arrow*/ edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(p) {
  if(esMayorDeEdad(p)) {
    console.log(`${p.nombre} es mayor de edad`)
  }else{
    console.log(`${p.nombre} es menor de edad`)
  }
}

function acceso(p){
  if(!esMayorDeEdad(p)) {
    console.log('ACCESO DENEGADO')
  }
}
// el simbolo '!' significa 'si no'
