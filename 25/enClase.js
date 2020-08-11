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
var Telefono2 = /** @class */ (function () {
    function Telefono2(valorInicial, bateriaInicial) {
        this.estaPrendido = true;
        this.bateriaActual = 100;
        if (valorInicial) {
            this.estaPrendido = valorInicial;
        }
        if (bateriaInicial) {
            this.bateriaActual = bateriaInicial;
        }
    }
    Telefono2.prototype.mandarMensaje = function () {
        console.log('mensaje!');
    };
    Telefono2.prototype.hacerLlamada = function () {
        console.log('llamada');
    };
    Telefono2.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono2;
}());
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFoto = function () {
        return console.log('fotos tomadas!');
    };
    return Camara;
}());
var TelefonoConCamara2 = /** @class */ (function (_super) {
    __extends(TelefonoConCamara2, _super);
    function TelefonoConCamara2() {
        var _this = _super.call(this, true, 100) || this;
        _this.camara = new Camara;
        return _this;
    }
    TelefonoConCamara2.prototype.sacarFotos = function () {
        this.camara.sacarFoto();
    };
    return TelefonoConCamara2;
}(Telefono2));
var TelefonoConRadio2 = /** @class */ (function (_super) {
    __extends(TelefonoConRadio2, _super);
    function TelefonoConRadio2() {
        var _this = _super.call(this, true, 100) || this;
        _this.frecuenciaActual = 80;
        return _this;
    }
    TelefonoConRadio2.prototype.verFrecuenciaActual = function () {
        console.log("Frecuencia actual: " + this.frecuenciaActual);
    };
    TelefonoConRadio2.prototype.subirFrecuencia = function () {
        this.frecuenciaActual++;
        console.log("Frecuencia actual++: " + this.frecuenciaActual);
    };
    TelefonoConRadio2.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual--;
        console.log("Frecuencia actual--: " + this.frecuenciaActual);
    };
    return TelefonoConRadio2;
}(Telefono2));
var nuevo = new TelefonoConCamara2();
nuevo.sacarFotos();
