const {stringLength} = require('./functions');

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
