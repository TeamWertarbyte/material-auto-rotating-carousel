import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

export default class Wrapper extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={{fontFamily: 'Roboto, sans-serif'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
