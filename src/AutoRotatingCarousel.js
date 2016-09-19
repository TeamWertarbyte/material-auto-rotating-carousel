import React, {Component, PropTypes} from 'react'
import { IconButton, Paper, RaisedButton } from 'material-ui'
import { grey700 } from 'material-ui/styles/colors'
import autoPlay from 'react-swipeable-views/lib/autoPlay'
import SwipeableViews from 'react-swipeable-views'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward'
import { Dots } from './Dots'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const desktopStyles = {
  arrowLeft: {
    width: 48,
    height: 48,
    position: 'fixed',
    top: 'calc(50% - 36px)',
    left: -96
  },
  arrowRight: {
    width: 48,
    height: 48,
    position: 'fixed',
    top: 'calc(50% - 36px)',
    right: -96
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    position: 'relative',
    transform:'scale(1.0)',
    background: 'transparent'
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
    width: 0,
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    width: '60%',
    maxWidth: 700,
    margin: '0 auto',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  dots: {
    paddingTop: 60,
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
    height: '80vh',
    maxHeight: 720
  }
}

const mobileStyles = {
  root: {
    height: '100%',
    width: 0,
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0
  },
  content: {},
  dots: {
    paddingTop: 24,
    margin: '0 auto'
  },
  footer: {
    marginTop: -92,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slide: {
    width: '100%',
    height: '100vh'
  }
}

export class AutoRotatingCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  handleChange(value) {
    this.setState({
      slideIndex: value
    })
  }

  decreaseIndex() {
    let slideIndex = this.state.slideIndex
    this.setState({
      slideIndex: slideIndex === 0 ? this.props.children.length - 1 : slideIndex - 1
    })
  }

  increaseIndex() {
    let slideIndex = this.state.slideIndex
    this.setState({
      slideIndex: slideIndex === this.props.children.length - 1 ? 0 : slideIndex + 1
    })
  }

  render() {
    const style = this.props.mobile ? mobileStyles : desktopStyles
    return (
      <div style={{ ...style.root, width: this.props.open ? '100%' : 0 }}>
        {this.props.open ?
          <div style={style.content}>
            <Paper
              zIndex={this.props.mobile ? 0 : 1}
              style={style.carouselWrapper}>
              <AutoPlaySwipeableViews
                autoplay={this.props.autoplay}
                interval={this.props.interval}
                index={this.state.slideIndex}
                onChangeIndex={(value) => this.handleChange(value)}
                slideStyle={style.slide}
              >
                {this.props.children.map((c) => React.cloneElement(c, {
                  mobile: this.props.mobile
                }))}
              </AutoPlaySwipeableViews>
            </Paper>
            <div style={style.footer}>
              <RaisedButton
                label={this.props.label}
                onTouchTap={this.props.onStart}
              />
              <Dots
                count={this.props.children.length}
                index={this.state.slideIndex}
                style={style.dots}
              />
            </div>
            {!this.props.mobile ?
              <div>
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
          </div> : null
        }
      </div>
    )
  }
}

AutoRotatingCarousel.propTypes = {
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  label: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  onStart: PropTypes.func,
  open: PropTypes.bool
}
