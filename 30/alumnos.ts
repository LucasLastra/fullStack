import * as fs from 'fs';

let arrayAlumnos: Alumnos[] = [];

function agregarListado(): void {
    let texto: string = fs.readFileSync('30/alumnos.txt', 'utf8');
    let temp1: string[] = texto.split('\r\n');
    let temp2 = [];
    let otroAlumno: Alumnos;

    for (let i: number = 0; i < temp1.length; i++) {
        temp2 = [];
        temp2 = temp1[i].split(',');
        otroAlumno = new Alumnos(temp2[0], parseInt(temp2[1]));
        arrayAlumnos.push(otroAlumno);
    }
}
function getPromedioGeneral(): void {
    let promedioGeneral: number = 0;
    for (let i = 0; i < arrayAlumnos.length; i++) {
        promedioGeneral += arrayAlumnos[i].getPromedioAlumno()
    }
    promedioGeneral = promedioGeneral / arrayAlumnos.length;
    console.log(`Los alumnos tienen un promedio general de ${promedioGeneral.toFixed(3)}`);
}

class Alumnos {
    private nombre: string;
    private edad: number;
    private examenes: Examenes = new Examenes();

    public constructor(nombre?: string, edad?: number) {
        if (nombre)
            this.nombre = nombre;
        if (edad)
            this.edad = edad;
    }

    public getPromedioAlumno(): number {
        let promedio: number = this.examenes.getPromedioAlumno()
        console.log(`El alumno ${this.nombre}, tiene un promedio de ${promedio}`)
        return promedio;
    }

    public getPromedioGeneral(): void {
        getPromedioGeneral()
    }
}

class Examenes {
    private lengua: number;
    private matematicas: number;
    private musica: number;
    private fisica: number;

    public constructor(lengua?: number, matematicas?: number, musica?: number, fisica?: number) {
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

    public getPromedioAlumno(): number {
        let promedio: number = (this.fisica + this.lengua + this.matematicas + this.musica) / 4;
        return promedio;
    }
}

let nuevoAlumno: Alumnos = new Alumnos('carlos', 17);
agregarListado();


nuevoAlumno.getPromedioAlumno();
nuevoAlumno.getPromedioGeneral();

