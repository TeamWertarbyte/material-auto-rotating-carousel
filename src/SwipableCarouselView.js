import React from 'react'
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay'
import virtualize from 'react-swipeable-views-utils/lib/virtualize'
import bindKeyboard from 'react-swipeable-views-utils/lib/bindKeyboard'
import SwipeableViews from 'react-swipeable-views'
import { modulo } from './util'

const VirtualizeSwipeViews = bindKeyboard(virtualize(SwipeableViews))
const VirtualizeAutoPlaySwipeViews = autoPlay(VirtualizeSwipeViews)

const carouselSlideRenderer = (children) =>
  ({index, key}) => React.cloneElement(children[modulo(index, children.length)], {key})

export default function Carousel ({children, autoplay, ...other}) {
  const slideRenderer = carouselSlideRenderer(children)
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
