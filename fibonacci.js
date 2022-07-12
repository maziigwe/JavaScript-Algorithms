function fib(n) {
  fibonacci = [1, 1];
  for (let i = 2; i <= n; i++) {
    console.log("Running");
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  console.log(fibonacci);
  return fibonacci[n];
}

console.log(fib(4));
console.log(fib(8));
