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
var Mouse = /** @class */ (function () {
    function Mouse() {
        this.laser = new Laser;
        this.estaConectado = false;
    }
    Mouse.prototype.encenderApagar = function () {
        if (this.estaConectado == true) {
            this.estaConectado = false;
        }
        else {
            this.estaConectado = true;
        }
        console.log(this.estaConectado);
    };
    Mouse.prototype.hacerClick = function () {
        this.hizoClick = true;
        console.log('Click!');
    };
    Mouse.prototype.moverse = function () {
        this.seMovio = true;
        this.laser.moverse();
    };
    return Mouse;
}());
var Laser = /** @class */ (function () {
    function Laser() {
    }
    Laser.prototype.moverse = function () {
        this.estaDetectando = true;
        console.log('Utilizando laser para mover mouse.');
    };
    return Laser;
}());
var MouseDeBolita = /** @class */ (function (_super) {
    __extends(MouseDeBolita, _super);
    function MouseDeBolita() {
        var _this = _super.call(this) || this;
        _this.bolita = new Bolita;
        return _this;
    }
    MouseDeBolita.prototype.moverse = function () {
        this.bolita.moverse();
    };
    return MouseDeBolita;
}(Mouse));
var Bolita = /** @class */ (function () {
    function Bolita() {
    }
    Bolita.prototype.moverse = function () {
        this.estaGirando = true;
        console.log('Utilizando bolita para mover mouse.');
    };
    return Bolita;
}());
var TouchPad = /** @class */ (function (_super) {
    __extends(TouchPad, _super);
    function TouchPad() {
        var _this = _super.call(this) || this;
        _this.tactil = new Tactil;
        return _this;
    }
    TouchPad.prototype.moverse = function () {
        this.tactil.moverse();
    };
    return TouchPad;
}(Mouse));
var Tactil = /** @class */ (function () {
    function Tactil() {
    }
    Tactil.prototype.moverse = function () {
        this.tactilDetectado = true;
        console.log('Utilizando tactil para mover mouse.');
    };
    return Tactil;
}());
var mouse1 = new Mouse();
mouse1.encenderApagar();
mouse1.moverse();
mouse1.hacerClick();
var mouse2 = new MouseDeBolita();
mouse2.encenderApagar();
mouse2.moverse();
mouse2.hacerClick();
var mouse3 = new TouchPad();
mouse3.encenderApagar();
mouse3.moverse();
mouse3.hacerClick();
