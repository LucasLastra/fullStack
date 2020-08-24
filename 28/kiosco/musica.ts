export default interface BuySell {
    getDatos?(): void;
    getPrecio?(): number;
    getCantidad?(): number;
    getNombre(): string;
}