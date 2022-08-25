function reverseInt(intNum) {
  let output = [...intNum.toString()].reverse().join("");

  return parseInt(output) * Math.sign(intNum);
}

console.log(reverseInt(-123));
