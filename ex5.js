function capitalLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, 11);
}
console.log(capitalLetter(`hello world`));
