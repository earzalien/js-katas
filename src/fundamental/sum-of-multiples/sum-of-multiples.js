/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Create a function `sum` which returns the sum of all the multiples of 3 or 5 below the number in argument.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// TODO add your code here
function sum(total) {
    if (arguments.length !== 1 || typeof total !== "number" || isNaN(total)) {
        return NaN;
    }
    let resultfinal = 0;
    for (i = 0; i < total; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                resultfinal = resultfinal + i;
            }
            else {
                resultfinal = resultfinal + i
            }
        }
        else {
            if (i % 5 === 0) {
                resultfinal = resultfinal + i
            }
        }
    }
    return resultfinal
}
// Pour chaque nombre, vérifier si c'est un multiple de 3 ou de 5 (avec l'opérateur modulo)
// Si oui, ajouter ce nombre à la somme
// À la fin de la boucle, retourner la somme totale


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sum, "function");
assert.strictEqual(sum.length, 1);
assert.strictEqual(sum(10), 23);
assert.strictEqual(sum(42), 408);
assert.strictEqual(sum(100), 2318);

// End of tests

console.log("🎉");
