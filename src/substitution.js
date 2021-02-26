// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const repeat = function(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false;
      }
    }
    return true;
  }
  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  normalAlphabet = normalAlphabet.split('');

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !repeat(alphabet)) {
      return false;
    }
    
    alphabet = alphabet.split('');
    
    
    

    // helper function to encode the string
    const encodeString = function(input, alphabet) {
      // make the input lowercase
      input = input.toLowerCase().split('');
      let result = "";
      // loop through the input
      for (char in input) {
        const character = input[char];
        let indexOfChar = normalAlphabet.indexOf(character); // this is the index of the letter in the normalAlphabet
        let encodedLetter = alphabet[indexOfChar]; // this is the index of the letter in the encoded alphabet
        if (character === " ") {
          result += character;
        } else {
          result += encodedLetter;
        }

      }
      return result;
    }

    // helper function to decode the string
    const decodeString = function(input, alphabet) {
      // make the input lowercase
      input = input.toLowerCase().split('');
      let result = "";
      // loop through the input
      for (char in input) {
        const character = input[char];
        let indexOfChar = alphabet.indexOf(character); // this is the index of the letter in the normalAlphabet
        let encodedLetter = normalAlphabet[indexOfChar]; // this is the index of the letter in the encoded alphabet
        if (character === " ") {
          result += character;
        } else {
          result += encodedLetter;
        }
      }
      return result
    }

    // if encode is true
    if(encode) {
      // run helper function for encoding
      return encodeString(input, alphabet);
    } else if (!encode) {
      return decodeString(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
