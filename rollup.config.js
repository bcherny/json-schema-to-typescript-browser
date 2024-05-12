import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    globals: {
      prettier: 'prettierWithOptions'
    },
    name: 'jstt'
  },
  external: ['prettier'],
  plugins: [resolve(), commonjs(), nodePolyfills()]
};
