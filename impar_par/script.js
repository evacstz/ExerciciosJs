let a = Number(prompt('Digite um número:'))

function imparPar(a) {
    if (a % 2 === 0) {
        return a + ' é par.';
    } else {
        return a + ' é ímpar.';
    }
}
console.log(imparPar(a));