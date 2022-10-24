function maxCha(word) {
  const chaMap = {};
  let maxCha = "";
  let maxNum = 0;

  //1. Create an array of the characters
  //2. Initialize an empty object to store all characters {character: frequency}
  //3. iterate the object to get the maxCharater

  word.split("").forEach((c) => {
    if (chaMap[c]) {
      chaMap[c]++;
    } else {
      chaMap[c] = 1;
    }
  });

  for (let ch in chaMap) {
    if (chaMap[ch] > maxNum) {
      maxNum = chaMap[ch];
      maxCha = ch;
    }
  }

  return [`${maxCha} => ${maxNum}`];
}

console.log(maxCha("javaScripttt"));
