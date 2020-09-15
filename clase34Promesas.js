const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Método $.get nos va a permitir hacer un request y acepta varios parámetros: la url que llama al personaje segun su id, el objeto crossDomain y una función que requiera a la data que está en el Argument resultado del request realizado a la URL. Se pueden declarar dentro del método o llamarlas por su constante.
const options = { crossDomain: true }

//Todos los strings tienen el método .replace para remplazarlo por otro     
//Los métodos de jquery se pueden encadenar. Elmétodo .fail sirve para detectar errores durante la carga y se debe disparar una funcion que lo indique.
//Las promesas sirven para identificar si se realiza alguna funcion o si falla en el proceso. Una promesa puede resolverse(resolve) o rechazarce (reject). En el primer caso tenemos como resultado lo que queremos que haga la función por medio del método .catch; mientras que en el segundo caso obtenemos el resultado de una función que se dispare al identificar un erro mediante el método .catch
function obtenerPersonaje(id){
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
     .get(url, options, (data)=>{resolve(data)
      })
     .fail(() => reject(id))  
    })
}

function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(function(id){
  return obtenerPersonaje(id)
})

Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)