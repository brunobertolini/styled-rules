import PropTypes from 'prop-types'
import get from './../../utils/colors'

const sizes = ['tiny', 'small', 'normal', 'large', 'big', 'huge']
const textAligns = ['left', 'right', 'center', 'justify', 'initial', 'inherit']
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900, 'normal', 'bold', 'bolder', 'lighter', 'number', 'initial', 'inherit']

const propTypes = {
  size: PropTypes.oneOf(sizes),

  textAlign: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(textAligns)
  ]),

  lineHeight: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),

  weight: PropTypes.oneOf(fontWeights),

  light: PropTypes.bool,
  strong: PropTypes.bool,
  uppercase: PropTypes.bool,
  truncate: PropTypes.bool,

  color: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

const defaultProps = {
  size: 'normal',
  textAlign: false,
  lineHeight: 1,
  weight: 400,
  light: false,
  strong: false,
  uppercase: false,
  truncate: false
}

const rules = {
  size: {
    tiny: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`,
    small: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`,
    normal: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`,
    large: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`,
    big: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`,
    huge: ({ size, theme }) => `font-size: ${theme.dimensions.fontSize[size]};`
  },

  textAlign: ({ textAlign }) => `text-align: ${textAlign};`,
  lineHeight: ({ lineHeight }) => `line-height: ${lineHeight};`,

  weight: ({ light, strong, weight }) => `
    font-weight: ${light ? '300' : strong ? '700' : weight};
  `,

  uppercase: `
    text-transform: uppercase;
  `,

  truncate: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  color: ({ color, theme }) => `color: ${get(theme.colors, color)};`
}

export default { propTypes, defaultProps, rules }
