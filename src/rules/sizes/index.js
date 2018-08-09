import PropTypes from "prop-types";

const propTypes = {
	full: PropTypes.bool,

	minHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	height: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	maxHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	minWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	width: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	maxWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

const defaultProps = {
	full: false,
	minHeight: false,
	height: false,
	maxHeight: false,
	minWidth: false,
	width: false,
	maxWidth: false
};

const rules = {
	full: `height: 100vh;`,
	minHeight: ({ minHeight }) => `min-height: ${minHeight};`,
	height: ({ height }) => `height: ${height};`,
	maxHeight: ({ maxHeight }) => `max-height: ${maxHeight};`,
	minWidth: ({ minWidth }) => `min-width: ${minWidth};`,
	width: ({ width }) => `width: ${width};`,
	maxWidth: ({ maxWidth }) => `max-width: ${maxWidth};`
};

export default { propTypes, defaultProps, rules };
