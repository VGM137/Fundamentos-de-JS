var persona = {
  nombre: 'Victor',
  edad: 24,
  peso: 75,
  altura: 175
};
console.log(`Peso inicial ${persona.peso}kg`)
var comidas = [];
function comida(nombre, peso){
  this.nombre = nombre;
  this.peso = peso;
};
var pan = new comida('Pan', 0.2);
var carne = new comida('Carne', 0.5)
comidas.push(pan)
comidas.push(carne)

var ejercicios = []
function ejercicio(nombre, cantidad, disminucion){
  this.nombre = nombre;
  this.cantidad = cantidad;
  this.disminucion = disminucion;
};
var burpees = new ejercicio('burpees', 50, 0.02)
var lagartijas = new ejercicio('burpees', 30, 0.01)
ejercicios.push(burpees)
ejercicios.push(lagartijas)

var comerAlgo = comidas.map(function (comidas){
  return comidas.peso
})

var repeticiones = ejercicios.map(function (ejercicio){
  return ejercicio.cantidad;
})
var calorias = ejercicios.map(function (ejercicio){
  return ejercicio.disminucion;
})
var ejercicio0 = repeticiones[0] * calorias[0]
var ejercicio1 = repeticiones[1] * calorias[1]
var totalEjercicio = ejercicio0 + ejercicio1

// function comer(comida) {
//   return persona.peso = persona.peso + comerAlgo[0]
//    // var nuevoPeso = persona.peso + comerAlgo[0]
//    // console.log(nuevoPeso)
//  }
//  comer(comida)
// function hacer(ejercicio){
//   return persona.peso = persona.peso - totalEjercicio;
// }
//  hacer(ejercicio)

  persona.peso = persona.peso + comerAlgo[0] + comerAlgo[1] - totalEjercicio
  console.log(`${persona.nombre} ahora pesa ${persona.peso}`)
