function verificaValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido!');
    }
    if (numeroForMaiorouMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}.`);
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorouMenorQueOValorPermitido(numero) {
    return numero < menorValor || numero > maiorValor;
}