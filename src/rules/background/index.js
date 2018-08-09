import PropTypes from "prop-types";
import get from "./../../colors";

const propTypes = {
	bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	bgColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

const defaultProps = {
	bg: false,
	bgColor: false
};

const rules = {
	bg: ({ bg }) => `background: ${bg};`,
	bgColor: ({ bgColor, theme }) =>
		`background-color: ${get(theme.colors, bgColor)};`
};

export default { propTypes, defaultProps, rules };
