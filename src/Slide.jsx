import React, { Component, PropTypes } from 'react'

const styles = {
  root: {
    color: 'white'
  },
  header: {
    height: 'calc(100% - 230px)',
    textAlign: 'center'
  },
  headerItem: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  text: {
    textAlign: 'center'
  }
}

export class Slide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { backgroundColor, header, headerStyle, headline, subhead } = this.props
    return (
      <div style={{ ...styles.root, backgroundColor, height: '100%' }}>
        <div style={{ ...styles.header, ...headerStyle }}>
          <div style={styles.headerItem}>{header}</div>
        </div>
        <div style={styles.text}>
          <h1>
            {headline}
          </h1>
          <p>
            {subhead}
          </p>
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  header: PropTypes.object.isRequired,
  headerStyle: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired
}
