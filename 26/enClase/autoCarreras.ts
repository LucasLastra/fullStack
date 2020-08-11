class Auto {
    private marca: string;
    private modelo: string;
    protected velocidadActual: number;
    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    public acelerar(): void {
        this.velocidadActual += 10;
    }
}

class AutoDeportivo extends Auto {
    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    public acelerar(): void {
        this.velocidadActual += 50;
    }
}

let primerAuto: Auto = new Auto('Ford', 'Fiesta');
let superAuto: Auto = new AutoDeportivo('Ford', 'Mustang');
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);