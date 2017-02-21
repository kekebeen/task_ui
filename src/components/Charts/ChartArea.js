import React from 'react'
import ChartHeader from './ChartHeader'
import ChartAreaSubHeader from './ChartAreaSubHeader'
import Area from './Area'

var opt = {
  data: [[60,50,60,80,70,70,90],[40,30,20,10,20,30,20]],
  colors: ['#1cc327', '#b80add'],
  labels: ['Incoming', 'Upcoming'],
  axis: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN'],
}

let ChartArea = React.createClass({
   getInitialState: function () {
      return {
        number: '54',
        text: '2,341 new customers'
      }
    },
  render() {
    return (
      <div className='column-4 chart chart--area'>
        <ChartHeader title="Statistics" />
        <ChartAreaSubHeader number={this.state.number} text={this.state.text} />
        <div className='chart__body'>
          <Area {...opt} dots={ true } lines={ true } height={147} hideLabels={true} width={270}/>
        </div>
      </div>
    );
  }
})

export default ChartArea
