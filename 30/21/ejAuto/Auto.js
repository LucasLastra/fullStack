"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var texto = fs.readFileSync('29/21/ejAuto/autos.txt', 'utf8');
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
var temp1 = texto.split('\n');
var autos = [];
var temp2;
var otroRegistro;
var array = [];
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(marca, modelo, velMax) {
        if (marca)
            this.marca = marca;
        if (modelo)
            this.modelo = modelo;
        if (velMax)
            this.velMax = velMax;
    }
    RegistroAutomotor.prototype.agregar = function () {
        var marca = ReadlineSync.question('Que marca es el auto? ');
        var modelo = ReadlineSync.questionInt('Que modelo es el auto? ');
        var velMax = ReadlineSync.questionInt('Que velocidad max. tiene el auto? ');
        var nuevoRegistro = new RegistroAutomotor(marca, modelo, velMax);
    };
    RegistroAutomotor.prototype.actualizar = function () {
        for (var i = 0; i < temp1.length; i++) {
            autos[i] = [];
            this.temp2 = [];
            this.temp2 = temp1[i].split(',');
            for (var j = 0; j < 3; j++) {
                autos[i][j] = this.temp2[j];
            }
        }
    };
    return RegistroAutomotor;
}());
var marchaInicial = 1;
var velocidadInicial = 0;
var giroInicial = 180;
var auto1 = new Auto(marchaInicial, velocidadInicial, giroInicial);
function start() {
    for (var i = 0; i < temp1.length; i++) {
        autos[i] = [];
        temp2 = [];
        temp2 = temp1[i].split(',');
        for (var j = 0; j < 3; j++) {
            autos[i][j] = temp2[j];
        }
        otroRegistro = new RegistroAutomotor(autos[i][0], autos[i][1], autos[i][2]);
        array.push(otroRegistro);
    }
    console.log(autos);
    console.log(autos[0][2]);
    console.log(array);
}
start();
var registro1 = new RegistroAutomotor('honda', 2020, 230);
console.log(registro1);
