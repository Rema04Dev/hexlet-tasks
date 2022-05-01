import jsBeautify from 'js-beautify';
import buildHtml from '../functional-programming/buildHtml.js';

const { html } = jsBeautify;

test('htmlBuilder', () => {
  expect(html(buildHtml())).toMatchSnapshot();
});
