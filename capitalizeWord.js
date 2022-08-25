//NO.1 <<<<<<<<<<<<<<<<<<<<<<
//  function capitalizeWords(words){

// let output = words.split(' ')

// return output.map(
//   m=> m[0].toUpperCase()
//        +
//        m.substring(1)
//        .toLowerCase()).join(' ')

//  }

// Using regEx
//NO. 2
function capitalizeWords(words) {
  return words.replace(/\b[a-zA-Z]/g, (ch) => ch.toUpperCase());
}

console.log(capitalizeWords("I am a frontEnd developer."));
