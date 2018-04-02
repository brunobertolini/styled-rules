import PropTypes from 'prop-types'

const globalCssValues = ['initial', 'inherit', 'unset']
const wrapValue = ['nowrap', 'wrap', 'wrap-reverse', ...globalCssValues]

const justifyValue = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'left',
  'right',
  'baseline',
  'first baseline',
  'last baseline',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'safe center',
  'unsafe center',
  ...globalCssValues
]

const alignValue = [
  'normal',
  'stretch',
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'self-start',
  'self-end',
  'left',
  'right',
  'first baseline',
  'last baseline',
  'safe center',
  'unsafe center',
  ...globalCssValues
]

const propTypes = {
  flexbox: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  center: PropTypes.bool,

  flex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  justify: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(justifyValue)
  ]),

  align: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(alignValue)
  ]),

  self: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(alignValue)
  ]),

  wrap: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(wrapValue)
  ])
}

const defaultProps = {
  flexbox: false,
  column: false,
  reverse: false,
  center: false,
  flex: false,
  justify: false,
  align: false,
  self: false,
  wrap: false
}

export { propTypes, defaultProps }
