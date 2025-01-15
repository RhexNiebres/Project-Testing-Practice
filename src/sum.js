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

function caesarCipher(str){
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
      }
    if(str.length === 0) return str;{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
module.exports ={sum, capitalize, reverseString, calculator, caesarCipher} ;
