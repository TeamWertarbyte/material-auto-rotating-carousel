The `Slide` supports landscape and portrait mode, which will be selected automatically depending to the `landscape` prop of the `AutoRotatingCarousel` that contains it.

### Portrait mode
```
const { red } = require('@material-ui/core/colors');
const { withStyles } = require('@material-ui/core/styles');

const styles = {
  root: {
    backgroundColor: red[600],
    height: 500,
    width: 400
  },
  media: {
    backgroundColor: red[400]
  }
}

const StyledSlide = withStyles(styles)(Slide);

<StyledSlide
  media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
  title='This is a very cool feature'
  subtitle='Just using this will blow your mind.'
/>
```

### Landscape mode
```
const { red } = require('@material-ui/core/colors');
const { withStyles } = require('@material-ui/core/styles');

const styles = {
  root: {
    backgroundColor: red[600],
    height: 400,
    width: 800
  },
  media: {
    backgroundColor: red[400]
  }
}

const StyledSlide = withStyles(styles)(Slide);

<StyledSlide
  media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
  mediaBackgroundStyle={{backgroundColor: red[400]}}
  contentStyle={{backgroundColor: red[600], height: 400, width: 800}}
  title='This is a very cool feature'
  subtitle='Just using this will blow your mind.'
  mobile
  landscape
/>
```
