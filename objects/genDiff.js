import _ from 'lodash';
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
const genDiff = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const keys = _.union(keys1, keys2);
  const result = {};
  for (const key of keys) {
    if (object1[key] === object2[key]) {
      result[key] = 'unchanged';
    }
    if (!_.has(object1, key)) {
      result[key] = 'added';
    }
    if (!_.has(object2, key)) {
      result[key] = 'deleted';
    }
    if (_.has(object1, key) && _.has(object2, key) && object1[key] !== object2[key]) {
      result[key] = 'changed';
    }
  }
  return result;
};
console.log(genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
));
export default genDiff;
