class Telefono {
    protected estaPrendido:boolean = true;
    protected bateriaActual:number = 100;
    public constructor(valorInicial?:boolean, bateriaInicial?:number) {
        if(valorInicial){
            this.estaPrendido = valorInicial;
        }
        if(bateriaInicial){
            this.bateriaActual = bateriaInicial;
        }
    }
    public mandarMensaje(): void {
        console.log('mensaje!');
    }
    public hacerLlamada(): void {
        console.log('llamada');
    }
    public prenderApagar(): void {
        if(this.estaPrendido == true){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }
 }

 class TelefonoConCamara extends Telefono {
    private cantFotos:number = 0
    public constructor() {
        super(true,100);

    }
    public sacarFotos(fotos:number){
        console.log('fotos tomadas!');
        this.cantFotos += fotos;
    }
    public verFotos(){
        console.log(`Cantidad de fotos: ${this.cantFotos}`)
    }
 }
 class TelefonoConRadio extends Telefono {
     private frecuenciaActual:number = 80;
    public constructor() {
        super(true,100);
    }
    public verFrecuenciaActual(){
        console.log(`Frecuencia actual: ${this.frecuenciaActual}`);
    }
    public subirFrecuencia(){
        this.frecuenciaActual++;
        console.log(`Frecuencia actual++: ${this.frecuenciaActual}`);
    }
    public bajarFrecuencia(){
        this.frecuenciaActual--;
        console.log(`Frecuencia actual--: ${this.frecuenciaActual}`);
    }
 }


 let ej:TelefonoConCamara = new TelefonoConCamara();
 ej.sacarFotos(10);
 ej.sacarFotos(10);
 ej.verFotos();
 ej.prenderApagar();

 let ej2:TelefonoConRadio = new TelefonoConRadio()
ej2.hacerLlamada();
ej2.prenderApagar();
ej2.verFrecuenciaActual();
ej2.subirFrecuencia();
ej2.subirFrecuencia();

 console.log(ej);
 console.log(ej2);
