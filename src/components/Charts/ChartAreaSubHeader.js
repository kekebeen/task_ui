import React from 'react'

let ChartBarSubHeader = React.createClass({
  render () {
    return(
      <div className='chart__subheader chart__subheader--area'>
        <div className='subheader__area'>
          <h1 className='sale__title'>{this.props.number}%</h1>
          <em className='sale__text'>{this.props.text}</em>
        </div>
        <div className="subheader__legend">
          <div className="label label--upcoming">
            <span className="dot dot--green"></span>
            <span className="text">Upcoming</span>
          </div>
          <div className="label label--incoming">
            <span className="dot dot--purple"></span>
            <span className="text">Incoming</span>
          </div>
        </div>
      </div>
    )
  },

  handleFilter: function (id) {
    this.props.onHeaderFilter(id)
  }
})

export default ChartBarSubHeader
