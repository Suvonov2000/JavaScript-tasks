function fibonacci(n) {
  let s = 0;
  for (let i = 1; i < n.length; i++) {
    s += n[i];
  }
  return s;
}
console.log(fibonacci([0, 1, 1, 2, 3]));
