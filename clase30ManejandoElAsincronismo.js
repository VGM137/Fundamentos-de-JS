const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Método $.get nos va a permitir hacer un request y acepta varios parámetros: la url que llama al personaje segun su id, el objeto crossDomain y una función que requiera a la data que está en el Argument resultado del request realizado a la URL. Se pueden declarar dentro del método o llamarlas por su constante.
const options = { crossDomain: true }

//Todos los strings tienen el método .replace para remplazarlo por otro     
function obtenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, options, function(persona){
    console.log(`Hola, yo soy ${persona.name}`)

    if(callback){
        callback()
      }
  })  
}

obtenerPersonaje(1, function(){
 obtenerPersonaje(2, function(){
   obtenerPersonaje(3)
 })
})
  

