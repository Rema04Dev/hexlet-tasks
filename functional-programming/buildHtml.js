import { table, tr, td } from './tags/tags.js';

export default () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions')),
);