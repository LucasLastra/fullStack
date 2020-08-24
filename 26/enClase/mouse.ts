class Mouse {
    private estaConectado: boolean;
    private hizoClick:boolean;
    private seMovio: boolean;
    private laser: Laser = new Laser;
    constructor() { 
        this.estaConectado = false;
    }
    public encenderApagar(){
        if(this.estaConectado == true){
            this.estaConectado = false;
        }else{
            this.estaConectado = true;
        }
        console.log(this.estaConectado);
    }
    public hacerClick(){
        this.hizoClick = true;
        console.log('Click!');
    }
    public moverse(){
        this.seMovio = true;
        this.laser.moverse();
    }
}
class Laser {
    estaDetectando: boolean;
    constructor() {
        
    }
    moverse(){
        this.estaDetectando = true;
        console.log('Utilizando laser para mover mouse.');
    }
}
class MouseDeBolita extends Mouse {
    private bolita: Bolita = new Bolita;
    constructor() {
        super()
    }
    moverse(){
        this.bolita.moverse();
    }
}

class Bolita {
    private estaGirando:boolean;
    constructor() {  
    }
    moverse(){
        this.estaGirando = true;
        console.log('Utilizando bolita para mover mouse.');
    }
}
class TouchPad extends Mouse {
    private tactil: Tactil = new Tactil;
    constructor() {
        super()
    }
    moverse(){
        this.tactil.moverse();
    }
}
class Tactil {
    private tactilDetectado: boolean;
    constructor() { 
    }
    moverse(){
        this.tactilDetectado = true;
        console.log('Utilizando tactil para mover mouse.');
    }
}

let mouse1:Mouse = new Mouse();
mouse1.encenderApagar();
mouse1.moverse();
mouse1.hacerClick();

let mouse2:MouseDeBolita = new MouseDeBolita();
mouse2.encenderApagar();
mouse2.moverse();
mouse2.hacerClick();

let mouse3:TouchPad = new TouchPad();
mouse3.encenderApagar();
mouse3.moverse();
mouse3.hacerClick();
