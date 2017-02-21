import React from 'react'
import Charts from './Charts'
import ChartHeader from './ChartHeader'
import ChartBarSubHeader from './ChartBarSubHeader'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

let ChartBar = React.createClass({
  getInitialState: function () {
    return {
      title: 'Statistics',
      YearlyNumber: '1,829',
      MonthlyNumber: '829',
      DailyNumber: '150',
      activeNumber: '1,829',
      text: 'sales',
      data: [],
      series: ['JAN','','MAR','','MAY','','JUL','','SEP','', 'NOV'],
      colors: ['#0a95dd', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    }
  },
  componentWillMount: function () {
    this.populateData()
  },
  populateData: function () {
    var data = [],
      series = 12,//getRandomInt(2, 10),
      serieLength = 1;//getRandomInt(2, 10);
  
    for (var i = series; i--; ) {
      var tmp = [];
      
      for (var j = serieLength; j--; ) {
        tmp.push(getRandomInt(0, 20));
      }
      
      data.push(tmp);     
    }
    
    this.setState({ data: data });
  },

  handleFilter: function (id) {
    this.setState({
      data: []
    }, function () {
      this.populateData()
      switch(id){
        case 0:
          this.setState({activeNumber: '1,829'})
          return
        case 1:
          this.setState({activeNumber: '762'})
          return
        case 2:
          this.setState({activeNumber: '98'})
          return
        default:
          return
      }
    })

    this.forceUpdate()
  }, 
  render() {
    return (
      <div className='column-4 chart chart--bar'>
        <ChartHeader title={this.state.title} />
        <ChartBarSubHeader number={this.state.activeNumber} text={this.state.text} onHeaderFilter={this.handleFilter}/>
        <div className='chart__body'>
          <Charts
            data={ this.state.data }
            labels={ this.state.series }
            colors={ this.state.colors }
            height={ 100 }
            stacked={'stacked'}
          />
        </div>
      </div>
    );
  }
})

export default ChartBar
