let a = Number(prompt('Digite um número:'))

function ehPrimo(a) {
    if (a % a === 0 && a % 1 === 0 && a % 2 != 0) {
        return 'True';
    } else {
        return 'False';
    }
}
console.log(ehPrimo(a));