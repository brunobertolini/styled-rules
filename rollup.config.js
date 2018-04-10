import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    name: 'styledRules',
    file: 'build/styled-rules.min.js',
    format: 'umd',
    exports: 'named',
    globals: {
      'prop-types': 'Propypes'
    }
  },

  plugins: [
    babel(),
    resolve(),
    commonjs(),
    uglify()
  ]
}
