function maxCha(word) {
  const chaMap = {};
  let maxCha = "";
  let maxNum = 0;

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
