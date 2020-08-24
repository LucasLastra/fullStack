class Monitor {
    private estaPrendido: boolean;
    private resolucionActual: number;
    private brilloActual: number;
    private contrasteActual:number;
    private nitidezActual:number;

    constructor(resolucionInicial: number, brilloInicial:number, contrasteInicial:number, nitidezInicial:number) {
        this.resolucionActual = resolucionInicial;
        this.brilloActual =brilloInicial;
        this.contrasteActual = contrasteInicial;
        this.nitidezActual = nitidezInicial;
        this.estaPrendido = false;
    }
    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirBrillo(): void {
        this.brilloActual = this.brilloActual + 1
    }
    bajarBrillo(): void {
        this.brilloActual = this.brilloActual - 1
    }
    cambiarResolucion(cambiarResolucion:number): void {
        this.resolucionActual = cambiarResolucion;
    }
    cambiarContraste(nuevoContraste:number): void {
        this.contrasteActual = nuevoContraste;
    }
    cambiarNitidez(nuevaNitidez:number): void {
        this.nitidezActual = nuevaNitidez;
    }
}

let resolucionInicial: number = 800;
let brilloInicial:number = 50;
let contrasteInicial:number = 50;
let nitidezInicial:number = 50;
let monitor1 = new Monitor(resolucionInicial, brilloInicial, contrasteInicial, nitidezInicial);

console.log(monitor1);

monitor1.prenderApagar();
monitor1.cambiarResolucion(1080);
monitor1.cambiarContraste(67);
for(let i:number = 0;i< 30; i++){
    monitor1.subirBrillo();
}
monitor1.cambiarNitidez(0);

console.log(monitor1);
