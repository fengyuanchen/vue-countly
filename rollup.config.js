import babel from 'rollup-plugin-babel';
import changeCase from 'change-case';
import commonjs from 'rollup-plugin-commonjs';
import createBanner from 'create-banner';
import nodeResolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const name = changeCase.pascalCase(pkg.name);
const data = {
  year: '2019-present',
};
const banner = createBanner({
  data,
});

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
    },
    {
      name,
      banner: createBanner({
        data,
        template: 'inline',
      }),
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      compact: true,
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(),
  ],
};
