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
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ErrorIndefinido';
        Error.prototype.name = _this.name;
        return _this;
    }
    return CustomError;
}(Error));
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        if (numero == undefined) {
            throw new CustomError('El valor del numero no ha sido definido.');
        }
        console.log("Llamando al numero " + numero + "...");
        console.log("Llamada realizada!");
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("Click!!");
    };
    return SmartPhone;
}());
var numeroMal;
var smart = new SmartPhone();
smart.prender();
smart.sacarFoto();
smart.apagar();
//try {
smart.llamar(numeroMal);
/*} catch (error) {
    console.log('Ocurrio un error esperado, definiendo numero...');
    numeroMal = 0;
}
*/
