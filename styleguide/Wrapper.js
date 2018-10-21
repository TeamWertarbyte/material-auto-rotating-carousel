import React, { Component } from 'react'

export default class Wrapper extends Component {
  render () {
    return (
      <div style={{fontFamily: 'Roboto, sans-serif'}}>
        {this.props.children}
      </div>
    )
  }
}
