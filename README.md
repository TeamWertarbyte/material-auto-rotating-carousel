# Material AutoRotatingCarousel

How do you introduce new users to your app?
Google has a very cool concept: https://material.google.com/growth-communications/onboarding.html#onboarding-top-user-benefits

See the change log for more details: [Change log](https://github.com/TeamWertarbyte/material-auto-rotating-carousel/blob/master/CHANGELOG.md)

![Demo](demo.gif)

## Installation
```shell
npm i --save material-auto-rotating-carousel
npm i --save react-swipeable-views react-motion
```

## Usage

The usage is like the material-ui tabs. http://www.material-ui.com/#/components/tabs
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
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
        </AutoRotatingCarousel>
    </div>
  )
}
```

## AutoRotatingCarousel Properties

|Name               |Type     |Default                                  |Description
|-------------------|---------|-----------------------------------------|--------------------------------
|`autoplay`         | bool    | true                                    | If `false`, the auto play behavior is disabled.
|`interval`         | integer | 3000                                    | Delay between auto play transitions (in ms).
|`label`*           | string  |                                         | Button text.
|`open`             | bool    | false                                   | Controls whether the AutoRotatingCarousel is opened or not.
|`onStart`          | function|                                         | Fired when the user clicks the getting started button.

## Slide Properties

|Name                   |Type     |Default                                  |Description
|-----------------------|---------|-----------------------------------------|--------------------------------
|`contentStyle`         | object  |                                         | Override the inline-styles of the content.
|`media`*               | node    |                                         | Object to display in the upper half.
|`mediaBackgroundStyle` | object  |                                         | Override the inline-styles of the media container.
|`mediaStyle`           | object  |                                         | Override the inline-styles of the media.
|`subtitle`*            | string  |                                         | Subtitle for the slide.
|`subtitleStyle`        | object  |                                         | Override the inline-styles of the subtitle.
|`textStyle`            | object  |                                         | Override the inline-styles of the text container.
|`title`*               | string  |                                         | Title for the slide.
|`titleStyle`           | object  |                                         | Override the inline-styles of the title.

`* required property`

## License

The scripts included in this repository are licensed under the MIT.
