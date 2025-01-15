const { template } = require('@babel/core');
const {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./sum')


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});


test('first character of string tobe capitalized', () =>{
    expect(capitalize('summer')).toBe('Summer')
});

test('String to be returned in reveerse', () =>{
    expect(reverseString('summer')).toBe('remmus')
});

describe('Calculator Operations', () =>{
    test('adds two numbers',() => {
        expect(calculator.add(1,2)).toEqual(3)

    });
   
    test('subtact two numbers', () => {
        expect(calculator.subtract(2, 1)).toEqual(1)
    });

    test('multiplies two number', () => {
        expect(calculator.multiply(2, 1)).toEqual(2)
    });

    test ('to divide two numbers', ()=> {
        expect(calculator.divide(20,2)).toEqual(10)
    });
    
    test ('throw error  dividing by zero', ()=> {
        expect(()=>calculator.divide(20,0)).toThrow('Cannot divide by zero')
    });
});

describe('Caesar Cipher', () => {
    test('shifts alphabetic characters correctly', () => {
      expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('preserves uppercase and lowercase letters', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('preserves punctuation and uppercase', () => {
        expect(caesarCipher('HeLLo,World!', 3)).toBe('KhOOr,Zruog!');
    });
});

describe('analyzeArray', () =>{
    test('calculates average, min, max and length correctly',() => {
        const object = analyzeArray([1,8,3,4,2,6]);

        object == {
           average: 4,
           min: 1,
           max: 8,
           length: 6
        };
    });
});
