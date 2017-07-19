import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Paper, RaisedButton } from 'material-ui'
import { grey700 } from 'material-ui/styles/colors'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward'
import Dots from 'material-ui-dots'
import Carousel from './SwipableCarouselView'
import { modulo } from './util'

const desktopStyles = {
  arrowLeft: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    left: -96
  },
  arrowRight: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    right: -96
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%'
  },
  arrowIconButton: {
    width: 48,
    height: 48,
    padding: 4
  },
  arrowIcon: {
    color: grey700
  },
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  content: {
    width: '60%',
    maxWidth: 700,
    height: 'calc(100% - 96px)',
    maxHeight: 600,
    margin: '-16px auto 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  dots: {
    paddingTop: 36,
    margin: '0 auto'
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slide: {
    width: '100%',
    height: '100%'
  },
  carousel: {
    height: '100%'
  },
  carouselContainer: {
    height: '100%'
  }
}

const mobileStyles = {
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0
  },
  content: {},
  dots: {
    margin: '0 auto'
  },
  dotsLandscape: {
    paddingTop: 20,
    margin: '0 auto'
  },
  footer: {
    marginTop: -92,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  footerLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    textAlign: 'center',
    display: 'inline-block'
  },
  slide: {
    width: '100%',
    height: '100vh'
  }
}

export default class AutoRotatingCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  handleChange = (slideIndex) => {
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  decreaseIndex () {
    const slideIndex = this.state.slideIndex - 1
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  increaseIndex () {
    const slideIndex = this.state.slideIndex + 1
    this.setState({
      slideIndex
    }, this.onChange(slideIndex))
  }

  onChange (slideIndex) {
    if (this.props.onChange) {
      this.props.onChange(modulo(slideIndex, this.props.children.length))
    }
  }

  render () {
    const style = this.props.mobile ? mobileStyles : desktopStyles
    const landscape = this.props.mobile && this.props.landscape

    return (
      <div
        style={{
          ...style.root,
          pointerEvents: this.props.open ? null : 'none',
          opacity: this.props.open ? '1' : '0',
          ...this.props.style
        }}
        onTouchTap={this.props.onRequestClose}
      >
        <div style={{...style.content, ...this.props.contentStyle}}
          onTouchTap={evt => evt.stopPropagation() || evt.preventDefault()}>
          <Paper
            zDepth={this.props.mobile ? 0 : 1}
            style={style.carouselWrapper}>
            <Carousel
              autoplay={this.props.open && this.props.autoplay}
              interval={this.props.interval}
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
              style={style.carousel}
              containerStyle={style.carouselContainer}
              slideStyle={style.slide}
            >
              {this.props.children.map((c, i) => React.cloneElement(c, {
                mobile: this.props.mobile,
                landscape: this.props.landscape,
                key: i
              }))}
            </Carousel>
          </Paper>
          <div style={landscape ? {minWidth: 300, maxWidth: 'calc(50% - 48px)', padding: 24, float: 'right'} : null}>
            <div style={landscape ? style.footerLandscape : style.footer}>
              {this.props.label && <RaisedButton
                label={this.props.label}
                onTouchTap={this.props.onStart}
              />}
              <Dots
                count={this.props.children.length}
                index={modulo(this.state.slideIndex, this.props.children.length)}
                style={landscape ? style.dotsLandscape : style.dots}
                onDotClick={this.handleChange}
              />
            </div>
          </div>
          {!this.props.mobile ? <div>
            <Paper
              style={style.arrowLeft}
              circle
            >
              <IconButton
                style={style.arrowIconButton}
                iconStyle={style.arrowIcon}
                onTouchTap={() => this.decreaseIndex()}
                touch
              >
                <ArrowBackIcon />
              </IconButton>
            </Paper>
            <Paper
              style={style.arrowRight}
              circle
            >
              <IconButton
                style={style.arrowIconButton}
                iconStyle={style.arrowIcon}
                onTouchTap={() => this.increaseIndex()}
                touch
              >
                <ArrowForwardIcon />
              </IconButton>
            </Paper>
          </div> : null
          }
        </div>
      </div>
    )
  }
}

AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 3000,
  mobile: false,
  open: false
}

AutoRotatingCarousel.propTypes = {
  /** If `false`, the auto play behavior is disabled. */
  autoplay: PropTypes.bool,
  /** Override the inline-styles of the content container. */
  contentStyle: PropTypes.object,
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
  /** Button text. */
  label: PropTypes.string.isRequired,
  /** If `true`, slide will adjust content for wide mobile screens. */
  landscape: PropTypes.bool,
  /** If `true`, the screen width and height is filled. */
  mobile: PropTypes.bool,
  /** Fired when the index changed. Returns current index. */
  onChange: PropTypes.func,
  /** Fired when the gray background of the popup is pressed when it is open. */
  onRequestClose: PropTypes.func,
  /** Fired when the user clicks the getting started button. */
  onStart: PropTypes.func,
  /** Controls whether the AutoRotatingCarousel is opened or not. */
  open: PropTypes.bool,
  /** Override the inline-styles of the root component. */
  style: PropTypes.object
}
