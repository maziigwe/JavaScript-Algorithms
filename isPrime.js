// function isPrime(n) {
//   for (let i = n - 1; i > 0; i--) {
//     if (n % i === 0 && i > 1) return false;
//   }
//   return true;
// }
// console.log(isPrime(9));
//isPrime(5);

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    console.log("Running");
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(100001));
