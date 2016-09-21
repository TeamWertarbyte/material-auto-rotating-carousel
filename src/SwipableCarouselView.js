import React from 'react'
import autoPlay from 'react-swipeable-views/lib/autoPlay'
import virtualize from 'react-swipeable-views/lib/virtualize'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeAutoPlaySwipeViews = virtualize(autoPlay(SwipeableViews))

const carouselSlideRenderer = (children) =>
  ({ index, key }) => React.cloneElement(children[modulo(index, children.length)], { key })

export default function Carousel ({ children, ...other }) {
  return (
    <VirtualizeAutoPlaySwipeViews slideRenderer={carouselSlideRenderer(children)} {...other} />
  )
}

Carousel.propTypes = VirtualizeAutoPlaySwipeViews.propTypes
