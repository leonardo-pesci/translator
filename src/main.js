//^ Elements
const flagText = document.querySelector('#flagText')
const clearBtn = document.querySelector('#clearBtn')
const translationText = document.querySelector('#translationText')
const inputText = document.querySelector('#inputText')
const langBtns = document.querySelectorAll('.langBtn')

//^ Functions
let reset = () => {
    flagText.innerText = ''
    inputText.value = ''
    translationText.innerText = 'La traduzione apparirà qui'
    inputText.focus()
}

let langBtnFunction = (langBtn) => {
    let lang = langBtn.dataset.name
    let text = inputText.value.trim()
    let flag = langBtn.innerText

    inputText.focus()
    
    if (text.length > 0) translate(text, lang, flag)
}

let translate = async (text, lang, flag) => {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    const result = data.responseData.translatedText;

    translationText.innerText = result
    flagText.innerText = flag
}

inputText.focus()



//^ Events
clearBtn.addEventListener('click', reset)

langBtns.forEach( (langBtn) => {
    langBtn.addEventListener('click', () => {
        langBtnFunction(langBtn)
    })
})



// todo
/* 
function reset() {
  textInput.value = '';
  translationText.innerText = 'Traduzione';
  translationFlag.innerText = '';
}

async function translate(text, lang, flag) {
  const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  const result = jsonData.responseData.translatedText;
  console.log(result);

  translationText.innerText = result;
  translationFlag.innerText = flag;
}

langButtons.forEach(function(langButton) {
  langButton.addEventListener('click', function() {

    // recupero il testo dal campo di input e rimuovo eventuali spazi extra
    // all'inizio e alla fine della stringa inserita con il metodo .trim()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    const text = textInput.value.trim();

    // recupero il codice lingua dal data-attribute del pulsante
    const lang = langButton.dataset.lang;
    // recupero la bandierina dalla testo del pulsante
    const flag = langButton.innerText;

    // se il campo di input ha effettvamente del testo
    // invoco la funzione e faccio partire la chiamata alle API
    if(text.length > 0) {
      translate(text, lang, flag);
    }
  });
});

resetButton.addEventListener('click', reset);
*/