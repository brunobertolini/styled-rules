import PropTypes from "prop-types";

const propTypes = {
	margin: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	marginSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	paddingSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

const defaultProps = {
	margin: false,
	padding: false,
	marginSize: false,
	paddingSize: false
};

const rules = prop => ({
	[prop]: {
		_: props => `${prop}: ${props[prop]};`,
		true: props =>
			`${prop}: ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		vertical: props =>
			`${prop}: ${props[`${prop}Size`] || props.theme.spacing[prop]} 0;`,
		horizontal: props =>
			`${prop}: 0 ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		top: props =>
			`${prop}-top: ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		bottom: props =>
			`${prop}-bottom: ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		left: props =>
			`${prop}-left: ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		right: props =>
			`${prop}-right: ${props[`${prop}Size`] || props.theme.spacing[prop]};`,
		noTop: props =>
			`${prop}: 0 ${props[`${prop}Size`] || props.theme.spacing[prop]} ${props[
				`${prop}Size`
			] || props.theme.spacing[prop]};`,
		noBottom: props =>
			`${prop}: ${props[`${prop}Size`] || props.theme.spacing[prop]} ${props[
				`${prop}Size`
			] || props.theme.spacing[prop]} 0;`,
		noLeft: props =>
			`${prop}: ${props[`${prop}Size`] || props.theme.spacing[prop]} ${props[
				`${prop}Size`
			] || props.theme.spacing[prop]} ${props[`${prop}Size`] ||
				props.theme.spacing[prop]} 0;`,
		noRight: props =>
			`${prop}: ${props[`${prop}Size`] || props.theme.spacing[prop]} 0 ${props[
				`${prop}Size`
			] || props.theme.spacing[prop]} ${props[`${prop}Size`] ||
				props.theme.spacing[prop]};`
	}
});

export default {
	propTypes,
	defaultProps,
	rules: { ...rules("padding"), ...rules("margin") }
};
