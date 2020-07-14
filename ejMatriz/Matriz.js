"use strict";
exports.__esModule = true;
var Matriz = /** @class */ (function () {
    function Matriz() {
        this.matriz1 = [];
    }
    Matriz.prototype.create = function () {
        for (var i = 0; i < 10; i++) {
            this.matriz1[i] = [];
            for (var j = 0; j < 5; j++) {
                this.temp = Math.floor(Math.random() * 50);
                this.matriz1[i][j] = this.temp;
            }
        }
        console.log(this.matriz1);
    };
    Matriz.prototype.get = function (x, y) {
        console.log(matriz1);
        console.log(matriz1[x][y]);
    };
    return Matriz;
}());
var matriz1 = new Matriz();
matriz1.create();
matriz1.get(1, 1);
