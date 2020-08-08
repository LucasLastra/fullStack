import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';
let registroAutos = [];
let registroMotos = [];
let registroCamiones = [];
let registrosAutos: RegistroAutomotor;
let registrosCamiones: RegistroCamiones;
let registrosMotos: RegistroMotos;
class RegistroAutomotor {
    protected marca: string;
    protected modelo: string;
    protected velMax: string;
    protected ruedas: Ruedas = new Ruedas;
    protected motor: Motor = new Motor;
    constructor(marcaIni?: string, modeloIni?: string, velMaxIni?: string, motorIni?: string, ruedasIni?: string) {
        if (!marcaIni) {
            this.marca = ReadlineSync.question('Que marca es el veiculo? ');
        } else {
            this.marca = marcaIni;
        }
        if (!modeloIni) {
            this.modelo = ReadlineSync.question('Que modelo es el veiculo? ');
        } else {
            this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            this.velMax = ReadlineSync.question('Que velocidad max. tiene el veiculo? ');
        } else {
            this.velMax = velMaxIni;
        }
        if (!motorIni) {
            this.motor.tipoMotor = ReadlineSync.question('Que tipo de motor tiene el veiculo? ');
        } else {
            this.motor.tipoMotor = motorIni;
        }
        if (!ruedasIni) {
            this.ruedas.numRuedas = ReadlineSync.question('Cuantas ruedas tiene el veiculo? ');
        } else {
            this.ruedas.numRuedas = ruedasIni;
        }
    }

    public buscar() {
        let busqueda = ReadlineSync.question('Que marca es el auto? ');
        for (let i: number = 0; i < registroAutos.length; i++) {
            if (busqueda == registroAutos[i][0]) {
                console.log(registroAutos[i]);
            }
        }

    }
    public agregar(marcaIni?: string, modeloIni?: string, velMaxIni?: string) {
        if (!marcaIni) {
            this.marca = ReadlineSync.question('Que marca es el auto? ');
        } else {
            this.marca = marcaIni;
        }
        if (!modeloIni) {
            this.modelo = ReadlineSync.question('Que modelo es el auto? ');
        } else {
            this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            this.velMax = ReadlineSync.question('Que velocidad max. tiene el auto? ');
        } else {
            this.velMax = velMaxIni;
        }
        registroAutos[registroAutos.length] = [this.marca, this.modelo, this.velMax];
        console.log(registroAutos);
    }
    public actualizar(): void {

    }
}

class RegistroMotos extends RegistroAutomotor {
    constructor(marcaIni?: string, modeloIni?: string, velMaxIni?: string, motorIni?: string, ruedasIni?: string) {
        super();
        this.ruedas.numRuedas = '2';
        this.motor.tipoMotor = 'nafta';
        if (!marcaIni) {
            this.marca = ReadlineSync.question('Que marca es el veiculo? ');
        } else {
            this.marca = marcaIni;
        }
        if (!modeloIni) {
            this.modelo = ReadlineSync.question('Que modelo es el veiculo? ');
        } else {
            this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            this.velMax = ReadlineSync.question('Que velocidad max. tiene el veiculo? ');
        } else {
            this.velMax = velMaxIni;
        }
    }
}
class RegistroCamiones extends RegistroAutomotor {
    constructor(marcaIni?: string, modeloIni?: string, velMaxIni?: string, motorIni?: string, ruedasIni?: string) {
        super();
        this.ruedas.numRuedas = '4';
        this.motor.tipoMotor = 'diesel';
    }
}
class Ruedas {
    public numRuedas: string;
    constructor() {
    }
}
class Motor {
    public tipoMotor: string;
    constructor() {
    }
}
let ej:RegistroCamiones = new RegistroCamiones('asd','asd','asd','asd','asd');

console.log(ej);

function cargar() {
    let autos: string = fs.readFileSync('24/autos.txt', 'utf8');
    let motos: string = fs.readFileSync('24/motos.txt', 'utf8');
    let camiones: string = fs.readFileSync('24/camiones.txt', 'utf8');

    function loadData() {
        let temp1: string[] = autos.split('\r\n');
        
        let temp2: string[];

        for (let i: number = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosAutos = new RegistroAutomotor(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroAutos[i] = registrosAutos;
        }
        temp1 = motos.split('\r\n');
        for (let i: number = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosMotos = new RegistroMotos(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroMotos[i] = registrosMotos;
        }
        temp1 = camiones.split('\r\n');
        for (let i: number = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosCamiones = new RegistroCamiones(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroCamiones[i] = registrosCamiones;
        }
    }
    loadData();
}
cargar();

console.log(registroAutos);
console.log(registroMotos);
console.log(registroCamiones);

