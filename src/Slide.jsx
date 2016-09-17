import React, { Component, PropTypes } from 'react'
import { blue500, blue700 } from 'material-ui/styles/colors'

const styles = {
  root: {
    color: 'white',
    backgroundColor: blue500,
    height: '100%'
  },
  media: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  mediaBackground: {
    backgroundColor: blue700,
    height: 'calc(100% - 230px)',
    textAlign: 'center'
  },
  subtitle: {},
  text: {
    textAlign: 'center'
  },
  title: {}
}

export class Slide extends Component {
  render() {
    const {
      contentStyle,
      media,
      mediaBackgroundStyle,
      mediaStyle,
      subtitle,
      subtitleStyle,
      textStyle,
      title,
      titleStyle
    } = this.props
    return (
      <div style={{ ...styles.root, ...contentStyle }}>
        <div style={{ ...styles.mediaBackground, ...mediaBackgroundStyle }}>
          <div style={{ ...styles.media, ...mediaStyle }}>{media}</div>
        </div>
        <div style={{ ...styles.text, ...textStyle }}>
          <h1 style={{ ...styles.title, ...titleStyle }}>
            {title}
          </h1>
          <p style={{ ...styles.subtitle, ...subtitleStyle }}>
            {subtitle}
          </p>
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  contentStyle: PropTypes.object,
  media: PropTypes.node.isRequired,
  mediaBackgroundStyle: PropTypes.object,
  mediaStyle: PropTypes.object,
  subtitle: PropTypes.string.isRequired,
  subtitleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.object
}
