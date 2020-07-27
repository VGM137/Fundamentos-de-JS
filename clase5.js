//Las funciones tienen cierto alcance, las variables, si se escriben en el cuerpo del codigo son de alcance global, pero si estan dentro de una funcion son solo de alcance

//a continuación un codigo cuya function no tienen ningun parametro está cambiando el el valor de la variable nombre a uno escrito en mayusculas, esta forma de la funcion hace que la variable nombre cambie su valor desde el orignal
var nombre = 'Victor'

function imprimirNombreEnMayusculas(){
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreEnMayusculas()

//Para no coambiar el valor original y ahcer una variable alterna que cambie de valor es mejor poner un parametro a la funcion, de tal forma que el alcance local no perjudique al global, cambiando el valor de una variable a traves de un parametro y dejando intacto el original (global)
var nombre = 'Victor'

function imprimirNombreEnMayusculas(n){
  n = n.toUpperCase()
  console.log(n)//n solo existe dentro de la funcion, fuera no está definida.
}
imprimirNombreEnMayusculas(nombre)

//Dentro del navegaro podremo acceder a cualquier variable atraves del objeto global que es window: 'window.nombre'
