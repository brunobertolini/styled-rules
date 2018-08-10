import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const plugins = [babel(), commonjs(), uglify()]

export default [
	{
		plugins,
		input: 'src/index.js',
		output: {
			name: 'rules',
			file: 'lib/index.js',
			format: 'cjs',
			interop: false,
		},
	},
	{
		plugins,
		input: 'src/colors/index.js',
		output: {
			name: 'colors',
			file: 'colors/index.js',
			format: 'cjs',
			interop: false,
		},
	},
]
