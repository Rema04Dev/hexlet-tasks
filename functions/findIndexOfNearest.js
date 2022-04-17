const findIndexOfNearest = (numbers, seeking) => {
  if (numbers.length === 0) {
    return null;
  }
  const differences = numbers
    .map((number) => Math.abs(number - seeking));
  const smallestDiff = Math.min(...differences);
  return differences.indexOf(smallestDiff);
};

export default findIndexOfNearest;
