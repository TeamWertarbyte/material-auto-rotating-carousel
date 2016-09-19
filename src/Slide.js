import React, { Component, PropTypes } from 'react'
import { blue500, blue700 } from 'material-ui/styles/colors'

const styles = {
  mobile: {
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
      height: 'calc(100% - 241px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 30
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 8
    }
  },
  desktop: {
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
      height: 'calc(100% - 216px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 32
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 12
    }
  }
}

export function Slide (props) {
  const {
    contentStyle,
    media,
    mediaBackgroundStyle,
    mediaStyle,
    subtitle,
    subtitleStyle,
    textStyle,
    title,
    titleStyle,
    mobile
  } = props

  const style = mobile ? styles.mobile : styles.desktop

  return (
    <div style={{ ...style.root, ...contentStyle }}>
      <div style={{ ...style.mediaBackground, ...mediaBackgroundStyle }}>
        <div style={{ ...style.media, ...mediaStyle }}>{media}</div>
      </div>
      <div style={{ ...style.text, ...textStyle }}>
        <div style={{ ...style.title, ...titleStyle }}>
          {title}
        </div>
        <p style={{ ...style.subtitle, ...subtitleStyle }}>
          {subtitle}
        </p>
      </div>
    </div>
  )
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
  titleStyle: PropTypes.object,
  mobile: PropTypes.bool
}
