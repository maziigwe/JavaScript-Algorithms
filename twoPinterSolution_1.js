//<<-------------Question:----------------->>
//Given an array of integers and a target,
//get two elements whose sum is greater or equal to target.
// E.G  array =[1, 2, 3, 4, 5], target =7; returns [2,5]

function findPair(arr, targetSum) {
  let leftPointer = 0,
    rightPointer = arr.length - 1,
    pairSum = 0;
  //1. create two pointers, leftPointer and rightPointer
  //2. then compute pairSum = leftPointer + rightPointer
  //3. As long as the two pointers have not meet, keep moving the leftPointer to the right direction
  //4. if pairSum = targetSum, return the pointers element
  //5. if pairSum > targetSum, slide rightPointer to the left
  //6. if pairSum < targetSum, slide leftPointer to the right

  if (arr.length === 1) {
    if (arr[0] >= targetSum) {
      return arr;
    } else {
      return [];
    }
  }

  while (leftPointer != rightPointer) {
    pairSum = arr[leftPointer] + arr[rightPointer];

    if (pairSum === targetSum) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (pairSum < targetSum) {
      leftPointer++;
    } else if (pairSum > targetSum) {
      rightPointer--;
    }
  }

  return [];
}

console.log(findPair([1, 2, 3, 4, 5], 7), 7);
console.log(findPair([1, 5, 6], 6), 6);
console.log(findPair([1, 6, 8, 9, 10], 14), 14);
console.log(findPair([9, 13], 14), 14);
console.log(findPair([13], 14), 14);
