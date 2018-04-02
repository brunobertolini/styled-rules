import PropTypes from 'prop-types'
import get from './../../utils/colors'

const borderStyles = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']

const propTypes = {
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  borderWidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  borderStyle: PropTypes.oneOf(borderStyles),

  borderColor: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  borderRadius: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

const defaultProps = {
  border: false,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
  borderRadius: false
}

const rules = {
  border: {
    _: ({ border }) => `border: ${border};`,

    true: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    vertical: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth} 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    horizontal: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: 0 ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    top: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth} 0 0 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    bottom: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: 0 0 ${borderWidth} 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    left: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: 0 0 0 ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    right: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: 0 ${borderWidth} 0 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    noTop: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: 0 ${borderWidth} ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    noBottom: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth} ${borderWidth} 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    noLeft: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth} ${borderWidth} ${borderWidth} 0;
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `,

    noRight: ({ borderWidth, borderStyle, borderColor, theme }) => `
      border-width: ${borderWidth} 0 ${borderWidth} ${borderWidth};
      border-style: ${borderStyle};
      border-color: ${get(theme.colors, borderColor)};
    `
  },

  borderRadius: {
    _: ({ borderRadius }) => `border-radius: ${borderRadius};`,
    true: ({ theme }) => `border-radius: ${theme.dimensions.borderRadius};`,
    top: ({ theme }) => `border-radius: ${theme.dimensions.borderRadius} ${theme.dimensions.borderRadius} 0 0;`,
    bottom: ({ theme }) => `border-radius: 0 0 ${theme.dimensions.borderRadius} ${theme.dimensions.borderRadius};`,
    left: ({ theme }) => `border-radius: ${theme.dimensions.borderRadius} 0 0 ${theme.dimensions.borderRadius};`,
    right: ({ theme }) => `border-radius: 0 ${theme.dimensions.borderRadius} ${theme.dimensions.borderRadius} 0;`,
    topLeft: ({ theme }) => `border-radius: ${theme.dimensions.borderRadius} 0 0 0;`,
    topRight: ({ theme }) => `border-radius: 0 ${theme.dimensions.borderRadius} 0 0;`,
    bottomLeft: ({ theme }) => `border-radius: 0 0 0 0 ${theme.dimensions.borderRadius};`,
    bottomRight: ({ theme }) => `border-radius: 0 0 ${theme.dimensions.borderRadius} ;0`
  }
}

export default { propTypes, defaultProps, rules }
