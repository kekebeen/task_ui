import React from 'react'

let Rating = React.createClass({
  getInitialState: function () {
    return {
      starValue: Math.floor(this.props.stars) || 1,
      dynamicValue: Math.floor(this.props.stars) || 1 
    }
  },

  handleClick: function (value) {
    this.setState({
      starValue: value,
      dynamicValue: value
    })
  },

  handleMouseEnter: function (value) {
    this.setState({
      dynamicValue: value
    })
  },

  handleMouseLeave: function (value){
    this.setState({
      dynamicValue: this.state.starValue
    })
  },

  render() {
    let stars = this.props.stars
    let votes = this.props.votes
    let star  = Math.floor(stars)
    let starSpans = []

    for ( let i = 1; i <= 5; i++) {
      if( i <= this.state.dynamicValue) {
        starSpans.push(
          <span key={i}
            className='star'
            onMouseEnter={this.handleMouseEnter.bind(this,i)}
            onMouseLeave={this.handleMouseLeave.bind(this,i)}
            onClick={this.handleClick.bind(this,i)} >
            ★
            </span>
        )
      } else {
        starSpans.push(
          <span key={i}
            className='star star--empty'
            onMouseEnter={this.handleMouseEnter.bind(this,i)}
            onMouseLeave={this.handleMouseLeave.bind(this,i)}
            onClick={this.handleClick.bind(this,i)} >
            ★
          </span>
        )
      }

    }
    return (
      <div className='rating__stars'>
        {starSpans}
      </div>
    );
  }
})



export default Rating
