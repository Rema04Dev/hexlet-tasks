import isPerfect from '../introduction/isPerfect.js';

test('isPerfect', () => {
  expect(isPerfect(6)).toEqual(true);
  expect(isPerfect(28)).toEqual(true);
  expect(isPerfect(496)).toEqual(true);
  expect(isPerfect(8128)).toEqual(true);
  expect(isPerfect(42)).toEqual(false);
  expect(isPerfect(100)).toEqual(false);
});
