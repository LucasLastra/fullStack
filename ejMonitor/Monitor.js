var Monitor = /** @class */ (function () {
    function Monitor(resolucionInicial, brilloInicial, contrasteInicial, nitidezInicial) {
        this.resolucionActual = resolucionInicial;
        this.brilloActual = brilloInicial;
        this.contrasteActual = contrasteInicial;
        this.nitidezActual = nitidezInicial;
        this.estaPrendido = false;
    }
    Monitor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Monitor.prototype.subirBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Monitor.prototype.bajarBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.cambiarResolucion = function (cambiarResolucion) {
        this.resolucionActual = cambiarResolucion;
    };
    Monitor.prototype.cambiarContraste = function (nuevoContraste) {
        this.contrasteActual = nuevoContraste;
    };
    Monitor.prototype.cambiarNitidez = function (nuevaNitidez) {
        this.nitidezActual = nuevaNitidez;
    };
    return Monitor;
}());
var resolucionInicial = 800;
var brilloInicial = 50;
var contrasteInicial = 50;
var nitidezInicial = 50;
var monitor1 = new Monitor(resolucionInicial, brilloInicial, contrasteInicial, nitidezInicial);
console.log(monitor1);
monitor1.prenderApagar();
monitor1.cambiarResolucion(1080);
monitor1.cambiarContraste(67);
for (var i = 0; i < 30; i++) {
    monitor1.subirBrillo();
}
monitor1.cambiarNitidez(0);
console.log(monitor1);
