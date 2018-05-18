import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'

const styles = {
  root: {
    backgroundColor: blue[500],
    height: '100%'
  },
  rootMobileLandscape: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  media: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      maxHeight: '100%'
    }
  },
  mediaMobile: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  mediaMobileLandscape: {},
  mediaBackground: {
    backgroundColor: blue[700],
    height: 'calc(100% - 216px)',
    textAlign: 'center'
  },
  mediaBackgroundMobile: {
    height: 'calc(100% - 241px)'
  },
  mediaBackgroundMobileLandscape: {
    height: '100%',
    flex: '1 1',
    alignSelf: 'stretch'
  },
  text: {
    textAlign: 'center',
    maxWidth: '80%',
    margin: '0 auto',
    paddingTop: 32
  },
  textMobile: {
    paddingTop: 30,
    '& $title': {
      marginBottom: 8
    }
  },
  textMobileLandscape: {
    minWidth: 300,
    maxWidth: 'calc(50% - 48px)',
    padding: '24px 24px 128px',
    flex: '0 1',
    alignSelf: 'center',
    textAlign: 'left',
    margin: 0
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
    marginBottom: 12,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: '#fff'
  },
  subtitle: {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '18px',
    margin: 0,
    color: '#fff'
  }
}

function Slide (props) {
  const {
    classes,
    media,
    mediaBackgroundStyle,
    subtitle,
    title,
    mobile,
    landscape,
    ...other
  } = props

  const mobileLandscape = mobile && landscape

  return (
    <div
      className={classNames(classes.root, {
        [classes.rootMobile]: mobile,
        [classes.rootMobileLandscape]: mobileLandscape
      })}
      {...other}
    >
      <div
        className={classNames(classes.mediaBackground, {
          [classes.mediaBackgroundMobile]: mobile,
          [classes.mediaBackgroundMobileLandscape]: mobileLandscape
        })}
        style={mediaBackgroundStyle}
      >
        <div className={classNames(classes.media, {
          [classes.mediaMobile]: mobile,
          [classes.mediaMobileLandscape]: mobileLandscape
        })}>
          {media}
        </div>
      </div>
      <div
        className={classNames(classes.text, {
          [classes.textMobile]: mobile,
          [classes.textMobileLandscape]: mobileLandscape
        })}
      >
        <Typography className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
    </div>
  )
}

Slide.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Object to display in the upper half.
   */
  media: PropTypes.node.isRequired,
  /**
   * Override the inline-styles of the media container.
   */
  mediaBackgroundStyle: PropTypes.object,
  /**
   * Subtitle of the slide.
   */
  subtitle: PropTypes.string.isRequired,
  /**
   * Title of the slide.
   */
  title: PropTypes.string.isRequired,
  /**
   * If `true`, the screen width and height is filled.
   * @ignore
   */
  mobile: PropTypes.bool,
  /**
   * If `true`, slide will adjust content for wide mobile screens.
   * @ignore
   */
  landscape: PropTypes.bool
}

export default withStyles(styles)(Slide)
