import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'

const styles = {
  dot: {
    width: 8,
    height: 8,
    background: '#fff',
    margin: '0 4px',
    float: 'left',
    transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  }
}

export default function Dots ({ count, index, style = {} }) {
  return (
    <div style={{ ...style, width: count * 16 }}>
      {[...Array(count).keys()].map((i) => (
        <Paper
          key={i}
          circle
          zDepth={0}
          style={{ ...styles.dot, opacity: i === index ? 1 : 0.5 }}
        />
      ))}
    </div>
  )
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}
