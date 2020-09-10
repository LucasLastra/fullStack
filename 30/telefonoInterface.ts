class CustomError extends Error{
    public name = 'ErrorIndefinido'
    constructor(message?: string){
        super(message);
        Error.prototype.name = this.name
    }
}

interface Telefono {
    prender(): void;
    apagar(): void;
    llamar(numero: number): void;
}

class SmartPhone implements Telefono {
    private estaPrendido: boolean;
    constructor() {
        this.estaPrendido = false;
    }
    prender(): void {
        this.estaPrendido = true;
    }
    apagar(): void {
        this.estaPrendido = false;
    }
    llamar(numero: number): void {
        if (numero == undefined) {
            throw new CustomError('El valor del numero no ha sido definido.');
        }
        console.log(`Llamando al numero ${numero}...`);
        console.log(`Llamada realizada!`);
    }
    sacarFoto(): void {
        console.log(`Click!!`)
    }
}
let numeroMal: number;
let smart: SmartPhone = new SmartPhone();
smart.prender();
smart.sacarFoto();
smart.apagar();
//try {
    smart.llamar(numeroMal);
/*} catch (error) {
    console.log('Ocurrio un error esperado, definiendo numero...');
    numeroMal = 0;
}
*/


