import React from 'react'

class ReactSlice extends React.Component {
  toRadian (degrees) {
    return Math.PI * degrees / 180
  }

  render () {
    let {
      center,
      radius,
      start,
      end,
      color,
      opacity,
      strokeWidth,
      strokeColor,
      strokeOpacity,
      mouseEnter,
      mouseLeave
    } = this.props

    let radians = this.toRadian(end - start - 90)
    let destX = center + radius * Math.cos(radians)
    let destY = center + radius * Math.sin(radians)
    let transformation = `rotate(${start} ${center} ${center})`
    let description = [
      'M', center, center,
      'L', center, center - radius,
      'A', radius, radius, 0, 0, 1, destX, destY,
      'z'
    ].join(' ')
    let styles = {
      graph: {
        fill: color,
        stroke: strokeColor,
        opacity: opacity
      },
      stroke: {
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeOpacity: strokeOpacity
      }
    }
    let props = {
      transform: transformation,
      style: styles.graph,
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave
    }

    return (
      <g {...props}>
        <path d={ description } style={ styles.stroke } />
      </g>
    )
  }
}

ReactSlice.propTypes = {
  center: React.PropTypes.number.isRequired,
  radius: React.PropTypes.number.isRequired,
  start: React.PropTypes.number.isRequired,
  end: React.PropTypes.number.isRequired,
  color: React.PropTypes.string,
  opacity: React.PropTypes.number,
  strokeWidth: React.PropTypes.number,
  strokeColor: React.PropTypes.string,
  strokeOpacity: React.PropTypes.number,
  mouseEnter: React.PropTypes.func,
  mouseLeave: React.PropTypes.func
}

ReactSlice.defaultProps = {
  color: 'white',
  opacity: 1.0,
  strokeWidth: 1.0,
  strokeColor: 'black',
  strokeOpacity: 1.0
}

export default ReactSlice
