var nombre = 'Victor', apellido = 'Garza'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primerLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// Para actualizar un valor en la consola en funcion de un método aplicado, una vez dado el nuevo valor en la consola, se declara que la variable es igaul al nuevo valor del método de la misma mandera que se hizo anteriormente
//nombre = 'Leonardo'
//cantidadDeLetrasDelNombre = nombre.length

//Se puede concatenar variables de esta manera
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// para extraer caracteres específicos de una palabra podemos usar el método substr
var str = nombre.substr(1, 2)
var ultimaLetraDelNombre = nombre.charAt(nombre.length-1)

console.log(ultimaLetraDelNombre)
