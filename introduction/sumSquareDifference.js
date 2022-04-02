const sumSquare = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    result += i;
  }
  return result ** 2;
};

const squareSum = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    result += i ** 2;
  }
  return result;
};

const sumSquareDifference = (n) => sumSquare(n) - squareSum(n);

export default sumSquareDifference;
