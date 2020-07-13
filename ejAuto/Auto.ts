import * as fs from 'fs';
let texto:string = fs.readFileSync('ejAuto/autos.txt', 'utf8');
class Auto {
    private estaPrendido: boolean;
    private marchaActual: number;
    private velocidadActual: number;
    private giroActual:number;
    constructor(marchaInicial: number, velocidadInicial:number, giroInicial:number) {
        this.marchaActual = marchaInicial;
        this.velocidadActual =velocidadInicial;
        this.giroActual = giroInicial;
        this.estaPrendido = false;
    }
    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirMarcha(): void {
        this.marchaActual = this.marchaActual + 1
    }
    bajarMarcha(): void {
        this.marchaActual = this.marchaActual - 1
    }
    velocidad(cambiarVelocidad:number): void {
        this.velocidadActual = cambiarVelocidad
    }
    frenar(): void {
        this.velocidadActual = this.velocidadActual - 10
    }
    girarIzq(): void {
        this.giroActual = this.giroActual - 180;
    }
    girarDer(): void {
        this.giroActual = this.giroActual + 180;
    }
}
class RegistroAutomotor{
    constructor() {

    }
    private temp1:string [] = texto.split('\r\n');
    private temp2:string[];
    private autos:any  = [];
    buscar(): void {
        for(let i:number = 0; i<this.temp1.length;i++){
            this.autos[i]=[]
            this.temp2 = [];
            this.temp2 = this.temp1[i].split(',');
            for(let j:number = 0; j<3;j++){
                this.autos[i][j] = this.temp2[j];
            }
        }
        console.log(this.autos);
        console.log(this.autos[0][2]); 
    }



}

let marchaInicial: number = 1;
let velocidadInicial:number = 0;
let giroInicial:number = 180;
let auto1 = new Auto(marchaInicial, velocidadInicial, giroInicial);

console.log(auto1);

auto1.prenderApagar();
auto1.velocidad(180);
auto1.subirMarcha();
auto1.subirMarcha();
auto1.girarDer();
console.log(auto1);
for(let i:number = 0;i< 3; i++){
    auto1.frenar()
    auto1.bajarMarcha()
}


auto1.velocidad(0);
auto1.prenderApagar();

console.log(auto1);
