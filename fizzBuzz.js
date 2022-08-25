function fizzBuzz(intNum) {
  for (let i = 3; i <= intNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz ", i);
    } else if (i % 3 === 0) {
      console.log("Fizz ", i);
    } else if (i % 5 === 0) {
      console.log("Buzz ", i);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);
