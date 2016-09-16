import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'

const styles = {
  root: {
    display: 'block'
  },
  dot: {
    width: 10,
    height: 10,
    background: 'rgba(255,255,255,1)',
    marginLeft: 3,
    marginRight: 3,
    float: 'left'
  },
  dotInactiv: {
    width: 10,
    height: 10,
    background: 'rgba(255,255,255,0.5)',
    marginLeft: 3,
    marginRight: 3,
    float: 'left'
  }
}

export class Dots extends Component {
  constructor(props) {
    super(props)
  }

  renderDots(count, index) {
    const dots = []
    for (let i = 0; i < count; ++i) {
      dots.push(this.renderDot(i === index))
    }
    return dots
  }

  renderDot(active) {
    return (
      <Paper
        circle
        zDepth={0}
        style={active ? styles.dot : styles.dotInactiv}
      />
    )
  }

  render() {
    const { count, index } = this.props
    const width = (count * 10) + (count * 6)

    return (
      <div style={{ ...this.props.style, ...styles.root, width }}>
        {this.renderDots(count, index)}
      </div>
    )
  }
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}
