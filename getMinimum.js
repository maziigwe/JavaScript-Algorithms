// class minNumber {
//   min = Number.MAX_VALUE;
//   constructor(list) {
//     this.list = list;
//   }

//   getMinimum() {
//     for (let i = 0; i <= this.list.length; i++) {
//         this.list[i];
//       if (this.list[i] < min) {
//         min = this.list[i];
//       }
//     }
//     return this.min;
//   }
// }

// const min = new minNumber([5, 2, 4, 1]);
// console.log(min.getMinimum());

// function getMinimum(list = []) {
//   if (list.length === 0) {
//     return console.error("Array can't be empty!");
//   }

//   let minimum = Number.MAX_VALUE;
//   for (let i = 0; i <= list.length; i++) {
//     if (minimum > list[i]) {
//       minimum = list[i];
//     }
//   }
//   return minimum;
// }
// console.log(getMinimum([]));

// function oddNumberORevenNumber(number) {
//   return number % 2 === 0 ? true : false;
// }

// console.log(oddNumberORevenNumber(13));

function getMinimum(list = []) {
  if (list.length === 0) {
    return console.error("Array can't be empty!");
  }

  let minimum = list[0];
  for (let value of list) {
    if (value < minimum) {
      minimum = value;
    }
  }
  return minimum;
}
console.log(getMinimum([5, 3, 1, -4]));

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(14));
