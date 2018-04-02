const path = (props, obj) =>
  props.reduce((memo, current) => memo[current] ? memo[current] : memo, obj)

const split = (splitter, string) =>
  string.split(splitter)

const choose = (color, inverted) => color.indexOf('.') === -1
  ? inverted ? `${color}.contrast` : `${color}.base`
  : color

const get = (colors, color) => {
  const inverted = color.indexOf('!') > -1
  const realColor = color.replace('!', '')

  const result = path(split('.', choose(realColor, inverted)), colors)

  return typeof result === 'string'
    ? result
    : colors[realColor] ? colors[realColor] : realColor
}

export default get
