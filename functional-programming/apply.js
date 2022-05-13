const apply = (count, fn, value) => (count === 0 ? value : apply(count - 1, fn, fn(value)));
console.log('123')
  
  export default apply;