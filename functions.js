// Task 1
const stringLength = str => {
  const length = str.length;
  if (length > 0 && length < 10) {
    return length;
  } else {
    return 'error';
  };
  }

// Task 2
const reverseString = str => {
  return str.split('').reverse().join('');
};

// Task 3
class Calculator {
  add(a, b) {
    return a + b;
  };

  subtract(a, b) {
    return a - b;
  };

  divide(a, b) {
    return a/b;
  };

  multiply(a, b) {
    return a*b;
  };
};

// Task 4
const capitalize = str => {
  const text = str.toLowerCase().split('')
  const one = text.shift().toUpperCase()
  text.unshift(one)
  return text.join('')
};

export {stringLength, reverseString, Calculator, capitalize};
