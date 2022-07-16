function getValifPair(total, items) {
  let pairCount = 0;
  let uniqueItems = new Set([...items]);
  let sameColorItems = [];

  uniqueItems.forEach((item) => {
    sameColorItems = items.filter((a) => a === item);
    pairCount += Math.floor(sameColorItems.length / 2);
  });

  console.log(pairCount);
  //return pairCount;
}

console.log(getValifPair(9, [10, 20, 20, 10, 30, 50, , 60, 70, 50, 10, 10]));
