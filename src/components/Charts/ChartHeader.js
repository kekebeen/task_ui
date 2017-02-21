import React from 'react'

let ChartHeader = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Services'
    }
  },
  render () {
    return (
    <div className='chart__header'>
        <h1 className='header__title'>{this.props.title}</h1>
        <span className='header__dots'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </span>
      </div>
    )
  }
})

ChartHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default ChartHeader
