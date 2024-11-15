let a = Number(prompt('Digite uma nota:'));
let b = Number(prompt('Digite outra nota:'));
let c = Number(prompt('Digite mais uma nota:'));

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calcularMedia(a, b, c));