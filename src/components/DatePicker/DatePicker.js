import React from 'react'
import moment from 'moment'
import DayNames from './DayNames'
import Week from './Week'
import iconLeft from '../../images/icon-left.png'
import iconRight from '../../images/icon-right.png'

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      month: moment(),
      selected: moment().startOf('month')
    };
    
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  
  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1,'month'),
    });
  }
  
  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week key={date} 
          date={date.clone()} 
          month={month} 
          select={(day)=>this.select(day)} 
          selected={selected} />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
    const {
      month,
    } = this.state;

    return <span className="label__month">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <div className="col-1-4 datepicker">
        <header className="datepicker__header">
          <div className="header__label">
            <div className='label__arrow label__arrow--left' onClick={this.previous}>
              <img src={iconLeft} alt="icon left" />
            </div>
            {this.renderMonthLabel()}
            <div className='label__arrow label__arrow--right' onClick={this.next}>
              <img src={iconRight} alt="icon right" />
            </div>
          </div>
          <DayNames />
        </header>
        {this.renderWeeks()}
      </div>
    );
  }
}
