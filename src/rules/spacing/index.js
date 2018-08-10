import PropTypes from "prop-types";

const types = [PropTypes.bool, PropTypes.string, PropTypes.number];

const propTypes = prop => ({
	[prop]: PropTypes.oneOfType(types),
	[`${prop}Top`]: PropTypes.oneOfType(types),
	[`${prop}Bottom`]: PropTypes.oneOfType(types),
	[`${prop}Left`]: PropTypes.oneOfType(types),
	[`${prop}Right`]: PropTypes.oneOfType(types),
	[`${prop}Horizontal`]: PropTypes.oneOfType(types),
	[`${prop}Vertical`]: PropTypes.oneOfType(types)
});

const defaultProps = prop => ({
	[prop]: false,
	[`${prop}Top`]: false,
	[`${prop}Bottom`]: false,
	[`${prop}Left`]: false,
	[`${prop}Right`]: false,
	[`${prop}Horizontal`]: false,
	[`${prop}Vertical`]: false
});

const choose = {
	boolean: (props, prop) => props.theme.dimensions[prop],
	string: (props, prop, value) => value,
	number: (props, prop, value) => `${props.theme.dimensions.em(value)}px`
};

const rules = prop => ({
	[prop]: {
		_: props => `${prop}: ${props[prop]};`,
		true: props => `${prop}: ${props.theme.dimensions[prop]};`,
		vertical: props => `${prop}: ${props.theme.dimensions[prop]} 0;`,
		horizontal: props => `${prop}: 0 ${props.theme.dimensions[prop]};`,
		top: props => `${prop}-top: ${props.theme.dimensions[prop]};`,
		bottom: props => `${prop}-bottom: ${props.theme.dimensions[prop]};`,
		left: props => `${prop}-left: ${props.theme.dimensions[prop]};`,
		right: props => `${prop}-right: ${props.theme.dimensions[prop]};`,
		noTop: props =>
			`${prop}: 0 ${props.theme.dimensions[prop]} ${
				props.theme.dimensions[prop]
			};`,
		noBottom: props =>
			`${prop}: ${props.theme.dimensions[prop]} ${
				props.theme.dimensions[prop]
			} 0;`,
		noLeft: props =>
			`${prop}: ${props.theme.dimensions[prop]} ${
				props.theme.dimensions[prop]
			} ${props.theme.dimensions[prop]} 0;`,
		noRight: props =>
			`${prop}: ${props.theme.dimensions[prop]} 0 ${
				props.theme.dimensions[prop]
			} ${props.theme.dimensions[prop]};`
	},

	[`${prop}Top`]: props =>
		`${prop}-top: ${choose[typeof props[`${prop}Top`]](
			props,
			prop,
			props[`${prop}Top`]
		)};`,
	[`${prop}Right`]: props =>
		`${prop}-right: ${choose[typeof props[`${prop}Right`]](
			props,
			prop,
			props[`${prop}Right`]
		)};`,
	[`${prop}Bottom`]: props =>
		`${prop}-bottom: ${choose[typeof props[`${prop}Bottom`]](
			props,
			prop,
			props[`${prop}Bottom`]
		)};`,
	[`${prop}Left`]: props =>
		`${prop}-left: ${choose[typeof props[`${prop}Left`]](
			props,
			prop,
			props[`${prop}Left`]
		)};`,
	[`${prop}Vertical`]: props =>
		`${prop}: ${choose[typeof props[`${prop}Vertical`]](
			props,
			prop,
			props[`${prop}Vertical`]
		)} 0;`,
	[`${prop}Horizontal`]: props =>
		`${prop}: 0 ${choose[typeof props[`${prop}Horizontal`]](
			props,
			prop,
			props[`${prop}Horizontal`]
		)};`
});

export default {
	propTypes: { ...propTypes("padding"), ...propTypes("margin") },
	defaultProps: { ...defaultProps("padding"), ...defaultProps("margin") },
	rules: { ...rules("padding"), ...rules("margin") }
};
