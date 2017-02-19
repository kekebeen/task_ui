import React from 'react'
import DatePicker from '../components/DatePicker/DatePicker'
import Collapsible from '../components/Collapsible/Collapsible'

let FiltersSection = React.createClass({
  render() {
    return (
      <section className='section' id="filters">
        <div className='container'>
          <div className='grid'>
            <DatePicker />
            <Collapsible />
          </div>
        </div>
      </section>
    );
  }
})

export default FiltersSection
