The `Slide` supports landscape and portrait mode, which will be selected automatically depending to the `landscape` prop of the `AutoRotatingCarousel` that contains it.

### Portrait mode
```
const { red400, red600 } = require('material-ui/styles/colors');

<Slide
  media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
  mediaBackgroundStyle={{backgroundColor: red400}}
  contentStyle={{backgroundColor: red600, height: 500, width: 400}}
  title='This is a very cool feature'
  subtitle='Just using this will blow your mind.'
/>
```

### Landscape mode
```
const { red400, red600 } = require('material-ui/styles/colors');

<Slide
  media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
  mediaBackgroundStyle={{backgroundColor: red400}}
  contentStyle={{backgroundColor: red600, height: 400, width: 800}}
  title='This is a very cool feature'
  subtitle='Just using this will blow your mind.'
  mobile
  landscape
/>
```
