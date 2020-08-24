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
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    return AutoDeportivo;
}(Auto));
var primerAuto = new Auto('Ford', 'Fiesta');
var superAuto = new AutoDeportivo('Ford', 'Mustang');
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);
