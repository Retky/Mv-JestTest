import {stringLength, reverseString, Calculator, capitalize} from './functions';

// Task 1
describe('stringLength', () => {
  test('Text == 4', () => {
    expect(stringLength('Text')).toBe(4);
  });
  test('Empty return error', () => {
    expect(stringLength('')).toBe('error');
  });
  test('TextOverTen return error', () => {
    expect(stringLength('textOverTen')).toBe('error');
  });
});

// Task 2
describe('reverseString', () => {
  test('someText = txeTemos', () => {
    expect(reverseString('someText')).toBe('txeTemos');
  });
});

// Task 3
const calc = new Calculator();

describe('Sum', () => {
  test('Is a Function', () => {
    expect(typeof calc.add).toBe('function');
  });
  test('10+3 = 13', () => {
    expect(calc.add(10,3)).toBe(13);
  });
  test('8+8 = 16', () => {
    expect(calc.add(8,8)).toBe(16);
  });
  test('0+4 = 4', () => {
    expect(calc.add(0,4)).toBe(4);
  });
});

describe('Rest', () => {
  test('Is a Function', () => {
    expect(typeof calc.subtract).toBe('function');
  });
  test('10-3 = 7', () => {
    expect(calc.subtract(10,3)).toBe(7);
  });
  test('8-8 = 0', () => {
    expect(calc.subtract(8,8)).toBe(0);
  });
  test('7-4 = 3', () => {
    expect(calc.subtract(7,4)).toBe(3);
  });
});

describe('Divide', () => {
  test('Is a Function', () => {
    expect(typeof calc.divide).toBe('function');
  });
  test('10/4 = 2.5', () => {
    expect(calc.divide(10,4)).toBe(2.5);
  });
  test('8/8 = 1', () => {
    expect(calc.divide(8,8)).toBe(1);
  });
  test('20/4 = 5', () => {
    expect(calc.divide(20,4)).toBe(5);
  });
});

describe('Multiply', () => {
  test('Is a Function', () => {
    expect(typeof calc.multiply).toBe('function');
  });
  test('10*3 = 30', () => {
    expect(calc.multiply(10,3)).toBe(30);
  });
  test('8*8 = 64', () => {
    expect(calc.multiply(8,8)).toBe(64);
  });
  test('1*4 = 4', () => {
    expect(calc.multiply(1,4)).toBe(4);
  });
});

// Task 4
describe('Capitalize', () => {
  test('"hello" = "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello')
  });
});
