import React from 'react'
import DayNames from './DayNames'

let DatePicker = React.createClass({
  getInitialState: function (){
    return {
     
    }
  },
  componentWillMount: function () {
    
  },
  componentWillUnmount: function () {
    
  },
  render() {
    return (
      <div className='col-1-4 datepicker'>
        <header className='datepicker__header'></header>
        <DayNames />
      </div>
    );
  },
 
})

export default DatePicker
