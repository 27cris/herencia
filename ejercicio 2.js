// Ejercicio 3: crea una función constructora Vehiculo con la propiedad marca y un método arrancar()
// que imprima &quot;El vehículo ha arrancado.&quot;. Luego, crea una función constructora Coche que herede
// de Vehiculo y añada la propiedad modelo. Añade un método mostrarInfo() que imprima la marca y
// el modelo del coche.

function Vehiculo(marca){
    this.marca = marca;
}

Vehiculo.prototype.arrancar = function(){
    console.log("el vehiculo ha arrancado")
};

function Coche(marca, modelo){
    Vehiculo.call(this, marca);
    this.modelo = modelo;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructora = Coche;

Coche.prototype.mostrarInfo = function(){
    console.log("Marca: " + this.marca + ", modelo: " + this.modelo);
};

const miVehiculo = new Vehiculo("toyota");
miVehiculo.arrancar();

const miCoche = new Coche("honda", "civic");
miCoche.arrancar();
miCoche.mostrarInfo();