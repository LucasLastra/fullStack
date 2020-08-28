"use strict";
exports.__esModule = true;
var fs = require("fs");
var arrayAlumnos = [];
function agregarListado() {
    var texto = fs.readFileSync('30/alumnos.txt', 'utf8');
    var temp1 = texto.split('\r\n');
    var temp2 = [];
    var otroAlumno;
    for (var i = 0; i < temp1.length; i++) {
        temp2 = [];
        temp2 = temp1[i].split(',');
        otroAlumno = new Alumnos(temp2[0], parseInt(temp2[1]));
        arrayAlumnos.push(otroAlumno);
    }
}
function getPromedioGeneral() {
    var promedioGeneral = 0;
    for (var i = 0; i < arrayAlumnos.length; i++) {
        promedioGeneral += arrayAlumnos[i].getPromedioAlumno();
    }
    promedioGeneral = promedioGeneral / arrayAlumnos.length;
    console.log("Los alumnos tienen un promedio general de " + promedioGeneral.toFixed(3));
}
var Alumnos = /** @class */ (function () {
    function Alumnos(nombre, edad) {
        this.examenes = new Examenes();
        if (nombre)
            this.nombre = nombre;
        if (edad)
            this.edad = edad;
    }
    Alumnos.prototype.getPromedioAlumno = function () {
        var promedio = this.examenes.getPromedioAlumno();
        console.log("El alumno " + this.nombre + ", tiene un promedio de " + promedio);
        return promedio;
    };
    Alumnos.prototype.getPromedioGeneral = function () {
        getPromedioGeneral();
    };
    return Alumnos;
}());
var Examenes = /** @class */ (function () {
    function Examenes(lengua, matematicas, musica, fisica) {
        if (lengua)
            this.lengua = lengua;
        else
            this.lengua = Math.floor(10 * Math.random());
        if (matematicas)
            this.matematicas = matematicas;
        else
            this.matematicas = Math.floor(10 * Math.random());
        if (musica)
            this.musica = musica;
        else
            this.musica = Math.floor(10 * Math.random());
        if (fisica)
            this.fisica = fisica;
        else
            this.fisica = Math.floor(10 * Math.random());
    }
    Examenes.prototype.getPromedioAlumno = function () {
        var promedio = (this.fisica + this.lengua + this.matematicas + this.musica) / 4;
        return promedio;
    };
    return Examenes;
}());
var nuevoAlumno = new Alumnos('carlos', 17);
agregarListado();
nuevoAlumno.getPromedioAlumno();
nuevoAlumno.getPromedioGeneral();
