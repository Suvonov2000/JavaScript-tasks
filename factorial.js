function factorial(n) {
  let sum = 1;

  for (let i = 1; i <= 5; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5));
