function TranslatorApp() {
    const state = {
        values: {
            dictionary: {
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'o': 'ober',
                'u': 'ufat',
            },
        },
        actions: {
            selectInput: document.getElementById('inputToTranslate'),
            selectResultArea: document.getElementById('resultArea'),
            selectResultTitle: document.getElementById('resultTitle'),
            selectResultText: document.getElementById('resultText'),
            selectButtonToCopyTranslation: document.getElementById('buttonToCopyTranslation'),
            encryptButton: document.getElementById("encryptButton"),
            decryptButton: document.getElementById("decryptButton"),
        },
    };

    function updateResultTitle(text) {
        state.actions.selectResultTitle.textContent = text;
    }

    function updateResultText(text) {
        state.actions.selectResultText.innerHTML = text;
    }

    function emptyInputWarning() {
        updateResultTitle('Nenhuma mensagem encontrada');
        updateResultText('Digite um texto que você deseja criptografar ou descriptografar');
        toggleCopyButtonDisplay('none');
    }

    function resetState() {
        updateResultTitle('');
        updateResultText('');
        toggleCopyButtonDisplay('none');
    }

    function validateInput() {
        const inputToTranslate = state.actions.selectInput.value.trim();
        return inputToTranslate.length > 0;
    }

    function toggleCopyButtonDisplay(display) {
        state.actions.selectButtonToCopyTranslation.style.display = display;
    }

    function copyTranslation() {
        const textToCopy = state.actions.selectResultText.innerHTML;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Texto copiado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao copiar o texto:', error);
            });
    }

    function processText(operation) {
        const input = state.actions.selectInput.value;
        const dictionary = getDictionary(operation);
        const pattern = new RegExp(Object.keys(dictionary).join('|'), 'g');
        const processedText = input.replace(pattern, match => dictionary[match]);
        updateResultText(processedText);
    }

    function getDictionary(operation) {
        return {
            encrypt: state.values.dictionary,
            decrypt: reverseObject(state.values.dictionary),
        }[operation];
    }

    function reverseObject(obj) {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
    }

    function handleOperation(operation) {
        if (!validateInput()) {
            emptyInputWarning();
        } else {
            resetState();
            processText(operation);
            toggleCopyButtonDisplay('block');
            copyTranslation();
        }
    }

    state.actions.encryptButton.onclick = () => handleOperation('encrypt');
    state.actions.decryptButton.onclick = () => handleOperation('decrypt');

    return {
        encrypt: () => handleOperation('encrypt'),
        decrypt: () => handleOperation('decrypt')
    };
}

TranslatorApp();