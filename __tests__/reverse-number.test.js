import reverseNumber from '../introduction/reverse-number.js';

test('reverse-number', () => {
  expect(reverseNumber(12)).toBe(21);
  expect(reverseNumber(-122)).toBe(-221);
  expect(reverseNumber(8900)).toBe(98);
});
