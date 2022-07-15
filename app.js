function getValifPair(total, items) {
  let pairCount = 0;
  let sameColorItems = [];
  let sortedAr = items.sort();
  let startItem = sortedAr[0];
  let pointer1 = 0;
  sortedAr.push(Number.MAX_VALUE);

  for (let i = 0; i <= total + 1; i++) {
    if (sortedAr[i] > startItem) {
      sameColorItems = sortedAr.slice(pointer1, i);
      pairCount += Math.floor(sameColorItems.length / 2);
      startItem = sortedAr[i];
      pointer1 = i;
    }
  }
  return pairCount;
}

console.log(getValifPair(9, [10, 20, 20, 10, 30, 50, 10, 10]));
