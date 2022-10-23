function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//1. remove all non-letters using regEx & replace function.
//2. convert all to lowerCase.
//3. split all characters into arrays.
//4. sort alphabetically
//5. join characters again to form a string
//6. compare the two strings
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(isAnagram("below", "elbow"));
