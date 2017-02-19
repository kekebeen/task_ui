import React from 'react'
import DatePicker from '../components/DatePicker/DatePicker'
import CollapsibleWidgetList from '../components/Collapsible/CollapsibleWidgetList'
import CollapsibleWidgetFilter from '../components/Collapsible/CollapsibleWidgetFilter'

let FiltersSection = React.createClass({
  render() {
    return (
      <section className='section' id="filters">
        <div className='container'>
          <div className='grid'>
            <DatePicker />
            <CollapsibleWidgetFilter />
            <CollapsibleWidgetList />
          </div>
        </div>
      </section>
    );
  }
})

export default FiltersSection
