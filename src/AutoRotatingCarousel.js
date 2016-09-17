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
    width: 32,
    height: 32,
    position: 'fixed',
    top: '50%',
    marginLeft: -80
  },
  arrowRight: {
    width: 32,
    height: 32,
    position: 'fixed',
    top: '50%',
    right: -80
  },
  arrowIconButton: {
    width: 'inherit',
    height: 'inherit',
    padding: 8
  },
  arrowIcon: {
    width: 16,
    height: 16,
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
    margin: '0 auto',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  dots: {
    paddingTop: 48,
    margin: '0 auto'
  },
  footer: {
    marginTop: -60,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slider: {
    width: '100%',
    height: '80vh'
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
    marginTop: -100,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slider: {
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
    let slideIndex = this.state.slideIndex - 1
    this.setState({
      slideIndex
    })
  }

  increaseIndex() {
    let slideIndex = this.state.slideIndex + 1
    this.setState({
      slideIndex
    })
  }

  render() {
    const style = this.props.mobile ? mobileStyles : desktopStyles
    return (
      <div style={{ ...style.root, width: this.props.open ? '100%' : 0 }}>
        {this.props.open ?
          <div style={style.content}>
            <AutoPlaySwipeableViews
              autoplay={this.props.autoplay}
              interval={this.props.interval}
              index={this.state.slideIndex}
              onChangeIndex={(value) => this.handleChange(value)}
              slideStyle={style.slider}
            >
              {this.props.children}
            </AutoPlaySwipeableViews>
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
            {!this.props.mobile && this.state.slideIndex > 0 ?
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

                </Paper> : <div />
            }

            {!this.props.mobile && this.state.slideIndex < this.props.children.length - 1 ?
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

              </Paper> : <div />
            }
          </div>
          : <div /> }
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
