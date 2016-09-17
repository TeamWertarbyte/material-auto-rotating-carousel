import React, { Component, PropTypes } from 'react'
import { RaisedButton } from 'material-ui'
import autoPlay from 'react-swipeable-views/lib/autoPlay'
import SwipeableViews from 'react-swipeable-views'
import { Dots } from './Dots'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const desktopStyles = {
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
