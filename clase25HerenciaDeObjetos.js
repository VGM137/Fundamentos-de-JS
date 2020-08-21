// JavaScript no permite hacer herencias como tal, sino que crea prototipos(constructores) extenciones de otros prototipos a través de las clases. Antes de ECMA-Script 16 no se podía hacer esto, y se debia construir una funcion que heredara las características de un prototipo através de variables internas. Ahora (desde 2016) solo se utiliza la palabra reservada class para identificar un objetos prototipo que puede servir de base para una herencia en otro prtotipo.

class Persona {
  constructor(n, a, al, p){
    this.nombre = n
    this.apellido = a
    this.altura = al
    this.profesion = p
  }

  soyAlto(){
    if(this.altura > 1.8){
      return 'soy alto'
    } else {
      return 'no soy alto'
    }
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y ${this.altura > 1.8 ? 'soy alto':'no soy alto'}`)
/*     var esAlto = this.altura > 1.8 ? 'soy alto':'no soy alto' */
  }
}

var victor = new Persona('Victor', 'Garza', 1.75, 'Diseñador')
var omar = new Persona('Omar', 'Garcia', 1.81, 'Comunicador')
//Dentro de las clases se ingresan los metodos que queremos que funcionen

//Para heredar se escribe "extends" dando a entender que la clase heredada es una extencion de la nueva clase:
class Desarrollador extends Persona {
  constructor(n, a, al, p){
    super(n, a, al, p)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ${this.altura > 1.8 ? 'soy alto':'no soy alto'} y soy desarrollador`)
  }
}
var leonardo = new Desarrollador('Leonardo', 'Garza', 1.75, 'Desarrollador')
