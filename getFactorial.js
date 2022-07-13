//Class base solution

//Time complexity
//Best case = Average case = worst case = O(n)
const _number = new WeakMap();
const _createFactorial = new WeakMap();

class Factorial {
  constructor(number) {
    _number.set(this, number);

    _createFactorial.set(this, () => {
      let sum = 1;
      for (let i = sum; i < _number.get(this); i++) {
        sum += i * sum;
      }
      return sum;
    });
  }
  getFactorial() {
    return _createFactorial.get(this)();
  }
}

const factorial = new Factorial(5);
console.log(factorial.getFactorial());

//Using recursion
function factorials(number) {
  return number === 1 ? 1 : number * factorials(number - 1);
}

console.log(factorials(5));

//Time complexity
//Best case = Average case = worst case = O(n)
