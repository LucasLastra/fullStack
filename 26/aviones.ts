class Avion {
    protected estaPrendido: boolean;
    protected velMax: number
    protected chasis: Chasis = new Chasis;
    protected asientos: Asientos = new Asientos;
    protected motor: Motor = new Motor;
    constructor() {
        this.estaPrendido = false;
        this.velMax = 700;
        this.chasis.peso = 80000;
        this.asientos.cantidad = 50;
        this.motor.peso = 10000;
    }
    public girar() {
        console.log('girando!');
    }
    public encenderApagar() {
        this.motor.encenderApagar();
    }
    public acelerar() {
        this.motor.acelerar(30);
    }
    public frenar() {
        this.motor.frenar(30);
    }
}
class Asientos {
    public cantidad: number;
    constructor() {
    }
}
class Chasis {
    public peso: number
    constructor() {
    }
}
class Motor {
    private estaPrendido: boolean;
    public peso: number;
    private velocidad: number;
    constructor() {
        this.velocidad = 0;
        this.estaPrendido = false
    }
    public encenderApagar() {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
    public acelerar(kmh) {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += kmh;
    }
    public frenar(kmh) {
        this.velocidad += -kmh;
    }
}
class AvionComercial extends Avion {
    constructor() {
        super()
        this.asientos.cantidad = 150;
        this.chasis.peso = 120000;
        this.velMax = 900;
        this.motor.peso = 20000;
    }
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.motor.acelerar(40);
    }
    public frenar(){
        this.motor.frenar(40)
    }
}
class Jet extends Avion {
    constructor() {
        super()
        this.asientos.cantidad = 2;
        this.chasis.peso = 40000;
        this.velMax = 1200;
        this.motor.peso = 8000;
    }
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.motor.acelerar(100);
    }
    public frenar(){
        this.motor.frenar(100)
    }
}
let avion1: Avion = new Avion();
console.log(avion1);
let comercial: AvionComercial = new AvionComercial();
comercial.acelerar();
console.log(comercial);
let jet: Jet = new Jet();
jet.acelerar();
console.log(jet);