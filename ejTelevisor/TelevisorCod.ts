import { runInThisContext } from "vm";

class TeleCod {
    private estaPrendido: boolean;

    private decodificador: Decodificador;

    constructor(decodificador: Decodificador) {
        this.estaPrendido = false;
        this.decodificador = decodificador;
    }
    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false
            this.decodificador.prenderApagar(false);
        } else {
            this.estaPrendido = true
            this.decodificador.prenderApagar(true);
        }
    }
    public subirVolumen(): void {
        this.decodificador.subirVolumen();
    }
    public bajarVolumen(): void {
        this.decodificador.bajarVolumen();
    }
    public subirCanal(): void {
        this.decodificador.subirCanal();
    }
    public bajarCanal(): void {
        this.decodificador.bajarCanal();
    }
    public elegirCanal(canal): void {
        this.decodificador.elegirCanal(canal);
    }
}
class Decodificador {
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;
    constructor(volumenInicial: number, canalInicial: number) {
        this.canalActual = canalInicial;
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    public prenderApagar(switcher): void {
        this.estaPrendido = switcher;
    }
    public subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1
    }
    public bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1
    }
    public subirCanal(): void {
        this.canalActual = this.canalActual + 1
    }
    public bajarCanal(): void {
        this.canalActual = this.canalActual - 1
    }
    public elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
}
let volumenInicial: number = 10;
let canalInicial: number = 24;
let decodificador: Decodificador = new Decodificador(volumenInicial, canalInicial);
let miTelevisor = new TeleCod(decodificador);

console.log(miTelevisor);

miTelevisor.prenderApagar();
miTelevisor.bajarVolumen();
miTelevisor.elegirCanal(80);

console.log(miTelevisor);