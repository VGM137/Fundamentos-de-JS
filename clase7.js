var persona = {
  nombre: 'Victor',
  edad: 24
}

function imprimirNombreYEdad(p) {
  console.log(`Hola me llamo ${p.nombre} y tengo ${p.edad}`)
}
imprimirNombreYEdad(persona)

// los parametros de un objeto pueden ser una referencia o un valor. Cuando se pasan como una referencia el obejeto cambia fuera de la funcion pero si lo que se quiere es no modificar el objeto original a traves de la funcion sino crear uno nuevo se puede hace con ... + objeto
function cumpleaños(persona){
//  persona.edad += 1 : mediante esta línea se modifica el valor original de la edad de la persona.
   return{
     ...persona,
     edad: persona.edad +1
   }
 }
//En este caso la persona sigue teniendo 24 años pero se puede generar una nueva variable que tenga como falor la funcionque cumpleaños para generar a la nueva persona:
// var victorMasViejo = cumpleaños(persona)
