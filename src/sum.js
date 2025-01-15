// import './styles.css'; // Import the CSS file
function sum(a,b){
    return a + b;
}


function capitalize(str){
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
      }
    if(str.length === 0) return str;{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

function reverseString(str){
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
      }
      return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Cannot divide by zero');
      return a / b;
    },
    multiply: (a, b) => a * b,
}

function caesarCipher(str, shift) {
    const shiftChar = (char, shift) => {
      const isUpperCase = char >= 'A' && char <= 'Z';//Check characters
      const isLowerCase = char >= 'a' && char <= 'z';
      if (!isUpperCase && !isLowerCase) return char; //Non-alphabetical characters returned as is
  
      const charCode = char.charCodeAt(0);//Pet char ASCII codde
      const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  
      // Perform the shift and wrap around using modulo
      return String.fromCharCode(((charCode - base + shift) % 26 + 26) % 26 + base);
    };
  
    return str
      .split('')
      .map((char) => shiftChar(char, shift))
      .join('');
  }

  function analyzeArray(arr){
    if (arr.length === 0) {
        return {
          average: 0,
          min: null,
          max: null,
          length: 0
        };
      }

      const sum = arr.reduce((acc, num) => acc + num, 0);
      const average = sum / arr.length;

      const min = Math.min(...arr);
      const max = Math.max(...arr);

      const length = arr.length;

      return {
        average,
        min,
        max,
        length
      };
  }


  console.log(caesarCipher('xyz', 3));
  console.log(caesarCipher('HeLLo', 3));
  console.log(caesarCipher('HeLLo, World', 3));


module.exports ={sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray} ;
