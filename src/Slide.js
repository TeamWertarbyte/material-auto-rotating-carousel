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
  mobileLandscape: {
    root: {
      color: 'white',
      backgroundColor: blue500,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    },
    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    mediaBackground: {
      backgroundColor: blue700,
      height: '100%',
      textAlign: 'center',
      flex: '1 1',
      alignSelf: 'stretch'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      minWidth: 300,
      maxWidth: 'calc(50% - 48px)',
      padding: '24px 24px 128px',
      flex: '0 1',
      alignSelf: 'center'
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
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
      marginBottom: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
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
    mobile,
    landscape
  } = props

  const style = mobile ? (landscape ? styles.mobileLandscape : styles.mobile) : styles.desktop

  return (
    <div style={{ ...style.root, ...contentStyle }}>
      <div style={{ ...style.mediaBackground, ...mediaBackgroundStyle }}>
        <div style={{ ...style.media, ...mediaStyle }}>{React.cloneElement(media, {
          style: { ...media.style, maxHeight: '100%' }
        })}</div>
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
  mobile: PropTypes.bool,
  landscape: PropTypes.bool
}
