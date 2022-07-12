function isPowerTwo(number) {
  if (number <= 1) return false;

  let divisibleByTwo = number;
  while (divisibleByTwo !== 1) {
    if (divisibleByTwo % 2 == 1) {
      return false;
    }
    divisibleByTwo /= 2;
  }
  return true;
}

console.log(isPowerTwo(5));
console.log(isPowerTwo(10));
