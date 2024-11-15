let altura;
let maiorAltura;
let menorAltura;

for (i = 0; i < 5; i++) {
    altura = Number(prompt('Digite uma altura:'));
    if (i === 0) {
        maiorAltura = altura;
        menorAltura = altura;
    } else {
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        if (altura < menorAltura) {
            menorAltura = altura;
        }
    }
}

console.log('A maior altura é: ' + maiorAltura);
console.log('A menor altura é: ' + menorAltura);