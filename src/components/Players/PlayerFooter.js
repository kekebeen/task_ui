import React from 'react'

let PlayerFooter = React.createClass({
  getInitialState: function () {
    return {
      data: this.props.data || 'no values',
      duration: this.props.duration || {current:'0:53',duration:'3:29'}
    }
  },

  componentDidMount: function () {
    //this.generateRandomBars(120,100)
  },
  
  render() {
    return (
      <div className="player__footer">
        {
          this.state.data.map((item, i) => {
            return(
              <div className="footer__block footer__block--stats" key={i}>
                <img src={item.img} alt="img-play"/>
                <span className="stat">{item.stat}</span>
              </div>
            )
          })
        }
        
        <div className="footer__block footer__block--duration">
        {this.state.duration.current} / {this.state.duration.duration}
        </div>
      </div>
    );
  }
})

export default PlayerFooter
