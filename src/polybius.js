// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let polyCode = {
    '11': 'a',
    '21': 'b',
    '31': 'c',
    '41': 'd',
    '51': 'e',
    '12': 'f',
    '22': 'g',
    '32': 'h',
    '42': 'i/j',
    '52': 'k',
    '13': 'l',
    '23': 'm',
    '33': 'n',
    '43': 'o',
    '53': 'p',
    '14': 'q',
    '24': 'r',
    '34': 's',
    '44': 't',
    '54': 'u',
    '15': 'v',
    '25': 'w',
    '35': 'x',
    '45': 'y',
    '55': 'z'
  };

  let alphabet = "abcdefghklmnopqrstuvwxyz";
  alphabet = alphabet.split('');

  function polybius(input, encode = true) {
    // helper function to encode a string
    const encodeString = function(input, polyCode) {
      let alphabet = "abcdefghklmnopqrstuvwxyz";
      alphabet = alphabet.split('');
      const letters = Object.values(polyCode);
      const numbers = Object.keys(polyCode);
      input = input.toLowerCase().split('');
      let result = "";
      for (char in input) {
        const letter = input[char];
        if (alphabet.includes(letter)) {
          // find the index of the letter in polyCode
          const letterIndex = letters.indexOf(letter); // this is the index of the letter from encodeInput
          const encodedNumber = numbers[letterIndex]; // this is the number based on the position of the letter from the keys
          result += encodedNumber;
        } else if (!alphabet.includes(letter)) {
            // if letter is i or j then just put 42 in the result
            if (letter === "i" || letter === "j") {
              result += "42";
            } else {
              // this would be for spaces or other non alpha characters
              result += letter;
            }
        }
      }
      return result;
    };

    // helper function to decode a string
    const decodeString = function(input, polyCode) {
      let result = "";
      const letters = Object.values(polyCode);
      const numbers = Object.keys(polyCode);
      // check to see if the number inputted is odd without the spaces
      if (input.replace(/ /g, '').length % 2 !== 0) {
        return false;
      } else {
        input = input.split('');
        // loop through the input
        for (let i = 0; i < input.length; i+=2) {
          // check to see if the input at i index is a space
          if(input[i] === " ") {
            // add a space to the result string
            result += " ";
            i--;
          } else if((input[i] + input[i+1]) === "42") {
            // if it's 42 then add i/j to the result string
            result += "(i/j)";
          } else {
              // need to compare the numbers to the polyCode
              const numberIndex = numbers.indexOf(input[i] + input[i+1]); // this is the indexOf the number
              const decodedLetter = letters[numberIndex]; // this is the letter based on the index of the number
              result += decodedLetter;
          }
        }
      }
      return result;
    };

    // process input
    if (encode) {
      // if encode is true, encode input into numbers
      return encodeString(input, polyCode);
    } else {
      // else decode the input into string
      return decodeString(input, polyCode);
    }
    // if encode is false
    // if (!encode) {

    //   // return false if the length of spacelessInput is not even
    //   if (spacelessInput.length % 2 !== 0) {
    //     return false;
    //   } else {
    //       let decodeThis = spacelessInput.split(/(?=(?:..)*$)/); // this is the input without the spaces and with the numbers split into pairs
    //       console.log(decodeThis);
    //       // loop through decode this
    //       for (num in decodeThis) {
    //         // first check to see if it's i/j
    //         if (decodeThis[num] === "42") {
    //           result += "(i/j)"; // add i/j to the string
    //         } else {
    //             // get the index of the decodeThis[num]
    //             const numberIndex = numbers.indexOf(decodeThis[num]); // this is the indexOf the number
    //             const decodedLetter = letters[numberIndex]; // this is the letter based on the index of the number
    //             result += decodedLetter;
    //         }
    //       }
    //   }
    // }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
