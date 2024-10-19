function fibonacci(number) {
  let result = [0, 1];
  while (result.length < number) {
    prev1 = result[result.length - 1];
    prev2 = result[result.length - 2];

    result.push(prev1 + prev2);
  }
  return result;
}
console.log(fibonacci(5));
