import PropTypes from 'prop-types'

const propTypes = prop => ({
  [prop]: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
})

const defaultProps = prop => ({
  [prop]: false
})

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
    noTop: props => `${prop}: 0 ${props.theme.dimensions[prop]} ${props.theme.dimensions[prop]};`,
    noBottom: props => `${prop}: ${props.theme.dimensions[prop]} ${props.theme.dimensions[prop]} 0;`,
    noLeft: props => `${prop}: ${props.theme.dimensions[prop]} ${props.theme.dimensions[prop]} ${props.theme.dimensions[prop]} 0;`,
    noRight: props => `${prop}: ${props.theme.dimensions[prop]} 0 ${props.theme.dimensions[prop]} ${props.theme.dimensions[prop]};`
  }
})

export default {
  propTypes: {...propTypes('padding'), ...propTypes('margin')},
  defaultProps: {...defaultProps('padding'), ...defaultProps('margin')},
  rules: {...rules('padding'), ...rules('margin')}
}
