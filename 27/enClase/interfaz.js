var AutoCarreras = /** @class */ (function () {
    function AutoCarreras() {
        this.velocidadActual = 0;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarreras.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoCarreras;
}());
var auto1 = new AutoCarreras();
auto1.acelerar();
auto1.getVelocidadActual();
console.log(auto1);
