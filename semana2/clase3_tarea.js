// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.
//

const {ask} = require('../helpers/input');

async function pause() {
    await ask("Presiona ENTER para continuar...");
}

async function main() {
    let option = '';
    let ages = [];

    while (option !== '5') {
        option = await ask('\n===MENÚ===\n1. Agrega una edad:\n2. Eliminar una edad:\n3. Mayores de Edad:\n4. Edades registradas\n5. Salir\n');

        /* Opción 1 - Agregar edad */
        if (option === '1') {
            let newAge = Number(await ask('Agrega una edad: '));

            if (!isNaN(newAge) && newAge >= 0) {
                ages.push(newAge);
                console.log(`Edad agregada: ${newAge}`);
            } else {
                console.log("Edad inválida.Intenta de nuevo...");                
            }
            await pause();
        
        /* Opción 2: Eliminar edad */
        } else if (option === '2') {
            if (ages.length === 0) {
                console.log("No hay edades dispnibles...");
                continue;
            }
            
            let deleteAge = Number(await ask('Elimina una edad: '));
            let index = ages.indexOf(deleteAge);
            
            if (index !== -1) {
                ages.splice(index, 1);
                console.log(`${deleteAge} ha sido eliminada`);
            } else {
                console.log("Edad no encontrada...");
            }
            
            console.log('Edades disponibles: ', ages);
            await pause();
        
        /* Opción3: Mostrar mayores de edad */
        } else if (option === '3') {
            if (ages.length === 0) {
                console.log("No hay edades registradas aún.");
                await pause();
                continue;
            }

            let totalIsAdult = 0;

            for (let a = 0; a < ages.length; a++) {
                if (ages[a] >= 18) {
                    totalIsAdult++;
                }                
            }

            console.log(`Hay ${totalIsAdult} persona(s) mayor(es) de edad.`);
            await pause();
        
        /* Opción 4 - Mostrar todas las edades */
        } else if (option ==='4') {
            if (ages.length === 0) {
                console.log("No hay edades registradas aún.");
            } else {
                console.log('Las edades registradas son: ', ages);
            }
            await pause();
        
        /* Opción 5: Salida */
        } else if (option === '5') {
            console.log("Gracias por utilizar el pograma. Hasta luego.");
        
        /* Opción no válida */
        } else {
            console.log('Opción incorrecta. Intenta otra vez...');
            await pause();
        }
    }
}
main();