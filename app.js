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

// using bitwise operator
function isPowerTwo_Improved(number) {
  if (number <= 1) return false;

  return (number & (number - 1)) === 0;
}

console.log(isPowerTwo_Improved(5));
console.log(isPowerTwo_Improved(8));
console.log(isPowerTwo_Improved(16));
