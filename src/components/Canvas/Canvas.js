import React from 'react'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let Canvas = React.createClass({
  getInitialState: function () {
    return {
      data: this.props.data,
      random: [],
      width: this.props.width || 3,
      currX: this.props.currX || 3,
      base: this.props.base || 10,
      randomLen: this.props.randomLen || 120,
      randomMax: this.props.randomMax || 120,
      canvasWidth: this.props.canvasWidth || 350,
      canvasHeight: this.props.canvasHeight || 150,
      color: this.props.color || '#eef2f5'
    }
  },

  componentDidMount: function () {
    let len = this.state.randomLen
    let max = this.state.randomMax
    this.generateRandomBars(len, max)
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
    let color = this.state.color
    let base = this.state.base

    points.map((point,i) => { 
      ctx.fillStyle = color
      ctx.fillRect(currX ,elem.height - point, width, point)
      currX += width + 2
    })
  },
  render() {
    let canvasWidth = this.state.canvasWidth
    let canvasHeight = this.state.canvasHeight

    return (
        <div className="player__progress">
          <canvas id="progress" className="canvas" ref="progress" width={canvasWidth} height={canvasHeight}></canvas>
          <div className="overlay"></div>
        </div>
    );
  }
})

export default Canvas
