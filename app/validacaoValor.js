function verificaValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return;
    }
    if (numeroForMaiorouMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou o número secreto!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="btn-play" id="play-again">Jogar novamente</button>`;
        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor 
        <i class="fa-solid fa-arrow-down-long"></i>
        </div>`;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior 
        <i class="fa-solid fa-arrow-up-long"></i>
        </div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorouMenorQueOValorPermitido(numero) {
    return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener('click', event => {
    if (event.target.id === 'play-again') {
        window.location.reload();
    }
})