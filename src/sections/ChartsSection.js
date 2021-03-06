import React from 'react'
import ChartArea from '../components/Charts/ChartArea'
import ChartBar from '../components/Charts/ChartBar'
import ChartCircle from '../components/Charts/ChartCircle'

let ChartsSection = React.createClass({
  getInitialState: function () {
    return {
      // no initial data, every component has their own
    }
  },
  render() {
    return (
      <section className='section' id="charts">
        <div className='container'>
          <div className='row'>
            <ChartArea />
            <ChartBar />
            <ChartCircle />
          </div>
        </div>
      </section>
    );
  }
})

export default ChartsSection
