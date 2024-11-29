// Ejercicio 4:
// Crea una clase Empleado con las propiedades nombre y salario, y un método obtenerDetalles()
// que retorne una cadena con la información del empleado. Luego, crea una clase Gerente que
// herede de Empleado y añada la propiedad departamento. En el constructor de Gerente, utiliza
// super para inicializar nombre y salario, y asigna departamento. Sobrescribe el método
// obtenerDetalles() para incluir el departamento en la información mostrada.

class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}

const empleado = new Empleado("Jorge", 300);
console.log(empleado.obtenerDetalles());

const gerente = new Gerente("María", 500, "Recursos Humanos");
console.log(gerente.obtenerDetalles());
