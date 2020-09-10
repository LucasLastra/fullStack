interface AutoInterfaz {
    acelerar(): void;
    getVelocidadActual(): number;
}

class AutoCarreras implements AutoInterfaz{
    private velocidadActual: number;
    constructor(){
        this.velocidadActual = 0;
    }
    acelerar(){
        this.velocidadActual += 50;
    }
    getVelocidadActual(){
        return this.velocidadActual;
    }
}

let auto1:AutoCarreras = new AutoCarreras();

auto1.acelerar();
auto1.getVelocidadActual();
console.log(auto1);