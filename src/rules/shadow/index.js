import PropTypes from "prop-types";
import get from "./../../colors";

const propTypes = {
	shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	inset: PropTypes.bool,

	hoffset: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	voffset: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	blur: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	spread: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	transparency: PropTypes.number
};

const defaultProps = {
	shadow: false,
	inset: false,
	hoffset: "0px",
	voffset: "0px",
	blur: "16px",
	spread: "0",
	transparency: 0.025,
	shadowColor: false
};

const rules = {
	shadow: {
		_: ({ shadow }) => `box-shadow: ${shadow};`,

		true: ({
			inset,
			hoffset,
			voffset,
			blur,
			spread,
			shadowColor,
			transparency,
			theme
		}) => `
      box-shadow:
        ${hoffset ? hoffset : ""}
        ${voffset ? voffset : ""}
        ${blur ? blur : ""}
        ${spread ? spread : ""}
        ${
					shadowColor
						? get(theme.colors, shadowColor)
						: `rgba(0,0,0,${transparency})`
				}
        ${inset ? "inset" : ""}
      ;
    `
	}
};

export default { propTypes, defaultProps, rules };
