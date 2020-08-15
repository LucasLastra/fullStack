interface Telefono{
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
}

class SmartPhone implements Telefono{
    private estaPrendido: boolean;
    constructor(){
        this.estaPrendido = false;
    }
    prender(): void{
        this.estaPrendido = true;
    }
    apagar(): void{
        this.estaPrendido = false;
    }
    llamar(numero: string): void{
        console.log(`Llamando al numero ${numero}...`);
        console.log(`Llamada realizada!`);
    }
    sacarFoto(): void{
        console.log(`Click!!`)
    }
}

let smart: SmartPhone = new SmartPhone();

smart.prender();
smart.llamar('542494492600');
smart.sacarFoto();
smart.apagar();