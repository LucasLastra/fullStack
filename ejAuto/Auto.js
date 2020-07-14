"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var pregunta = ReadlineSync.question('hola');
var texto = fs.readFileSync('ejAuto/autos.txt', 'utf8');
var Auto = /** @class */ (function () {
    function Auto(marchaInicial, velocidadInicial, giroInicial) {
        this.marchaActual = marchaInicial;
        this.velocidadActual = velocidadInicial;
        this.giroActual = giroInicial;
        this.estaPrendido = false;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Auto.prototype.subirMarcha = function () {
        this.marchaActual = this.marchaActual + 1;
    };
    Auto.prototype.bajarMarcha = function () {
        this.marchaActual = this.marchaActual - 1;
    };
    Auto.prototype.velocidad = function (cambiarVelocidad) {
        this.velocidadActual = cambiarVelocidad;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual = this.velocidadActual - 10;
    };
    Auto.prototype.girarIzq = function () {
        this.giroActual = this.giroActual - 180;
    };
    Auto.prototype.girarDer = function () {
        this.giroActual = this.giroActual + 180;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(marca, modelo, velMax) {
        this.temp1 = texto.split('\r\n');
        this.autos = [];
    }
    RegistroAutomotor.prototype.buscar = function () {
        for (var i = 0; i < this.temp1.length; i++) {
            this.autos[i] = [];
            this.temp2 = [];
            this.temp2 = this.temp1[i].split(',');
            for (var j = 0; j < 3; j++) {
                this.autos[i][j] = this.temp2[j];
            }
        }
        console.log(this.autos);
        console.log(this.autos[0][2]);
    };
    RegistroAutomotor.prototype.agregar = function () {
    };
    return RegistroAutomotor;
}());
var marchaInicial = 1;
var velocidadInicial = 0;
var giroInicial = 180;
var auto1 = new Auto(marchaInicial, velocidadInicial, giroInicial);
console.log(auto1);
auto1.prenderApagar();
auto1.velocidad(180);
auto1.subirMarcha();
auto1.subirMarcha();
auto1.girarDer();
console.log(auto1);
for (var i = 0; i < 3; i++) {
    auto1.frenar();
    auto1.bajarMarcha();
}
auto1.velocidad(0);
auto1.prenderApagar();
console.log(auto1);
var registro1 = new RegistroAutomotor('honda', 2020, 200);
