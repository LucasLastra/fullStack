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
var Avion = /** @class */ (function () {
    function Avion() {
        this.chasis = new Chasis;
        this.asientos = new Asientos;
        this.motor = new Motor;
        this.estaPrendido = false;
        this.velMax = 700;
        this.chasis.peso = 80000;
        this.asientos.cantidad = 50;
        this.motor.peso = 10000;
    }
    Avion.prototype.girar = function () {
        console.log('girando!');
    };
    Avion.prototype.encenderApagar = function () {
        this.motor.encenderApagar();
    };
    Avion.prototype.acelerar = function () {
        this.motor.acelerar(30);
    };
    Avion.prototype.frenar = function () {
        this.motor.frenar(30);
    };
    return Avion;
}());
var Asientos = /** @class */ (function () {
    function Asientos() {
    }
    return Asientos;
}());
var Chasis = /** @class */ (function () {
    function Chasis() {
    }
    return Chasis;
}());
var Motor = /** @class */ (function () {
    function Motor() {
        this.velocidad = 0;
        this.estaPrendido = false;
    }
    Motor.prototype.encenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Motor.prototype.acelerar = function (kmh) {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += kmh;
    };
    Motor.prototype.frenar = function (kmh) {
        this.velocidad += -kmh;
    };
    return Motor;
}());
var AvionComercial = /** @class */ (function (_super) {
    __extends(AvionComercial, _super);
    function AvionComercial() {
        var _this = _super.call(this) || this;
        _this.asientos.cantidad = 150;
        _this.chasis.peso = 120000;
        _this.velMax = 900;
        _this.motor.peso = 20000;
        return _this;
    }
    AvionComercial.prototype.acelerar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.motor.acelerar(40);
    };
    AvionComercial.prototype.frenar = function () {
        this.motor.frenar(40);
    };
    return AvionComercial;
}(Avion));
var Jet = /** @class */ (function (_super) {
    __extends(Jet, _super);
    function Jet() {
        var _this = _super.call(this) || this;
        _this.asientos.cantidad = 2;
        _this.chasis.peso = 40000;
        _this.velMax = 1200;
        _this.motor.peso = 8000;
        return _this;
    }
    Jet.prototype.acelerar = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.motor.acelerar(100);
    };
    Jet.prototype.frenar = function () {
        this.motor.frenar(100);
    };
    return Jet;
}(Avion));
var avion1 = new Avion();
console.log(avion1);
var comercial = new AvionComercial();
comercial.acelerar();
console.log(comercial);
var jet = new Jet();
jet.acelerar();
console.log(jet);
