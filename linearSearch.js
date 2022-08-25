function linearSearch(list, item, comparatorFxn) {
  let index = 0;
  for (let data of list) {
    if (item === data) return index;

    if (typeof item === "object" && item !== null && comparatorFxn(item, data))
      return index;

    index++;
  }
}

//items = [3, 5, 10, 11, 9, 4, 1];
items = [
  { name: "Igwe", age: 12 },
  { name: "Acha", age: 6 },
];
console.log(
  linearSearch(items, { name: "Acha", age: 6 }, function (item, element) {
    return item.name === element.name;
  })
);
