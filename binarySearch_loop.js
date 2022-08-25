function binarySearch(items = [], item) {
  let startIndex = 0;
  let endIndex = items.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (items[middleIndex] === item) {
      return middleIndex;
    }

    if (items[middleIndex] < item) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return "Not found!";
}

items = [1, 5, 9, 13, 99, 100];

console.log(binarySearch(items, 13));
