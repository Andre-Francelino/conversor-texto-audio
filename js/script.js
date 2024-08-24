// pegando elementos para manipular
let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');

// capturando texto escrito e convertendo em fala
button.addEventListener('click', () => {
    if(textarea.value != '') {
        let ut = new SpeechSynthesisUtterance(textarea.value);
        window.speechSynthesis.speak(ut);
    }
});


