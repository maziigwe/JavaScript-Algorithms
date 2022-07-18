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

const coins = [100, 50, 20, 10, 5, 2, 1];

console.log(computeChange(coins, 66));
