import PropTypes from 'prop-types'

const propTypes = {
	scroll: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.oneOf(['horizontal']),
	]),
}

const defaultProps = {
	scroll: false,
}

const rules = {
	scroll: {
		true: `
      overflow-x: hidden;
      overflow-y: auto;
      flex-shrink: none;
    `,
		horizontal: `
      overflow-x: auto;
      overflow-y: hidden;
      flex-shrink: none;
    `,
	},
}

export default { propTypes, defaultProps, rules }
