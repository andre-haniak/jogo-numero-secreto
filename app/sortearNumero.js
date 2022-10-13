const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
  return Math.floor(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById("menorValor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maiorValor");
elementoMaiorValor.innerHTML = maiorValor;