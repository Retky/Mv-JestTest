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

module.exports = {stringLength, reverseString};
