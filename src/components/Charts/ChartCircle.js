import React from 'react'
import ChartHeader from './ChartHeader'
import Filters from './Filters'

let ChartCircle = React.createClass({
  render() {
    return (
      <div className='column-4 chart chart--circle'>
        <ChartHeader title="Services" />
        <div className='chart__subheader'>
          <Filters />
        </div>
        <div className='chart__body'></div>
      </div>
    );
  }
})

export default ChartCircle
