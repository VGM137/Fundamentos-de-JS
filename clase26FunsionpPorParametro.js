
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

/*Las funsiones pueden ser llamadas por parámetro, cuando se crea la funsión es necesario que lleve algo dentro de los parentesis que después se va a determinar si es true o false para saber si la funsión se va a activar o no. Esto quiere decir que se termina através de un valor buleano,   */
  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y ${this.altura > 1.8 ? 'soy alto':'no soy alto'}`)
    if(fn){
      fn(this.nombre, this.apellido, false)
    }
  }
}

//Dentro de las clases se ingresan los metodos que queremos que funcionen

//Para heredar se escribe "extends" dando a entender que la clase heredada es una extencion de la nueva clase:
class Desarrollador extends Persona {
  constructor(n, a, al, p){
    super(n, a, al, p)
  }
  saludar(fn){
    var { nombre, apellido, altura } = this /* De esta forma podemis abreviar el codigo para indicar que nombre, apellido y altura se sacan de this. */
    console.log(`Hola, me llamo ${nombre} ${apellido}, ${altura > 1.8 ? 'soy alto':'no soy alto'} y soy desarrollador`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mira, no sabía que eres desarrollador`)
  }
}

var victor = new Persona('Victor', 'Garza', 1.75, 'Diseñador')
var omar = new Persona('Omar', 'Garcia', 1.81, 'Comunicador')
var leonardo = new Desarrollador('Leonardo', 'Garza', 1.75, 'Desarrollador')

victor.saludar() /*  Esta funsión indica que la persona va a saludar y no hay ninguna funsión dentro de sus parametros, por lo que no se le va a responder el saludo */
omar.saludar(responderSaludo) /* Aquí se indica que al llamarse el saludo tambien se activa la respuesta. */
leonardo.saludar(responderSaludo)