import dnaToRna from '../introduction/dnaToRna.js';
import dnaToRnaObject from '../objects/dnaToRna.js';

test('dnaToRna', () => {
  expect(dnaToRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
  expect(dnaToRna('CCGTA')).toBe('GGCAU');
  expect(dnaToRna('')).toBe('');
  expect(dnaToRna('ACNTG')).toBeNull();
  expect(dnaToRnaObject('CCGTA')).toBe('GGCAU');
  expect(dnaToRnaObject('')).toBe('');
  expect(dnaToRnaObject('ACNTG')).toBeNull();
});
