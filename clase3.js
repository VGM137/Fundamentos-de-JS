var precioDeVino = 200.3
var total = precioDeVino * 3
// Módulo de JavaSctript global para hacer operaciones
//si se quiere redondear los decimales de una cantidad conmuchos ceros se usar
var totalRedondeado = Math.round(precioDeVino * 100 * 3) / 100
//con el metodo toFixed puedes limitar los decimales
var totalStr = total.toFixed(2)
// Para cohercionar un string en un número parseFloat
var total2 = parseFloat(total)
