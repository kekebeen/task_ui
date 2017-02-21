import React from 'react'
import ChartHeader from './ChartHeader'

let ChartArea = React.createClass({
  render() {
    return (
      <div className='column-4 chart chart--area'>
        <ChartHeader title="Statistics" />
        <div className='chart__body'></div>
      </div>
    );
  }
})

export default ChartArea
