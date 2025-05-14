// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const {ask} = require('../helpers/input');

async function pause() {
    await ask("Presiona ENTER para continuar...");    
}

async function main() {
    let option = '';
    let fruits = [];

    while (option !== '4') {
        option = await ask('\n===MENÚ===\n1. Agregar fruta.\n2. Eliminar fruta.\n3. Ver lista de frutas.\n4. Salir.\n\n');

        if (option === '1') {
            /* agregar fruta */
            let newFruit = await ask('Agrega una fruta: ');
            fruits.push(newFruit);
            console.log(`Agregaste fruta: ${newFruit}`);
            console.log(); // línea vacía
            await pause();

            
        } else if (option === '2') {
            /* eliminar fruta */
            if (fruits.length === 0) {
                console.log('Sin frutas disponibles');
                continue;
            } else {
                let deleteFruit = await ask('Elimina una fruta: ');
                let index = fruits.indexOf(deleteFruit);
                
                if (index !== -1) {
                    fruits.splice(index, 1);
                    console.log(`Haz eliminado: ${deleteFruit}`);
                    console.log(); // línea vacía
                    await pause();
                } else {
                    console.log('Esa fruta no se encuentra registrada.');
                    console.log(); // línea vacía
                    await pause();
                }
            }
        
        } else if (option === '3') {
            /* lista de frutas */
            console.log('Las frutas registradas son: ', fruits);            
            console.log(); // línea vacía
            await pause();
        
        } else if (option === '4') {
            /* salir */
            console.log('Gracias por utilizar el programa. Hasta luego.')
        
        } else {
            /* error */
            console.log('Opción inexistente.');
            console.log(); // línea vacía
            await pause();
        }
    }
}

main();