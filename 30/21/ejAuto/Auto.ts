
import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

let texto: string = fs.readFileSync('29/21/ejAuto/autos.txt', 'utf8');
class Auto {
    private estaPrendido: boolean;
    private marchaActual: number;
    private velocidadActual: number;
    private giroActual: number;
    constructor(marchaInicial: number, velocidadInicial: number, giroInicial: number) {
        this.marchaActual = marchaInicial;
        this.velocidadActual = velocidadInicial;
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
    velocidad(cambiarVelocidad: number): void {
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
let temp1: string[] = texto.split('\n');
let autos: any = [];
let temp2: string[];
let otroRegistro: RegistroAutomotor;
let array = []
class RegistroAutomotor {
    private marca:string;
    private modelo: number;
    private velMax: number
    constructor(marca?: string, modelo?: number, velMax?: number) {
        if(marca)
        this.marca = marca;
        if(modelo)
        this.modelo = modelo;
        if(velMax)
        this.velMax = velMax;
    }
    private temp2: string[];


    agregar(): void {
        let marca: string = ReadlineSync.question('Que marca es el auto? ');
        let modelo: number = ReadlineSync.questionInt('Que modelo es el auto? ');
        let velMax: number = ReadlineSync.questionInt('Que velocidad max. tiene el auto? ');
        otroRegistro = new RegistroAutomotor(marca, modelo, velMax);
    }
    actualizar(): void {
        for (let i: number = 0; i < temp1.length; i++) {
            autos[i] = []
            this.temp2 = [];
            this.temp2 = temp1[i].split(',');
            for (let j: number = 0; j < 3; j++) {
                autos[i][j] = this.temp2[j];
            }
        }
    }
}

let marchaInicial: number = 1;
let velocidadInicial: number = 0;
let giroInicial: number = 180;
let auto1 = new Auto(marchaInicial, velocidadInicial, giroInicial);

function start(): void {
    for (let i: number = 0; i < temp1.length; i++) {
        autos[i] = []
        temp2 = [];
        temp2 = temp1[i].split(',');
        for (let j: number = 0; j < 3; j++) {
            autos[i][j] = temp2[j];
        }
        otroRegistro = new RegistroAutomotor(autos[i][0],autos[i][1],autos[i][2]);
        array.push(otroRegistro)
    }
    console.log(autos);
    console.log(autos[0][2]);
    console.log(array);
}
start();
let registro1 = new RegistroAutomotor('honda', 2020, 230);

console.log(registro1)

