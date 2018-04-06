import React from 'react'
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay'
import virtualize from 'react-swipeable-views-utils/lib/virtualize'
import bindKeyboard from 'react-swipeable-views-utils/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeAutoPlaySwipeViews = autoPlay(bindKeyboard(virtualize(SwipeableViews)))

const carouselSlideRenderer = (children) =>
  ({index, key}) => React.cloneElement(children[modulo(index, children.length)], {key})

export default function Carousel ({children, ...other}) {
  return (
    <VirtualizeAutoPlaySwipeViews slideRenderer={carouselSlideRenderer(children)} {...other} />
  )
}
