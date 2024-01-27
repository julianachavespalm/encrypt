# Aplicativo de Tradução

## Objetivo
O objetivo deste aplicativo é fornecer uma interface simples para criptografar e descriptografar texto com base em um mapa de tradução predefinido. Ele é projetado para ser uma ferramenta fácil de usar para transformar texto usando uma lógica específica de tradução.


## Funcionalidades

- **Mapa de Tradução: (translationMap)** O aplicativo possui um mapa de tradução predefinido, onde caracteres específicos são mapeados para strings de substituição correspondentes.

- **Elementos da Interface do Usuário:**
  - `inputElement`: Elemento de entrada para o texto a ser traduzido.
  - `resultArea`: Área para exibir o texto traduzido.
  - `resultTitle`: Área de título para exibir mensagens.
  - `resultText`: Área de texto para exibir o texto traduzido.
  - `copyButton`: Botão para copiar o texto traduzido para a área de transferência.
  - `encryptButton`: Botão para iniciar o processo de criptografia.
  - `decryptButton`: Botão para iniciar o processo de descriptografia.

- **Funções:**
  - `updateResultTitle(text)`: Atualiza a área de título com o texto fornecido.
  - `updateResultText(text)`: Atualiza a área de texto com o texto fornecido.
  - `updateInputText(text)`: Atualiza o elemento de entrada com o texto fornecido.
  - `setCopyButtonVisibility(display)`: Define a visibilidade do botão de cópia com base no valor de exibição fornecido.
  - `showEmptyInputWarning()`: Exibe um aviso quando nenhum texto de entrada é fornecido.
  - `resetAppState()`: Reinicia o estado do aplicativo, limpando as áreas de resultado e ocultando o botão de cópia.
  - `isInputValid()`: Valida se o texto de entrada não está vazio após a remoção de espaços em branco.
  - `removeInputAccents`: Esta função recebe uma string como entrada e realiza as seguintes operações:
    1. Substitui apenas as **vogais maiúsculas** por suas versões em minúsculas.
    2. Remove os seguintes acentos: agudo (`\u0301`), circunflexo (`\u0302`), til (`\u0303`), trema (`u308`) e círculo acima (`\u030a`).
    3. Retorna a string resultante sem acentos e com vogais em minúsculo.
  - `copyTranslationToClipboard()`: Copia o texto traduzido para a área de transferência.
  - `reverseTranslationMap(map)`: Inverte o mapa de tradução fornecido.
  - `getTranslationMapForOperation(operation)`: Retorna o mapa de tradução com base na operação especificada (criptografar/descriptografar).
  - `removeInputAccents(str)`: Remove acentos do texto de entrada para tradução.
  - `processTextWithOperation(operation)`: Processa o texto de entrada com base na operação especificada e atualiza as áreas de resultado.
  - `handleTranslationOperation(operation)`: Manipula a operação de tradução, exibindo avisos para entrada vazia e iniciando o processo de tradução.
  
- **Manipuladores de Eventos:**
  - `encryptButton.onclick`: Inicia o processo de criptografia.
  - `decryptButton.onclick`: Inicia o processo de descriptografia.

- **Métodos Públicos:**
  - `encrypt()`: Método público para iniciar o processo de criptografia.
  - `decrypt()`: Método público para iniciar o processo de descriptografia.

## Uso

Para utilizar o Aplicativo de Tradução, basta chamar a função `translatorApp()`. Isso iniciará o aplicativo, e você pode então realizar as operações de criptografia e descriptografia imediatamente.

```javascript
// Inicialização do Aplicativo de Tradução
translatorApp();

// Exemplo: Criptografar texto
translatorApp().encrypt();

// Exemplo: Descriptografar texto
translatorApp().decrypt();
```

Sinta-se à vontade para personalizar o mapa de tradução e outros aspectos do aplicativo para atender ao seu caso de uso específico.

## Autora
Juliana Chaves Palm