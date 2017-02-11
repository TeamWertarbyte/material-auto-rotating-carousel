import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import { AutoRotatingCarousel, Slide } from '../src'
import Dots from '../src/Dots'
import { themed } from './storyUtil'
import AutoRotatingDots from './AutoRotatingDots'
import AnimationDemo from './AnimationDemo'

storiesOf('AutoRotatingCarousel', module)
  .add('desktop', () => themed(
    <AutoRotatingCarousel
      label="Get started"
      onStart={action('onStart')}
      onChange={(index) => console.log(index)}
      onRequestClose={action('onClose')}
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
  ))
  .add('small desktop', () => themed(
    <AutoRotatingCarousel
      label="Get started"
      onStart={action('onStart')}
      onChange={(index) => console.log(index)}
      onRequestClose={action('onClose')}
      open
      style={{ width: 500, height: 350 }}
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
  ))
  .add('desktop (animation demo)', () => themed(
    <AnimationDemo />
  ))
  .add('mobile', () => themed(
    <AutoRotatingCarousel
      label="Get started"
      onStart={action('onStart')}
      onChange={(index) => console.log(index)}
      open
      mobile
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
  ))
  .add('mobile landscape', () => themed(
    <AutoRotatingCarousel
      label="Get started"
      onStart={action('onStart')}
      onChange={(index) => console.log(index)}
      open
      mobile
      landscape
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
  ))

storiesOf('Dots', module)
  .add('three dots', () => themed(
    <Dots count={3} index={0} style={{ backgroundColor: blue600, width: 200, height: 8, padding: 24 }} />
  ))
  .add('index changing automatically', () => themed(
    <AutoRotatingDots count={5} style={{ backgroundColor: blue600, width: 200, height: 8, padding: 24 }} />
  ))

storiesOf('Slide', module)
  .add('with media', () => themed(
    <Slide
      media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
      mediaBackgroundStyle={{ backgroundColor: red400 }}
      contentStyle={{ backgroundColor: red600, height: 500, width: 400 }}
      title="This is a very cool feature"
      subtitle="Just using this will blow your mind."
    />
  ))
  .add('landscape with media', () => themed(
    <Slide
      media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
      mediaBackgroundStyle={{ backgroundColor: red400 }}
      contentStyle={{ backgroundColor: red600, height: 400, width: 800 }}
      title="This is a very cool feature"
      subtitle="Just using this will blow your mind."
      mobile
      landscape
    />
  ))
