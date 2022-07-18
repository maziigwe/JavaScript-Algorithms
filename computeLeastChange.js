function computeChange(coins, amount) {
  let selectedCoins = {
    selectedChange: {},
    numberOfChange: 0,
  };
  for (let coin of coins) {
    const count = Math.floor(amount / coin);
    if (count > 0) {
      selectedCoins.selectedChange[coin] = count;
      amount -= count * coin;
      selectedCoins.numberOfChange += count;
    }
  }
  //console.log(selectedCoins);
  return selectedCoins;
}

function computeLeastChange(coins = [], amount) {
  let outputs = [];
  for (let i = 0; i < coins.length; i++) {
    const newCoins = coins.slice(i);
    const compute = computeChange(newCoins, amount);
    outputs[i] = compute;
  }

  let minNumberOfChange = Number.MAX_SAFE_INTEGER;
  let minChange;
  for (let items of outputs) {
    if (items.numberOfChange < minNumberOfChange) {
      minNumberOfChange = items.numberOfChange;
      minChange = items;
    }
  }
  return minChange;

  // console.log(outputs);
}

// const coins = [100, 50, 20, 10, 5, 2, 1];
const coins = [8, 6, 5, 1];

console.log(computeLeastChange(coins, 11));
