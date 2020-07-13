"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('ejAuto/autos.txt', 'utf8');
var temp1 = texto.split('\r\n');
var temp2;
var autos = [];
for (var i = 0; i < temp1.length; i++) {
    autos[i] = [];
    temp2 = [];
    temp2 = temp1[i].split(',');
    for (var j = 0; j < 3; j++) {
        autos[i][j] = temp2[j];
    }
}
console.log(autos);
console.log(autos[0][2]);
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
    function RegistroAutomotor() {
    }
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
