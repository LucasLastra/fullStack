"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var registroAutos = [];
var registroMotos = [];
var registroCamiones = [];
var registrosAutos;
var registrosCamiones;
var registrosMotos;
var RegistroAutos = /** @class */ (function () {
    function RegistroAutos(marcaIni, modeloIni, velMaxIni, motorIni, ruedasIni) {
        this.ruedas = new Ruedas;
        this.motor = new Motor;
        if (!marcaIni) {
            this.marca = ReadlineSync.question('Que marca es el veiculo? ');
        }
        else {
            this.marca = marcaIni;
        }
        if (!modeloIni) {
            this.modelo = ReadlineSync.question('Que modelo es el veiculo? ');
        }
        else {
            this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            this.velMax = ReadlineSync.question('Que velocidad max. tiene el veiculo? ');
        }
        else {
            this.velMax = velMaxIni;
        }
        if (!motorIni) {
            this.motor.tipoMotor = ReadlineSync.question('Que tipo de motor tiene el veiculo? ');
        }
        else {
            this.motor.tipoMotor = motorIni;
        }
        if (!ruedasIni) {
            this.ruedas.numRuedas = ReadlineSync.question('Cuantas ruedas tiene el veiculo? ');
        }
        else {
            this.ruedas.numRuedas = ruedasIni;
        }
    }
    RegistroAutos.prototype.buscar = function () {
        var busqueda = ReadlineSync.question('Que marca es el auto? ');
        for (var i = 0; i < registroAutos.length; i++) {
            if (busqueda == registroAutos[i][0]) {
                console.log(registroAutos[i]);
            }
        }
    };
    RegistroAutos.prototype.agregar = function (marcaIni, modeloIni, velMaxIni) {
        if (!marcaIni) {
            this.marca = ReadlineSync.question('Que marca es el auto? ');
        }
        else {
            this.marca = marcaIni;
        }
        if (!modeloIni) {
            this.modelo = ReadlineSync.question('Que modelo es el auto? ');
        }
        else {
            this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            this.velMax = ReadlineSync.question('Que velocidad max. tiene el auto? ');
        }
        else {
            this.velMax = velMaxIni;
        }
        registroAutos[registroAutos.length] = [this.marca, this.modelo, this.velMax];
        console.log(registroAutos);
    };
    RegistroAutos.prototype.eliminar = function () {
    };
    return RegistroAutos;
}());
var RegistroMotos = /** @class */ (function (_super) {
    __extends(RegistroMotos, _super);
    function RegistroMotos(marcaIni, modeloIni, velMaxIni, motorIni, ruedasIni) {
        var _this = _super.call(this) || this;
        _this.ruedas.numRuedas = '2';
        _this.motor.tipoMotor = 'nafta';
        if (!marcaIni) {
            _this.marca = ReadlineSync.question('Que marca es el veiculo? ');
        }
        else {
            _this.marca = marcaIni;
        }
        if (!modeloIni) {
            _this.modelo = ReadlineSync.question('Que modelo es el veiculo? ');
        }
        else {
            _this.modelo = modeloIni;
        }
        if (!velMaxIni) {
            _this.velMax = ReadlineSync.question('Que velocidad max. tiene el veiculo? ');
        }
        else {
            _this.velMax = velMaxIni;
        }
        return _this;
    }
    return RegistroMotos;
}(RegistroAutos));
var RegistroCamiones = /** @class */ (function (_super) {
    __extends(RegistroCamiones, _super);
    function RegistroCamiones() {
        var _this = _super.call(this) || this;
        _this.ruedas.numRuedas = '4';
        _this.motor.tipoMotor = 'diesel';
        return _this;
    }
    return RegistroCamiones;
}(RegistroAutos));
var Ruedas = /** @class */ (function () {
    function Ruedas() {
    }
    return Ruedas;
}());
var Motor = /** @class */ (function () {
    function Motor() {
    }
    return Motor;
}());
var asd = new RegistroAutos('asd', 'asd', 'asd', 'asd', 'asd');
console.log(asd);
var ej = new RegistroCamiones('camion', 'camion', 'camion', 'camion');
console.log(ej);
function cargar() {
    var autos = fs.readFileSync('24/autos.txt', 'utf8');
    var motos = fs.readFileSync('24/motos.txt', 'utf8');
    var camiones = fs.readFileSync('24/camiones.txt', 'utf8');
    function loadData() {
        var temp1 = autos.split('\r\n');
        var temp2;
        for (var i = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosAutos = new RegistroAutos(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroAutos[i] = registrosAutos;
        }
        temp1 = motos.split('\r\n');
        for (var i = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosMotos = new RegistroMotos(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroMotos[i] = registrosMotos;
        }
        temp1 = camiones.split('\r\n');
        for (var i = 0; i < temp1.length; i++) {
            temp2 = temp1[i].split(',');
            registrosCamiones = new RegistroCamiones(temp2[0], temp2[1], temp2[2], temp2[3], temp2[4]);
            registroCamiones[i] = registrosCamiones;
        }
    }
    loadData();
}
console.log(registroAutos);
console.log(registroMotos);
console.log(registroCamiones);
