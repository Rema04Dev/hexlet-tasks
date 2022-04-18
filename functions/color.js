import _ from 'lodash';

// export const rgbToHex = (r, g, b) => {
//   const hex = [r, g, b]
//     .map((channel) => channel.toString(16).padStart(2, '0'))
//     .join('');
//   return `#${hex}`;
// };

// export const hexToRgb = (hex) => {
//   const [r, g, b] = _.chunk(hex.slice(1), 2)
//     .map((channel) => channel.join(''))
//     .map((channel) => parseInt(channel, 16));
//   return { r, g, b };
// };

export const hexToRgb = (hex) => {
  const hexCode = hex.slice(1);
  const [r, g, b] = _.chunk(hexCode, 2)
    .map((channel) => channel.join(''))
    .map((channel) => parseInt(channel, 16));
  return { r, g, b };
};

export const rgbToHex = (r, g, b) => {
  const hex = [r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
};
