// Greedy approach
function knapSack(items, sackCapacity) {
  let sack = { items: [], value: 0, weight: 0 };

  let remainingCapacity = sackCapacity;
  for (let element of items) {
    if (element.weight <= remainingCapacity) {
      sack.items.push(element);
      sack.value += element.value;
      sack.weight += element.weight;
      remainingCapacity -= element.weight;
    }
  }
  return sack;
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];
console.log(knapSack(items, 8));
