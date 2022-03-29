// Task 1
const stringLength = str => {
  const length = str.length;
  if (length > 0 && length < 10) {
    return length
  } else {
    return 'error'
  }
};

module.exports = {stringLength};
