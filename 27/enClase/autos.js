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
var Auto = /** @class */ (function () {
    function Auto() {
        this.estaPrendido = false;
        this.velocidad = 0;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Auto;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 20;
    };
    AutoCiudad.prototype.frenar = function () {
        this.velocidad -= 20;
    };
    return AutoCiudad;
}(Auto));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 50;
    };
    AutoDeportivo.prototype.frenar = function () {
        this.velocidad -= 50;
    };
    return AutoDeportivo;
}(Auto));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 10;
    };
    Camioneta.prototype.frenar = function () {
        this.velocidad -= 10;
    };
    return Camioneta;
}(Auto));
var ej1 = new AutoCiudad();
ej1.acelerar();
console.log(ej1);
var ej2 = new AutoDeportivo();
ej2.acelerar();
console.log(ej2);
var ej3 = new Camioneta();
ej3.acelerar();
ej3.frenar();
console.log(ej3);
