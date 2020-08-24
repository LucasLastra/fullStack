import BuySell from "./musica";

export default class Item implements BuySell {
    private id: number;
    private nombre: string;
    private precio: number;
    public constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public getDatos(): string {
        return this.id + ',' + this.nombre + ',' + this.precio + '\r\n';
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getNombre(): string {
        return this.nombre;
    }
}