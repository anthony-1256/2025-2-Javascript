const { ask } = require('../helpers/input');

async function main() {
    const nombres = ['Ana', "Roberto", "Luis", "Mariana", "Sol"];

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length >= 5) {
            console.log(`${nombres[i]} tiene mas de 5 caracteres \n`);
        } else {
            console.log(`${nombres[i]} tiene solo ${nombres[i].length} caracteres \n`);
        }
    }

    const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "Maria", "Ursula", "Ernesto"];
    const vocales = ["a", "e", "i", "o", "u"];

    for (let a = 0; a < nombres2.length ; a++) {
        const primeraLetra = nombres2[a][0].toLowerCase();

        for ( let b = 0; b < vocales.length; b++) {
            if (primeraLetra === vocales[b]) {
                console.log(vocales[b]);
            }
        }
    }

    const palabraAlReves = await ask('Escribe una palabra: ');
    let resultado ="";

    /*debbuger*/
    for ( let c = palabraAlReves.length - 1; c >= 0; c-- ) {
        /* resultado = resultado + palabraAlReves[c]; */
        resultado += palabraAlReves[c];        
    }
    console.log(resultado);
}

main();