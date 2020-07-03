let numero = 100;
let contador = 0;

cantidadDeDivisores(numero);

function cantidadDeDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        if ((numero % i) == 0) {
            contador++;
        }
    }
    console.log(`${contador}`)
}