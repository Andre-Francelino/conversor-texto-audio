// pegando elementos para manipular
let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');
let selectedVoice = 0;

// lista de vozes disponíveis
window.speechSynthesis.addEventListener('voiceschanged', () => {
    let VoicesList = window.speechSynthesis.getVoices();
    for(let i in VoicesList) {
        let optionEl = document.createElement('option');
        optionEl.setAttribute('value', i);
        optionEl.innerText = VoicesList[1].name;
        voices.appendChild(optionEl);
    }
});

// capturando texto escrito e convertendo em fala
button.addEventListener('click', () => {
    if(textarea.value != '') {
        let VoicesList = window.speechSynthesis.getVoices();
        let ut = new SpeechSynthesisUtterance(textarea.value);
        ut.voice = VoicesList[selectedVoice];
        window.speechSynthesis.speak(ut);
    }
});

// escolhendo voz para falar a mensagem escrita
voices.addEventListener('change', () => {
    selectedVoice = parseInt(voices.value);
});

// função para saber se a aplicação está falando o texto escrito
// e desabilitar o acesso a lista de vozes e acionamento do botão
function updateStatus() {
    if(window.speechSynthesis.speaking) {
        voices.setAttribute('disabled', 'disabled');
        button.setAttribute('disabled', 'disabled');
    } else {
        voices.removeAttribute('disabled');
        button.removeAttribute('disabled');
    }
}

setInterval(updateStatus, 100);


