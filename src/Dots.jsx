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
  dotInactive: {
    width: 10,
    height: 10,
    background: 'rgba(255,255,255,0.5)',
    marginLeft: 3,
    marginRight: 3,
    float: 'left'
  }
}

export class Dots extends Component {
  render() {
    const { count, index } = this.props
    const width = (count * 10) + (count * 6)

    return (
      <div style={{ ...this.props.style, ...styles.root, width }}>
        {[...Array(count).keys()].map((i) => (
          <Paper
            key={i}
            circle
            zDepth={0}
            style={i === index ? styles.dot : styles.dotInactive}
          />
        ))}
      </div>
    )
  }
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}
