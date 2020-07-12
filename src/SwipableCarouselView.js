import React, { Component } from 'react'
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay'
import virtualize from 'react-swipeable-views-utils/lib/virtualize'
import bindKeyboard from 'react-swipeable-views-utils/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import keycode from 'keycode';
import EventListener from 'react-event-listener';
import { modulo } from './util'

const NonVirtualizedSwipeViews = bindKeyboard(SwipeableViews)
const VirtualizeSwipeViews = bindKeyboard(virtualize(SwipeableViews))
const VirtualizeAutoPlaySwipeViews = autoPlay(VirtualizeSwipeViews)

const carouselSlideRenderer = (children) =>
  ({index, key}) => React.cloneElement(children[modulo(index, children.length)], {key})

class NonCircularCarousel extends Component {
  handleKeyDown = event => {
    const { index, children } = this.props
    switch (keycode(event)) {
      case 'left':
        if (index === 0) event.stopPropagation()
        break
      case 'right':
        if (index === children.length - 1) event.stopPropagation()
        break
    }
  }

  render () {
    return (
      <EventListener target="document" onKeyDown={this.handleKeyDown}>
        <NonVirtualizedSwipeViews {...this.props} />
      </EventListener>
    )
  }
}

export default function Carousel ({children, autoplay, circular, ...other}) {
  const slideRenderer = carouselSlideRenderer(children)
  if (!circular) {
    return <NonCircularCarousel {...other} resistance children={children} />
  }
  return autoplay ? (
    <VirtualizeAutoPlaySwipeViews
      {...other}
      slideRenderer={slideRenderer}
    />
  ) : (
    <VirtualizeSwipeViews
      {...other}
      slideRenderer={slideRenderer}
    />
  )
}
