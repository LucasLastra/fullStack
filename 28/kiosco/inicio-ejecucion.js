"use strict";
exports.__esModule = true;
var pista_audio_1 = require("./pista-audio");
var playlist_1 = require("./playlist");
var fs = require("fs");
var texto = fs.readFileSync('./28/kiosco/lista.txt', 'utf8');
var array = [];
var temp = [];
array = texto.split('\r\n');
var temaNuevo;
var pistas = [];
for (var i = 0; i < array.length; i++) {
    temp = array[i].split(',');
    array[i] = temp;
    temaNuevo = new pista_audio_1["default"](temp[0], temp[1], parseInt(temp[2]));
    pistas.push(temaNuevo);
}
var stock = new playlist_1["default"]('Stock');
for (var i = 0; i < pistas.length; i++) {
    stock.agregar(pistas[i]);
}
var ventasTxt = '';
var ventas = new playlist_1["default"]('Ventas');
ventas.agregar(pistas[0]);
ventas.agregar(pistas[2]);
ventas.agregar(pistas[4]);
ventas.agregar(pistas[8]);
ventasTxt += pistas[0].getDatos();
ventasTxt += pistas[2].getDatos();
ventasTxt += pistas[4].getDatos();
ventasTxt += pistas[8].getDatos();
fs.writeFile('./28/kiosco/ventas.txt', ventasTxt, function (err) {
    if (err)
        throw err;
    console.log('Shopping saved into "ventas.txt"!');
});
console.log("Precio del stock: " + stock.getPrecio());
console.log("Precio de lista de ventas: " + ventas.getPrecio());
