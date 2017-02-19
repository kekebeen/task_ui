import React from 'react'

export default class Day extends React.Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected
    } = this.props;

    return (
      <span 
        key={date.toString()} 
        className={"day" + (isToday ? " day--today" : "") + (isCurrentMonth ? "" : " day--different-month") + (date.isSame(selected) ? " day--selected" : "")} 
        onClick={()=>select(day)}>{number}</span>
    );
  }
}
