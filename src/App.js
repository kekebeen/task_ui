import MainLayout from './layouts/Main'
import React from 'react'
import WebFont from 'webfontloader'

let App = React.createClass({
  componentWillMount: function () {
    WebFont.load({
      google: {
        families: ['Lato: 500']
      }
    })
  },
  render() {
    return <MainLayout />
  }
})

export default App
