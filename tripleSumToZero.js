//<---------QUESTION:----------->>
//Given arrays of integers, find the sum of three
//numbers whose sum equals to zero.

//Example: [-3, 0, 1, 2, -1, 1, -2] returns [ [-3, 1, 2], [-2, 0, 2], [-2,1,1], [-1,0, 1] ]
//[-3, -2, -1, 0, 1, 1, 2]

//<--------SOLUTION------------->>
// First sort the given array.
// initialize the leftPointer
// Make the negative of the minimum int a target at a time.
// Slide leftPointer to the RHS and leftPointer to the LHS
// Then find two other integers whose sum equals target

function tripleToZero(arr) {
  arr.sort((a, b) => a - b);
  tripleSum = [];

  for (let i = 0; i < arr.length; i++) {
    let target = -arr[i];

    findPair(arr, i + 1, target, tripleSum);
  }

  return tripleSum;
}

function findPair(arr, lefPointer, targetSum, tripleSum) {
  let rightPointer = arr.length - 1;

  while (lefPointer < rightPointer) {
    let pairSum = arr[lefPointer] + arr[rightPointer];
    if (pairSum === targetSum) {
      tripleSum.push([-targetSum, arr[lefPointer], arr[rightPointer]]);
      lefPointer++;
      rightPointer--;
    } else if (pairSum > targetSum) {
      rightPointer--;
    } else if (pairSum < targetSum) {
      lefPointer++;
    }
  }
}

console.log(tripleToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(tripleToZero([-5, 2, -1, -2, 3]));
