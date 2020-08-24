import BuySell from "./musica";

export default class List implements BuySell {
    private nombre: string;
    private elementos: BuySell[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.elementos = [];
    }

    public getPrecio(): number {
        let sumaDuraciones = 0;
        for (let i = 0; i < this.elementos.length; i++)
            sumaDuraciones += this.elementos[i].getPrecio();
        return sumaDuraciones;
    }

    public getCantidad(): number {
        let cantidad = 0;
        for (let i = 0; i < this.elementos.length; i++)
            cantidad += this.elementos[i].getCantidad();
        return cantidad;
    }

    public getElementos(): BuySell[] {
        return this.elementos;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public agregar(m: BuySell): void {
        this.elementos.push(m);

    }

    public estaVacia(): boolean {
        return this.elementos.length == 0;
    }

    public eliminar(posicion: number): boolean {
        if (posicion < 0 || posicion >= this.elementos.length)
            return false;
        // A partir de 'posicion', eliminar un elemento
        this.elementos.splice(posicion, 1);
        return true;
    }
}