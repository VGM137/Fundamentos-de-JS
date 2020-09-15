const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Método $.get nos va a permitir hacer un request y acepta varios parámetros: la url que llama al personaje segun su id, el objeto crossDomain y una función que requiera a la data que está en el Argument resultado del request realizado a la URL. Se pueden declarar dentro del método o llamarlas por su constante.
const options = { crossDomain: true }

//Todos los strings tienen el método .replace para remplazarlo por otro     
//Los métodos de jquery se pueden encadenar. Elmétodo .fail sirve para detectar errores durante la carga y se debe disparar una funcion que lo indique.
function obtenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
   .get(url, options, callback)
   .fail(() => {
    console.log(`Algo salió mal. No se pudo obtener el personaje ${id}`)
  })
}

//En este caso se han encadenado las funciones para que ocurran en serie. A diferencia de la clase anterior aquí se han adnidado las functions que disparan el nombre del personaje en el llamado de cada una. Así llamando al callback como parámetro de la funsion obtenerPersonaje.

obtenerPersonaje(1, function(persona){
  console.log(`Hola, yo soy ${persona.name}`)
  obtenerPersonaje(2, function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
    obtenerPersonaje(3, function(persona){
      console.log(`Hola, yo soy ${persona.name}`)
      obtenerPersonaje(4, function(persona){
        console.log(`Hola, yo soy ${persona.name}`)
        obtenerPersonaje(5, function(persona){
          console.log(`Hola, yo soy ${persona.name}`)
          obtenerPersonaje(6, function(persona){
            console.log(`Hola, yo soy ${persona.name}`)
          })
        })
      })
    })
  })
})
  

