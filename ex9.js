function countOccurences(array, number) {
  return array.filter((num) => num === number).length;
}
console.log(countOccurences([1, 2, 3, 2, 4, 2], 2));
