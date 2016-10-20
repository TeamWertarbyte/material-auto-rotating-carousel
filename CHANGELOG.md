# Change Log
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/) 

## [1.0.1] - 2016-10-20
### Changed
- Update material ui to 0.16.1

## [1.0.0] - 2016-10-14
### Changed
- Update material ui to 0.16.0

## [0.5.1] - 2016-09-24
### Changed
- Update react-swipable-views
- Fixed HOC order

## [0.5.0] - 2016-09-24
### Added
- Keyboard navigation support

### Changed
- Improve desktop carousel appearance in small window sizes

## [0.4.1] - 2016-09-21
### Changed
- Improve carousel animation (no jumps).

## [0.4.0] - 2016-09-19
### Added
- Landscape prop for mobile mode. Will adjust then content for wide screens.

## [0.3.0] - 2016-09-18
### Added
- Mobile prop to switch to fullscreen
- Desktop view with buttons for changing the index

### Breaked
- Desktop mode is now default behaviour. Set mobile prop if you want it to be fullscreen

## [0.2.0] - 2016-09-17
### Added
- AutoRotatingCarousel autoplay prop
- AutoRotatingCarousel interval prop
- Slide mediaStyle prop
- Slide subtitleStyle prop
- Slide textStyle prop
- Slide titleStyle prop

### Changed
- Slide rename header prop to media
- Slide rename headerStyle prop to mediaBackgroundStyle
- Slide rename backgroundColor prop to contentStyle and accept whole style object
- Slide rename headline prop to title
- Slide rename subhead prop to subtitle

## [0.1.0] - 2016-09-16
### Added
- Dot component for displaying current index
- Slide component for representing the content
- AutoPlaySwipeableViews for the swipe and auto rotate magic