import _ from 'lodash';

export default (str) => {
  const words = str.trim().split(' ');
  return _.last(words).length;
};
