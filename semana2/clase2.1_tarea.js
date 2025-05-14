// 🏠 Gestor interactivo de frutas con switch
const { ask } = require('../helpers/input');

async function pause() {
    await ask("Presiona ENTER para continuar...");    
}

async function main() {
    let option = '';
    let fruits = [];

    while (option !== '4') {
        option = await ask('\n===MENÚ===\n1. Agregar fruta.\n2. Eliminar fruta.\n3. Ver lista de frutas.\n4. Salir.\n\n');

        switch (option) {
            case '1':
                // 🧃 Agregar fruta
                const newFruit = await ask('Agrega una fruta: ');
                fruits.push(newFruit);
                console.log(`Agregaste fruta: ${newFruit}`);
                console.log();
                await pause();
                break;

            case '2':
                // 🔪 Eliminar fruta
                if (fruits.length === 0) {
                    console.log('Sin frutas disponibles');
                    break; // No se pausa si no hay frutas
                }

                const deleteFruit = await ask('Elimina una fruta: ');
                const index = fruits.indexOf(deleteFruit);

                if (index !== -1) {
                    fruits.splice(index, 1);
                    console.log(`Haz eliminado: ${deleteFruit}`);
                } else {
                    console.log('Esa fruta no se encuentra registrada.');
                }
                console.log();
                await pause();
                break;

            case '3':
                // 📋 Ver lista
                console.log('Las frutas registradas son:', fruits);
                console.log();
                await pause();
                break;

            case '4':
                // 👋 Salir
                console.log('Gracias por utilizar el programa. Hasta luego.');
                break;

            default:
                // ❌ Opción inválida
                console.log('Opción inexistente.');
                console.log();
                await pause();
        }
    }
}

main();