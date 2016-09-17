import React, { Component, PropTypes } from 'react'
import { RaisedButton } from 'material-ui'
import autoPlay from 'react-swipeable-views/lib/autoPlay'
import SwipeableViews from 'react-swipeable-views'
import { Dots } from './Dots'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const styles = {
  root: {
    height: '100%',
    width: 0,
    position: 'fixed',
    zIndex: 1100,
    left: 0,
    top: 0
  },
  footer: {
    marginTop: -100,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
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
    return (
      <div style={{ ...styles.root, width: this.props.open ? '100%' : 0 }}>
        {this.props.open ?
          <div>
            <AutoPlaySwipeableViews
              autoplay={this.props.autoplay}
              interval={this.props.interval}
              index={this.state.slideIndex}
              onChangeIndex={(value) => this.handleChange(value)}
              slideStyle={{ width: '100%', height: '100vh' }}
            >
              {this.props.children}
            </AutoPlaySwipeableViews>
            <div style={styles.footer}>
              <RaisedButton
                label={this.props.label}
                onTouchTap={this.props.onStart}
              />
              <Dots
                count={this.props.children.length}
                index={this.state.slideIndex}
                style={{ paddingTop: 24, margin: '0 auto' }}
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
  onStart: PropTypes.func,
  open: PropTypes.bool
}
