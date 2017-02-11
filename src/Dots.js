import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'

const styles = {
  dot: {
    width: 8,
    height: 8,
    background: '#fff',
    margin: '0 4px',
    float: 'left',
    transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    position: 'absolute'
  }
}

export default class Dots extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousIndex: null
    }
  }

  componentWillReceiveProps ({ index }) {
    if (index !== this.props.index) {
      this.setState({ previousIndex: this.props.index })
      this.timeout = setTimeout(() => {
        this.timeout = null
        this.setState({ previousIndex: index })
      }, 450)
    }
  }

  componentWillUnmount () {
    if (this.timeout != null) {
      clearTimeout(this.timeout)
    }
  }

  render () {
    const { count, index, style = {} } = this.props
    const { previousIndex } = this.state

    return (
      <div style={{ ...style, width: count * 16 }}>
        <div style={{ position: 'relative' }}>
          {[...Array(count).keys()].map((i) => (
            <Paper
              key={i}
              circle
              zDepth={0}
              style={{
                ...styles.dot,
                opacity: i >= Math.min(previousIndex, index) && i <= Math.max(previousIndex, index) ? 0 : 0.5,
                left: i * 16
              }}
            />
          ))}
          <Paper
            zDepth={0}
            style={{
              ...styles.dot,
              left: Math.min(previousIndex, index) * 16,
              width: Math.abs(previousIndex - index) * 16 + 8,
              borderRadius: 4
            }}
          />
        </div>
      </div>
    )
  }
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
}
