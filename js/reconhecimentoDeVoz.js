/* https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API */

const elementoChute=document.getElementById('chute')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang='pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    /*results para acessar os resultados, [0] para mostrar o que ta dentro do array 0 e o transcript pra mostrar a palavra falada*/
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValidacaoDoChute(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
