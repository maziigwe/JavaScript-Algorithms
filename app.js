//Class solution

const _list = new WeakMap();
const _maxCap = new WeakMap();
const _optimize = new WeakMap();

class KnapSack {
  constructor(list = [], maxCap) {
    _list.set(this, list);
    _maxCap.set(this, maxCap);
    _optimize.set(this, (list, maxCap, listSize) => {
      if (maxCap === 0 || listSize < 0) {
        return { items: [], value: 0, weight: 0 };
      }
      if (maxCap < list[listSize].weight) {
        return _optimize.get(this)(list, maxCap, listSize - 1);
      }

      const sackWithItem = _optimize.get(this)(
        list,
        maxCap - list[listSize].weight,
        listSize - 1
      );
      const sackWithoutItem = _optimize.get(this)(list, maxCap, listSize - 1);

      const valueWithItem = sackWithItem.value + list[listSize].value;
      const valueWithoutItem = sackWithoutItem.value;

      if (valueWithItem > valueWithoutItem) {
        const updatedStack = {
          items: sackWithItem.items.concat(list[listSize]),
          value: sackWithItem.value + list[listSize].value,
          weight: sackWithItem.weight + list[listSize].weight,
        };
        return updatedStack;
      } else {
        return sackWithoutItem;
      }
    });
  }

  get getOptimized() {
    return _optimize.get(this)(
      _list.get(this),
      _maxCap.get(this),
      _list.get(this).length - 1
    );
  }
}

//console.log(knapSack(items, 8, items.length - 1));
// const knapSack = new KnapSack(items, 8);
// console.log(knapSack.getOptimized);

//Function solution
function knapSack(list, maxCap, listIndex, memo) {
  if (maxCap === 0 || listIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (maxCap < list[listIndex].weight) {
    return knapSack(list, maxCap, listIndex - 1, memo);
  }

  const sackWithItem = knapSack(
    list,
    maxCap - list[listIndex].weight,
    listIndex - 1,
    memo
  );
  const sackWithoutItem = knapSack(list, maxCap, listIndex - 1, memo);

  const valueWithItem = sackWithItem.value + list[listIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedStack = {
      items: sackWithItem.items.concat(list[listIndex]),
      value: sackWithItem.value + list[listIndex].value,
      weight: sackWithItem.weight + list[listIndex].weight,
    };
    return updatedStack;
  } else {
    return sackWithoutItem;
  }
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

function knapSackFn(items, maxCap, index) {
  let memo = Array.from(Array(maxCap + 1), () => {
    Array(items.length).fill(undefined);
  });

  console.log(memo);
  //knapSack(items, maxCap, index, memo);
}

console.log(knapSackFn(items, 8, items.length - 1));
