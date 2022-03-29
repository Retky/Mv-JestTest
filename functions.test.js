const {stringLength} = require('./functions');

// Task 1
describe('stringLength', () => {
  test('second == 6', () => {
    expect(stringLength('second')).toBe(6);
  });
});
