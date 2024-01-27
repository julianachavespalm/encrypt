function transformarVogaisParaMinusculas(frase) {
    // Utiliza uma expressão regular para substituir as vogais pela versão minúscula
    const resultado = frase.replace(/[aeiouAEIOUÀ-Üà-ü]/g, vogal => vogal.toLowerCase());
  
    return resultado;
  }
  
  // Exemplo de uso
  const minhaFrase = "OLÁ COMO VAI VOCÊ";
  const resultado = transformarVogaisParaMinusculas(minhaFrase);
  console.log(resultado);
  