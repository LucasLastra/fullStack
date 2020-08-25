abstract class Auto {
    velocidad: number;
    estaPrendido: boolean;
    public constructor() {
        this.estaPrendido = false;
        this.velocidad = 0;
    }
    abstract acelerar(): void;
    abstract frenar();
    private prenderApagar() {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
}
class AutoCiudad extends Auto {
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 20;
    }
    public frenar() {
        this.velocidad -= 20;
    }
}
class AutoDeportivo extends Auto {
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 50;
    }
    public frenar() {
        this.velocidad -= 50;
    }
}
class Camioneta extends Auto {
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 10;
    }
    public frenar() {
        this.velocidad -= 10;
    }
}

let ej1: AutoCiudad = new AutoCiudad();
ej1.acelerar();
console.log(ej1);
let ej2: AutoDeportivo = new AutoDeportivo();
ej2.acelerar();
console.log(ej2);
let ej3: Camioneta = new Camioneta();
ej3.acelerar();
ej3.frenar();
console.log(ej3);