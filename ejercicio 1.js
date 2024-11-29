// Ejercicio 1: Crea una clase Animal con las propiedades nombre y edad, y un método hacerSonido()
// que imprima &quot;El animal hace un sonido.&quot;. Luego, crea una clase Perro que herede de Animal y
// sobrescriba el método hacerSonido() para imprimir &quot;El perro ladra: ¡Guau!&quot;.

// Ejercicio 2: Amplía el ejercicio anterior. En la clase Perro, añade una propiedad adicional raza.
// Utiliza super en el constructor de Perro para inicializar las propiedades heredadas de Animal.

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido(){
        console.log("El animal hace un sonido")
    }
}

class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }



    hacerSonido(){
        console.log("El perro ladra: ¡Guau!")
    }
}


const animal = new Animal("generico", 5);
animal.hacerSonido();

const perro = new Perro("firulais", 3);
perro.hacerSonido();

console.log(perro.nombre);
console.log(perro.edad);
console.log(perro.raza);