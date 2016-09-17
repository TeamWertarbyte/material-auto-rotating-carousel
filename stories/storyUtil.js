import React from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export function themed (children) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        {children}
      </div>
    </MuiThemeProvider>
  )
}
