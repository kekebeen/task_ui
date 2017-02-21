import React from 'react'
import Filters from './Filters'

let ChartBarSubHeader = React.createClass({
  render () {
    return(
      <div className='chart__subheader'>
        <Filters onHandleFilter={this.handleFilter}/>
        <div className='subheader__sales'>
          <h1 className='sale__title'>{this.props.number}</h1>
          <em className='sale__text'>{this.props.text}</em>
        </div>
      </div>
    )
  },

  handleFilter: function (id) {
    this.props.onHeaderFilter(id)
  }
})

export default ChartBarSubHeader
