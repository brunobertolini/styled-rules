import PropTypes from 'prop-types'

const positions = ['absolute', 'initial', 'relative', 'static']

const propTypes = {
	position: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(positions)]),

	top: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.string,
	]),

	bottom: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.string,
	]),

	left: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.string,
	]),

	right: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.string,
	]),
}

const defaultProps = {
	position: false,
	top: false,
	bottom: false,
	left: false,
	right: false,
}

const rules = {
	position: ({ position }) => `position: ${position};`,
	top: ({ top }) => `top: ${top};`,
	bottom: ({ bottom }) => `bottom: ${bottom};`,
	left: ({ left }) => `left: ${left};`,
	right: ({ right }) => `right: ${right};`,
}

export default { propTypes, defaultProps, rules }
