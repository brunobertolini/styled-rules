import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
	entry: 'src/index.js',
	moduleName: 'styledRules',
	exports: 'named',
	targets: [{
		dest: 'build/styled-rules.min.js',
		format: 'umd'
	}],
	plugins: [
		babel(),
		uglify()
	]
}
