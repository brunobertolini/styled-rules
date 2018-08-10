import PropTypes from 'prop-types'
import get from './../../colors'

const sizes = ['tiny', 'small', 'normal', 'large', 'big', 'huge', 'massive']
const textAligns = ['left', 'right', 'center', 'justify', 'initial', 'inherit']
const fontWeights = [
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900,
	'normal',
	'bold',
	'bolder',
	'lighter',
	'number',
	'initial',
	'inherit',
]

const propTypes = {
	family: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	size: PropTypes.oneOf(sizes),

	textAlign: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(textAligns)]),

	lineHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

	weight: PropTypes.oneOf(fontWeights),

	light: PropTypes.bool,
	strong: PropTypes.bool,
	uppercase: PropTypes.bool,
	truncate: PropTypes.bool,

	color: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

const defaultProps = {
	family: false,
	size: 'normal',
	textAlign: false,
	lineHeight: false,
	weight: 400,
	light: false,
	strong: false,
	uppercase: false,
	truncate: false,
}

const rules = {
	family: ({ family }) => `
    @import url('https://fonts.googleapis.com/css?family=${family}:300,400,700');
    font-family: '${family}', 'sans-serif';
  `,

	size: ({ size, theme }) => `
    font-size: ${theme.font.sizes[size]};
  `,

	lineHeight: ({ lineHeight }) => `
    line-height: ${lineHeight};
  `,

	weight: ({ light, strong, weight }) => `
    font-weight: ${light ? '300' : strong ? '700' : weight};
  `,

	textAlign: ({ textAlign }) => `text-align: ${textAlign};`,

	uppercase: `
    text-transform: uppercase;
  `,

	truncate: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

	color: ({ color, theme }) => `color: ${get(theme.colors, color)};`,
}

export default { propTypes, defaultProps, rules }
