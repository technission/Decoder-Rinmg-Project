// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('');
  function caesar(input, shift, encode = true) {
      // early return of false if shift isn't present, equal to 0, less than -25 or greater than 25
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
          return false;
      } 
      // declare a variable for the result
      let result = "";
      let negShift = -shift;
      // make any input lower case
      const inputWord = input.toLowerCase().split('');
      // loop through the input word
      for (character in inputWord) {
          const letter = inputWord[character]; // this is the letter from the string untouched
          const index = alphabet.indexOf(letter); // this is the index of the letter before shift
          let newIndex;
          // if encode is true then it needs to "encode"
          if (encode) {
              // if index plus shift is > 26
              if (index + shift > 26 ) {
                  newIndex = ((index + shift) - 26);
              } else if (index + shift < 0) {
                  newIndex = ((index + shift) + 26);
              } else {
                  newIndex = index + shift;
              }
          }
          if (!encode) {
            if (index - negShift < 0) {
                console.log('negShift', negShift)
                newIndex = ((index - negShift) + 26);
                console.log("index", index)
                console.log("newIndex", newIndex)
            } else {
                newIndex = index - negShift;
                console.log('negShift', negShift)
                console.log("index", index)
                console.log("newIndex", newIndex)
            }
          }
          
          
          
          const encodedLetter = alphabet[newIndex]; // this the new letter based on the shift
          // if inputWord[character] is included in alphabet...
          if (alphabet.includes(letter)) {
              //...add the new letter to the result
              result = result + encodedLetter
              //console.log(result)
          } else if (!alphabet.includes(letter)) {
              result = result + letter;
          }
      }
      return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
