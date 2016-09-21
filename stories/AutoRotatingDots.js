import React from 'react'
import Dots from '../src/Dots'

export default class extends React.Component {
  constructor (props) {
      super(props)
      this.state = { index: 0 }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ index: this.state.index + 1 }), 2000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { count, index, ...other } = this.props
    return <Dots count={count} index={this.state.index % count} {...other} />
  }
}
