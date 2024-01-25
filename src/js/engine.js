const state = {
    values: {
        vowelsToEncrypt: {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat',
        },
        vowelsToDecrypt: {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u',
        },
    },
    actions: {
        selectInput: document.getElementById('inputToTranslate'),
        selectResultArea: document.getElementById('resultArea'),
        selectResultTitle: document.getElementById('resultTitle'),
        selectResultText: document.getElementById('resultText'),
        selectButtonToCopyTranslation: document.getElementById('buttonToCopyTranslation'),
    }
};

function clearResultArea() {
    state.actions.selectResultTitle.innerHTML = 'Nenhuma mensagem encontrada';
    state.actions.selectResultText.innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar';

}

function validateInput() {
    let inputToTranslate = state.actions.selectInput.value;
    return inputToTranslate.length > 0;
}

function displayCopyButtonNone() {
    return state.actions.selectButtonToCopyTranslation.style.display = 'none';

}

function displayCopyButtonBlock() {
    return state.actions.selectButtonToCopyTranslation.style.display = 'block';
}

function translateText(text, translationMap) {
    return text.replace(/[aeiou]/g, match => translationMap[match] || match);
}

function encrypt() {
    if (!validateInput()) {
        return [clearResultArea(), displayCopyButtonNone()];
        } else {
        let inputToTranslate = state.actions.selectInput.value;
        let translatedText = translateText(inputToTranslate, state.values.vowelsToEncrypt);

        displayCopyButtonBlock();
        state.actions.selectResultTitle.innerHTML = translatedText;
    }
}

function decrypt() {
    if (!validateInput()) {
        return [clearResultArea(), displayCopyButtonNone()];
        } else {
        let selectInput = state.actions.selectInput.value;
        let translatedText = translateText.reverse(selectInput, state.values.vowelsToDecrypt);

        displayCopyButtonBlock();
        state.actions.selectResultTitle.innerHTML = translatedText;
    }
}
