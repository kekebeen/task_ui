import React from 'react'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

var Bar = React.createClass({
  getInitialState: function () {
    return {
      data: this.props.data || [],
      series: this.props.labels || ['JAN','','MAR','','MAY','','JUL','','SEP','', 'NOV'],
      colors: this.props.colors || ['#0a95dd', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    }
  },
 shouldComponentUpdate: function (nextProps, nextState) {
  if(this.props.data != nextProps.data || this.props.series != nextProps.series){
    return true;
  }
  return false;
},
  render: function () {
    return (
      <div>
        <Charts
          data={ this.state.data }
          labels={ this.state.series }
          colors={ this.state.colors }
          height={ 100 }
          stacked={'stacked'}
        />
      </div>
    );
  }
});



export default Bar
