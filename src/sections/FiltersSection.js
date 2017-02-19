import React from 'react'
import DatePicker from '../components/DatePicker/DatePicker'

let FiltersSection = React.createClass({
  render() {
    return (
      <section className='section' id="filters">
        <div className='container'>
          <div className='grid'>
            <DatePicker />
          </div>
        </div>
      </section>
    );
  }
})

export default FiltersSection
