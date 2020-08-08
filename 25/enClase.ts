class Telefono2 {
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
class Camara{
    constructor(){
    }
    public sacarFoto(){
        return console.log('fotos tomadas!');
    }
}
 class TelefonoConCamara2 extends Telefono2 {
     private camara:Camara = new Camara;
    public constructor() {
        super(true,100);
    }
    public sacarFotos():void{
        this.camara.sacarFoto()
    }

 }
 class TelefonoConRadio2 extends Telefono2 {
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

let nuevo: TelefonoConCamara2 = new TelefonoConCamara2();
nuevo.sacarFotos();
