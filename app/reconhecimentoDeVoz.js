const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    let chute = event.results[0][0].transcript;
    console.log(event);
    exibirChute(chute);
    verificaValorValido(chute);
}

function exibirChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>`;
}

recognition.addEventListener('end', () => recognition.start());