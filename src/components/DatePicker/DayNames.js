import React from 'react'

let DayNames = React.createClass({
  getInitialState: function (){
    return {
      days: ["MON","TUE","WED","THU","FRI","SAT","SUN"]
    }
  },
  componentWillMount: function () {
    
  },
  componentWillUnmount: function () {
    
  },
  render() {
    return (
      <div className='datepicker__daynames row'>
        {
          this.state.days.map(function (day, index) {
            return <span className='day span-1' key={index}>{day}</span>
          })
        }
      </div>
    );
  }
 
})

export default DayNames
