function Persona(n, a, al){
  this.nombre = n
  this.apellido = a
  this.altura = al
}

// Persona.prototype.saludar = function(){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto = function(altura){
//   if(altura > 1.8){
//     console.log('Soy alto')
//   }else{
//     console.log('No soy alto')
//   }
// }
const soyAlto = (personas, {altura}) => personas.altura > 1.8 ? 'soy alto':
'no soy alto'

var victor = new Persona('Victor', 'Garza', 1.75)
var omar = new Persona('Omar', 'García', 1.85)

var personas = [victor, omar]
var esAlto = personas.map(soyAlto)
for(var i = 0; i < personas.length; i++){
  persona = personas[i]
  altura = esAlto[i]
  console.log(`Mi nombre es ${persona.nombre} ${persona.apellido} y ${altura}`)
}

//ingresar victor.saludar() en la consola para ver el saludo, así por cada objeto que exista.
