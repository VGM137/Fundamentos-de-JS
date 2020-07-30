// JavaScript no permite hacer herencias como tal, sino que crea prototipos(constructores) extenciones de otros prototipos a través de las clases. Antes de ECMA-Script 16 no se podía hacer esto, y se debia construir una funcion que heredara las características de un prototipo através de variables internas. Ahora (desde 2016) solo se utiliza la palabra reservada class para identificar un objetos prototipo que puede servir de base para una herencia en otro prtotipo.

class Persona {
  constructor(n, a, al){
    this.nombre = n
    this.apellido = a
    this.altura = al
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
    return this.altura > 1.8
  }
}

//Dentro de las clases se ingresan los metodos que queremos que funcionen

//Para heredar se escribe "extends" dando a entender que la clase heredada es una extencion de la nueva clase:
class Desarrollador extends Persona {
  constructor(n, a, al){
    super(n, a, al)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}
