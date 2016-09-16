# Image in Material Design

How do you instruct new users to your app?
Google has a very cool concept: https://material.google.com/growth-communications/onboarding.html#onboarding-top-user-benefits


## Installation
```shell
npm i --save material-auto-rotating-carousel
npm i --save react-swipeable-views react-motion
```

## Usage

The usage is like the material-ui tabs. http://www.material-ui.com/#/components/tabs
Create AutoRotatingCarousel as a main frame and add Slides as childrens.

```js
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green700, blue500, red600 } from 'material-ui/styles/colors'

// ...

render() {
  return (
    <div>
        <AutoRotatingCarousel
          label="Getting started"
          open
        >
          <Slide
            header={<YourComponent />}
            headerStyle={{ backgroundColor: red600 }}
            backgroundColor={blue500}
            headline="This is a very cool feature"
            subhead="Just using this will blow your mind."
          />
          <Slide
            header={<YourComponent />}
            headerStyle={{ backgroundColor: blue500 }}
            backgroundColor={green700}
            headline="Ever wanted to be popular?"
            subhead="Well just mix two colors and your are good to go!"
          />
          <Slide
            header={<YourComponent />}
            headerStyle={{ backgroundColor: green700 }}
            backgroundColor={red600}
            headline="May the force be with you"
            subhead="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
        </AutoRotatingCarousel>
    </div>
  )
}
```

## AutoRotatingCarousel Properties

|Name           |Type     |Default                                  |Description
|---------------|---------|-----------------------------------------|--------------------------------
|`label`*       | string  |                                         | Button text.
|`open`*        | bool    |                                         | Controls whether the AutoRotatingCarousel is opened or not.
|`onStart`*     | function|                                         | Fired when the user clicks the getting started button.

## Slide Properties

|Name               |Type     |Default                                  |Description
|-------------------|---------|-----------------------------------------|--------------------------------
|`header`*          | object  |                                         | Object to display in the upper half.
|`headerStyle`*     | object  |                                         | Overrides the inline-styles of the header container.
|`backgroundColor`* | string  |                                         | BackgroundColor for the text part.
|`headline`*        | string  |                                         | Title for the slide.
|`subhead`*         | string  |                                         | Text for the slide.

* required property

## License

The scripts included in this repository are licensed under the MIT.
