import React from 'react'
import imgPlay from '../../images/img-play.png'
import Carousel from '../Carousel/Carousel'
import current from '../../images/pause.svg'
import prev from '../../images/rewind.svg'
import next from '../../images/forward.svg'
import Canvas from '../../components/Canvas/Canvas'
import PlayerFooter from './PlayerFooter'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let PlayerOne = React.createClass({
  getInitialState: function () {
    return {
      values: [30, 40, 50, 60, 120],
      random: [],
      width: 3,
      currX: 3,
      base: 10,
      footer:[{img: imgPlay,stat:'3,857,109'}],
      footerDuration: {current: '0:24',duration:'3:25'}
    }
  },

  componentDidMount: function () {
    //this.generateRandomBars(120,100)
  },

  generateRandomBars: function(len,max){
    let data = []
    var rand = null
    for(var i = 0; i <= len; i++) {
      rand = (getRandomInt(1,10) * 10)
      
      data.push(rand)
    }

    this.setState({
      random: data
    }, function() {
      this.updateCanvas()
    })
  },

  updateCanvas: function () {
    const ctx = this.refs.progress.getContext('2d');
    let elem = document.getElementById('progress')
    let width = this.state.width
    let points = this.state.random
    let currX = this.state.currX
    let base = this.state.base
    console.log(points)
    points.map((point,i) => { 
      console.log(point,i, currX)
      ctx.fillStyle = '#eef2f5'
      ctx.fillRect(currX ,elem.height - point, width, point)
      currX += width + 2
    })
  },
  render() {
    return (
      <div className='player player__one'>
        <div className="player__header">
          <Carousel indicator={false} switcher={true}>
            <div className="header">
              <div className="box" ><img src={prev} alt="rewind"/></div>
              <div className="box">
                <img src={current} alt="playing"/>
              </div>
              <div className="box"><img src={next} alt="forward"/></div>
            </div>
          </Carousel>
        </div>
        <div className="player__title">
          <h1 className="title">Hello there</h1>
          <h3 className="subtitle">Imagine Dragons</h3>
        </div>
        <Canvas color="#0a95dd" canvasHeight={70} canvasWidth={260} randomMax={50} />
        <PlayerFooter data={this.state.footer} duration={this.state.footerDuration}/>
      </div>
    );
  }
})

export default PlayerOne
