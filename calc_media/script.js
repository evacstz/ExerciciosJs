let a = Number(prompt('Digite um número:'));
let b = Number(prompt('Digite outro número:'));
let c = Number(prompt('Digite mais um número:'));

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calcularMedia(a, b, c));