import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import { AutoRotatingCarousel, Slide } from '../src'

export default class AnimationDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen () {
    this.setState({ open: true })
  }

  handleClose () {
    this.setState({ open: false })
    action('onRequestClose').call(this, arguments)
  }

  render () {
    return (
      <div>
        <RaisedButton
          label="Show carousel popup"
          onClick={() => this.handleOpen()}
        />
        <AutoRotatingCarousel
          label="Get started"
          onStart={action('onStart')}
          onChange={(index) => console.log(index)}
          onRequestClose={() => this.handleClose()}
          open={this.state.open}
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
}
