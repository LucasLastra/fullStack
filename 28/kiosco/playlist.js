"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List(nombre) {
        this.nombre = nombre;
        this.elementos = [];
    }
    List.prototype.getPrecio = function () {
        var sumaDuraciones = 0;
        for (var i = 0; i < this.elementos.length; i++)
            sumaDuraciones += this.elementos[i].getPrecio();
        return sumaDuraciones;
    };
    List.prototype.getCantidad = function () {
        var cantidad = 0;
        for (var i = 0; i < this.elementos.length; i++)
            cantidad += this.elementos[i].getCantidad();
        return cantidad;
    };
    List.prototype.getElementos = function () {
        return this.elementos;
    };
    List.prototype.getNombre = function () {
        return this.nombre;
    };
    List.prototype.agregar = function (m) {
        this.elementos.push(m);
    };
    List.prototype.estaVacia = function () {
        return this.elementos.length == 0;
    };
    List.prototype.eliminar = function (posicion) {
        if (posicion < 0 || posicion >= this.elementos.length)
            return false;
        // A partir de 'posicion', eliminar un elemento
        this.elementos.splice(posicion, 1);
        return true;
    };
    return List;
}());
exports["default"] = List;
