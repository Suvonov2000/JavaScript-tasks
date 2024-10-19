function capitalizeWords(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1, 11);
}

console.log(capitalizeWords(`hello World`));
