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
var Telefono = /** @class */ (function () {
    function Telefono(valorInicial, bateriaInicial) {
        this.estaPrendido = true;
        this.bateriaActual = 100;
        if (valorInicial) {
            this.estaPrendido = valorInicial;
        }
        if (bateriaInicial) {
            this.bateriaActual = bateriaInicial;
        }
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log('mensaje!');
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log('llamada');
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this, true, 100) || this;
        _this.cantFotos = 0;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFotos = function (fotos) {
        console.log('fotos tomadas!');
        this.cantFotos += fotos;
    };
    TelefonoConCamara.prototype.verFotos = function () {
        console.log("Cantidad de fotos: " + this.cantFotos);
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this, true, 100) || this;
        _this.frecuenciaActual = 80;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        console.log("Frecuencia actual: " + this.frecuenciaActual);
    };
    TelefonoConRadio.prototype.subirFrecuencia = function () {
        this.frecuenciaActual++;
        console.log("Frecuencia actual++: " + this.frecuenciaActual);
    };
    TelefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual--;
        console.log("Frecuencia actual--: " + this.frecuenciaActual);
    };
    return TelefonoConRadio;
}(Telefono));
var ej = new TelefonoConCamara();
ej.sacarFotos(10);
ej.sacarFotos(10);
ej.verFotos();
ej.prenderApagar();
var ej2 = new TelefonoConRadio();
ej2.hacerLlamada();
ej2.prenderApagar();
ej2.verFrecuenciaActual();
ej2.subirFrecuencia();
ej2.subirFrecuencia();
console.log(ej);
console.log(ej2);
