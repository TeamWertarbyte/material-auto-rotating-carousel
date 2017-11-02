# Material AutoRotatingCarousel

[![Build Status](https://travis-ci.org/TeamWertarbyte/material-auto-rotating-carousel.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-auto-rotating-carousel)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-auto-rotating-carousel.svg)](https://greenkeeper.io/)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM](https://nodei.co/npm/material-auto-rotating-carousel.png?downloads=true&stars=true)](https://nodei.co/npm/material-auto-rotating-carousel/)

So you wrote a great app and deployed it and everything. But how do you introduce new users to your app? Well, the Material design guidelines have a solution: Displaying the top benefits in a beautiful [auto-rotating carousel](https://material.google.com/growth-communications/onboarding.html#onboarding-top-user-benefits)!

This project implements such a carousel for [material-ui](https://material-ui.com). See [the storybook](https://teamwertarbyte.github.io/material-auto-rotating-carousel) for an interactive demo.

![Demo](demo.gif)

## Installation
```shell
npm i --save material-auto-rotating-carousel
npm i --save react-swipeable-views
```

## Usage

The usage is similar to the usage of [Material UI's tabs](http://www.material-ui.com/#/components/tabs).
Create AutoRotatingCarousel as a main frame and add Slides as children.

```js
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'

// ...

render() {
  return (
    <div>
      <AutoRotatingCarousel
        label="Get started"
        open
      >
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
          mediaBackgroundStyle={{ backgroundColor: red400 }}
          contentStyle={{ backgroundColor: red600 }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
          mediaBackgroundStyle={{ backgroundColor: blue400 }}
          contentStyle={{ backgroundColor: blue600 }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
          mediaBackgroundStyle={{ backgroundColor: green400 }}
          contentStyle={{ backgroundColor: green600 }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
        />
      </AutoRotatingCarousel>
    </div>
  )
}
```

### AutoRotatingCarousel Properties

|Name                 |Type        |Default     |Description
|---------------------|------------|------------|--------------------------------
|arrowIcon            | `object`   |            | Override the inline-styles of the arrow icon.
|arrowIconButtonStyle | `object`   |            | Override the inline-styles of the arrow icon button.
|arrowLeftStyle       | `object`   |            | Override the inline-styles of the left arrow.
|arrowRightStyle      | `object`   |            | Override the inline-styles of the right arrow.
|autoplay             | `bool`     | `true`     | If `false`, the auto play behavior is disabled.
|carouselContainer    | `object`   |            | Override the inline-styles of the carousel container.
|carouselStyle        | `object`   |            | Override the inline-styles of the carousel.
|carouselWrapperStyle | `object`   |            | Override the inline-styles of the carousel wrapper.
|contentStyle         | `object`   |            | Override the inline-styles of the content container.
|dotsStyle            | `object`   |            | Override the inline-styles of the footer dots when not in landscape mode.
|footerStyle          | `object`   |            | Override the inline-styles of the footer when not in landscape mode.
|interval             | `integer`  | `3000`     | Delay between auto play transitions (in ms).
|label                | `string`   |            | Button text. If not supplied, the button will be hidden.
|landscape            | `bool`     |            | If `true`, slide will adjust content for wide mobile screens.
|mobile               | `bool`     | `false`    | If `true`, the screen width and height is filled.
|open                 | `bool`     | `false`    | Controls whether the AutoRotatingCarousel is opened or not.
|onChange             | `function` |            | Fired when the index changed. Returns current index.
|onRequestClose       | `function` |            | Fired when the gray background of the popup is pressed when it is open.
|onStart              | `function` |            | Fired when the user clicks the getting started button.
|style                | `object`   |            | Override the inline-styles of the root component.


### Slide Properties

|Name                   |Type       |Default      |Description
|-----------------------|-----------|-------------|--------------------------------
|contentStyle           | `object`  |             | Override the inline-styles of the content.
|media*                 | `node`    |             | Object to display in the upper half.
|mediaBackgroundStyle   | `object`  |             | Override the inline-styles of the media container.
|mediaStyle             | `object`  |             | Override the inline-styles of the media.
|subtitle*              | `string`  |             | Subtitle for the slide.
|subtitleStyle          | `object`  |             | Override the inline-styles of the subtitle.
|textStyle              | `object`  |             | Override the inline-styles of the text container.
|title*                 | `string`  |             | Title for the slide.
|titleStyle             | `object`  |             | Override the inline-styles of the title.

\* required property

## License

The files included in this repository are licensed under the MIT license.
