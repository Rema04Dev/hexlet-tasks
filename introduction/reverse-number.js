export default (int) => {
  const strInt = String(Math.abs(int));
  const reversedNumber = Number(strInt.split('').reverse().join(''));
  const result = int >= 0 ? reversedNumber : -reversedNumber;
  return result;
};
