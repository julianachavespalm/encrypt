function translatorApp() {
    const translationMap = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    }
    
    const domElements  = {
        inputElement: document.getElementById('inputToTranslate'),
        resultTitle: document.getElementById('resultTitle'),
        resultText: document.getElementById('resultText'),
        copyButton: document.getElementById('buttonToCopyTranslation'),
        encryptButton: document.getElementById("encryptButton"),
        decryptButton: document.getElementById("decryptButton"),
    };

    // Desestruturação de domElements
    const { inputElement, resultTitle, resultText, copyButton, encryptButton, decryptButton } = domElements;
    
    // Funções de manipulação do DOM
    function updateResult(title, text) {
        resultTitle.textContent = title;
        resultText.textContent = text;
    }

    function setResultVisibility(titleDisplay, textDisplay, buttonDisplay) {
        resultTitle.style.display = titleDisplay;
        resultText.style.display = textDisplay;
        if (copyButton) {
            copyButton.style.display = buttonDisplay;
        }
    }

    function updateInputText(text) {
        inputElement.value = text;
    }

    // Funções de manipulação de estado
    function showEmptyInputWarning() {
        setResultVisibility('block', 'block', 'none');
        updateResult('Nenhuma mensagem encontrada', 'Digite um texto que você deseja criptografar ou descriptografar');
    }

    function isInputValid() {
        const inputToTranslate = inputElement.value.trim();
        return inputToTranslate.length > 0;
    }

    // Função de interação com a área de transferência
    function copyTranslationToClipboard() {
        const textToCopy = resultText.textContent;
        navigator.clipboard.writeText(textToCopy)
            .then(() => console.log(`O texto "${textToCopy}" foi copiado com sucesso!`))
            .catch((error) => console.error('Erro ao copiar o texto:', error));
    }

    // Funções de manipulação do mapa de tradução
    function reverseTranslationMap(map) {
        return Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));
    }

    function getTranslationMapForOperation(operation) {
        return {
            encrypt: translationMap,
            decrypt: reverseTranslationMap(translationMap),
        }[operation];
    }

    // Função para remover acentuação do texto de entrada para tradução
    function removeInputAccents(text) {
        const textToLowerCase = text.replace(/[aeiouAEIOUÀ-Üà-ü]/g, vogal => vogal.toLowerCase());
        const textWithoutAccents = textToLowerCase.normalize("NFD").replace(/[\u0301\u0302\u0303\u0308\u030a]/g, "");

        return textWithoutAccents;
    }

    // Funções de processamento de texto
    function processTextWithOperation(operation) {
        const input = inputElement.value;
        const translationMap = getTranslationMapForOperation(operation);
        const pattern = new RegExp(Object.keys(translationMap).join('|'), 'g');

        const inputWithoutAccents = removeInputAccents(input);

        const processedText = inputWithoutAccents.replace(pattern, match => translationMap[match]);

        updateResult('', processedText);
        updateInputText('');
    }

    // Funções de manipulação de eventos
    function handleTranslationOperation(operation) {
        if (!isInputValid()) {
            showEmptyInputWarning();
        } else {
            processTextWithOperation(operation);
            setResultVisibility('none', 'block', 'block');
        }
    }

    // Atribuição de manipuladores de eventos para os botões de criptografia, descriptografia e cópia
    encryptButton.addEventListener('click', () => handleTranslationOperation('encrypt'));
    decryptButton.addEventListener('click', () => handleTranslationOperation('decrypt'));
    
    // Verifica se o botão de cópia existe antes de atribuir o manipulador de eventos
    if (copyButton) {
        copyButton.addEventListener('click', copyTranslationToClipboard);
    }

    // Métodos públicos
    return {
        encrypt: () => handleTranslationOperation('encrypt'),
        decrypt: () => handleTranslationOperation('decrypt')
    };
}

// Inicialização da aplicação
translatorApp();
