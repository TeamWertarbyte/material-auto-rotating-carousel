import React, { PropTypes } from 'react'
import autoPlay from 'react-swipeable-views/lib/autoPlay'
import virtualize from 'react-swipeable-views/lib/virtualize'
import bindKeyboard from 'react-swipeable-views/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeAutoPlaySwipeViews = virtualize(autoPlay(bindKeyboard(SwipeableViews)))

const carouselSlideRenderer = (children) =>
  ({ index, key }) => React.cloneElement(children[modulo(index, children.length)], { key })

export default function Carousel ({ children, ...other }) {
  return (
    <VirtualizeAutoPlaySwipeViews slideRenderer={carouselSlideRenderer(children)} {...other} />
  )
}

if (process.env.NODE_ENV !== 'production') {
  Carousel.propTypes = {
    ...VirtualizeAutoPlaySwipeViews.propTypes,
    children: PropTypes.node
  }
  delete Carousel.propTypes.slideRenderer
}
