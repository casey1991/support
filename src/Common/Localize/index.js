import * as Polyglot from 'node-polyglot';
export const polyglot = new Polyglot();

polyglot.extend({
  hello_name: 'Hola, %{name}.',
});
