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
        console.log("Llamando al numero " + numero + "...");
        console.log("Llamada realizada!");
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("Click!!");
    };
    return SmartPhone;
}());
var smart = new SmartPhone();
smart.prender();
smart.llamar('542494492600');
smart.sacarFoto();
smart.apagar();
