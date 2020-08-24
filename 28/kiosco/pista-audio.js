"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    Item.prototype.getDatos = function () {
        return this.id + ',' + this.nombre + ',' + this.precio + '\r\n';
    };
    Item.prototype.getPrecio = function () {
        return this.precio;
    };
    Item.prototype.getNombre = function () {
        return this.nombre;
    };
    return Item;
}());
exports["default"] = Item;
