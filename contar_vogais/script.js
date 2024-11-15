let palavra = String(prompt('Digite uma palavra:'));

function contarVogais(palavra) {
    let soma = 0;
    for (i =0; i < palavra.length; i++) {
        if (palavra[i].toUpperCase() == 'A' || palavra[i].toUpperCase() == 'E' || palavra[i].toUpperCase() == 'I' || palavra[i].toUpperCase() == 'O' || palavra[i].toUpperCase() == 'U') {
            soma++;
        }
    }
    return soma;
}

console.log(contarVogais(palavra));