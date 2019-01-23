const babel = require('rollup-plugin-babel');
const changeCase = require('change-case');
const commonjs = require('rollup-plugin-commonjs');
const createBanner = require('create-banner');
const nodeResolve = require('rollup-plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');
const pkg = require('./package');

const banner = createBanner({
  data: {
    year: '2019-present',
  },
});
const plugins = [
  nodeResolve(),
  commonjs(),
  babel(),
];

module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        name: changeCase.pascalCase(pkg.name),
        file: `dist/${pkg.name}.js`,
        format: 'umd',
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
    plugins,
  },
  {
    input: 'src/index.js',
    output: {
      banner: createBanner({
        template: 'inline',
        data: {
          year: '2019-present',
        },
      }),
      name: changeCase.pascalCase(pkg.name),
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      compact: true,
    },
    plugins: plugins.concat([
      uglify({
        output: {
          comments: /^!/,
        },
      }),
    ]),
  },
];
