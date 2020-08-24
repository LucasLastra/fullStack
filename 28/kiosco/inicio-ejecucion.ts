import Item from "./pista-audio";
import List from "./playlist";
import BuySell from "./musica";
import * as fs from 'fs';
let texto: string = fs.readFileSync('./28/kiosco/lista.txt', 'utf8');

let array = [];
let temp = [];
array = texto.split('\r\n');
let temaNuevo: BuySell;
let pistas: BuySell[] = [];
for (let i = 0; i < array.length; i++) {
    temp = array[i].split(',');
    array[i] = temp;
    temaNuevo = new Item(temp[0], temp[1], parseInt(temp[2]));
    pistas.push(temaNuevo);
}
let stock = new List('Stock');
for (let i = 0; i < pistas.length; i++) {
    stock.agregar(pistas[i]);
}
let ventasTxt: string = '';
let ventas = new List('Ventas');
ventas.agregar(pistas[0]);
ventas.agregar(pistas[2]);
ventas.agregar(pistas[4]);
ventas.agregar(pistas[8]);
ventasTxt += pistas[0].getDatos();
ventasTxt += pistas[2].getDatos();
ventasTxt += pistas[4].getDatos();
ventasTxt += pistas[8].getDatos();


fs.writeFile('./28/kiosco/ventas.txt', ventasTxt, function (err) {
    if (err) throw err;
    console.log('Shopping saved into "ventas.txt"!');
});


console.log("Precio del stock: " + stock.getPrecio());
console.log("Precio de lista de ventas: " + ventas.getPrecio());
