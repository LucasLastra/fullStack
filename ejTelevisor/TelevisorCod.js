"use strict";
exports.__esModule = true;
var TeleCod = /** @class */ (function () {
    function TeleCod(decodificador) {
        this.estaPrendido = false;
        this.decodificador = decodificador;
    }
    TeleCod.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            this.decodificador.prenderApagar(false);
        }
        else {
            this.estaPrendido = true;
            this.decodificador.prenderApagar(true);
        }
    };
    TeleCod.prototype.subirVolumen = function () {
        this.decodificador.subirVolumen();
    };
    TeleCod.prototype.bajarVolumen = function () {
        this.decodificador.bajarVolumen();
    };
    TeleCod.prototype.subirCanal = function () {
        this.decodificador.subirCanal();
    };
    TeleCod.prototype.bajarCanal = function () {
        this.decodificador.bajarCanal();
    };
    TeleCod.prototype.elegirCanal = function (canal) {
        this.decodificador.elegirCanal(canal);
    };
    return TeleCod;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(volumenInicial, canalInicial) {
        this.canalActual = canalInicial;
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    Decodificador.prototype.prenderApagar = function (switcher) {
        this.estaPrendido = switcher;
    };
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return Decodificador;
}());
var volumenInicial = 10;
var canalInicial = 24;
var decodificador = new Decodificador(volumenInicial, canalInicial);
var miTelevisor = new TeleCod(decodificador);
console.log(miTelevisor);
miTelevisor.prenderApagar();
miTelevisor.bajarVolumen();
miTelevisor.elegirCanal(80);
console.log(miTelevisor);
