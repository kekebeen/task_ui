import React from 'react'
import ChartHeader from './ChartHeader'
import Filters from './Filters'
import Circle from './Circle'

// simple random int ( I think I have the same function somewhere else, but because of 
// time restriction I'm just typing)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let ChartCircle = React.createClass({
  getInitialState: function (){
    return {
      legend:
      [
        {
          title: '48',
          desc: '< 18 y.o.',
          color: '#b80add'
        },
        {
          title: '24',
          desc: '18-22 y.o.',
          color: '#0a95dd'
        },
        {
          title: '16',
          desc: '23-30 y.o.',
          color: '#1cc327'
        }
      ],
      data: [15, 11, 7, 4],
      data2: [{title:'54%',desc:'Revenue'},{title:'253',desc:'Sales'},{title:'18',desc:'Contracts'}],
      circleTitle: '13,6k'
    }
  },

  handleFilter: function (id) {

      this.setState({
        data: [],
        data2: []
      }, function () {
        switch(id){
          case 0:
            this.setState({
              data: [15, 11, 7, 4],
              circleTitle: '13,6k',
              data2: [{title:'54%',desc:'Revenue'},{title:'253',desc:'Sales'},{title:'18',desc:'Contracts'}],
            })
            return;
          case 1:
            this.setState({
              data: [11, 7, 15, 4],
              circleTitle: '1,20k',
              data2: [{title:'44%',desc:'Revenue'},{title:'153',desc:'Sales'},{title:'118',desc:'Contracts'}],
            })
            return;
          case 2:
            this.setState({
              data: [4, 11, 15, 7],
              circleTitle: '800.0',
              data2: [{title:'24%',desc:'Revenue'},{title:'123',desc:'Sales'},{title:'26',desc:'Contracts'}],
            })
            return;
          default:
            return;

        }
      })

  },
  render() {
    let style = {
      backgroundColor: this.props.color
    }
    let colors = ['#b80add', '#0a95dd', '#1cc327', '#eceff2']


    return (
      <div className='column-4 chart chart--circle'>
        <ChartHeader title="Services" />
        <div className='chart__subheader'>
          <Filters onHandleFilter={this.handleFilter}/>
        </div>
        <div className='chart__body chart__body--circle'>
          <div className="circle">
              <Circle
                circleTitle={this.state.circleTitle}
                data={ this.state.data }
                radius={ 80 }
                hole={ 74 }
                colors={ colors }
                strokeWidth={ 1 }
              />
            </div>
            <div className="legends">
              {
                this.state.legend.map((item,i) => {
                  let style={
                    backgroundColor: item.color
                  }
                  return (
                    <div className='legend' key={i}>
                      <div className="legend__top">
                        <span className="dot" style={style}></span>
                        <span className="text">{item.desc}</span>
                      </div>
                      <div className="legend__bottom">{item.title}%</div>
                    </div>
                  )
                })
              }
            </div>
        </div>

        <div className="chart__footer chart__footer--circle">
            {
              this.state.data2.map((item, i) => {
                return (
                  <div className="footer__block" key={i}>
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                  </div>
                )
              })
            }
        </div>
      </div>
    );
  }
})

export default ChartCircle
