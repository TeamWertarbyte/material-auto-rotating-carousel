### Desktop mode

```
const Slide = require('./Slide').default;
const { red, blue, green } = require('material-ui/colors');

<div style={{ position: 'relative', width: '100%', height: 500 }}>
<AutoRotatingCarousel
  label='Get started'
  open={true}
  style={{ position: 'absolute' }}
>
  <Slide
    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
    mediaBackgroundStyle={{backgroundColor: red[400]}}
    contentStyle={{backgroundColor: red[600]}}
    title='This is a very cool feature'
    subtitle='Just using this will blow your mind.'
  />
  <Slide
    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
    mediaBackgroundStyle={{backgroundColor: blue[400]}}
    contentStyle={{backgroundColor: blue[600]}}
    title='Ever wanted to be popular?'
    subtitle='Well just mix two colors and your are good to go!'
  />
  <Slide
    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
    mediaBackgroundStyle={{backgroundColor: green[400]}}
    contentStyle={{backgroundColor: green[600]}}
    title='May the force be with you'
    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
  />
</AutoRotatingCarousel>
</div>
```
