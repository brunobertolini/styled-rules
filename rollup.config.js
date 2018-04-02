import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  moduleName: 'styledRules',
  exports: 'named',
  external: 'prop-types',
  globals: {
    'prop-types': 'Propypes'
  },
  targets: [{
    dest: 'build/styled-rules.min.js',
    format: 'umd'
  }],
  plugins: [
    babel(),
    resolve(),
    uglify()
  ]
}
