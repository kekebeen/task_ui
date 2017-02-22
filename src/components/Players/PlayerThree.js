import React from 'react'
import play from '../../images/play-button.png'
import shallow from '../../images/like-border.png'
import imgPlay from '../../images/img-play.png'
import imgHeart from '../../images/img-heart.png'
import imgMessage from '../../images/img-comment.png'
import PlayerFooter from './PlayerFooter'

let PlayerThree = React.createClass({
  getInitialState: function () {
    return{
      footerData:[{img: imgPlay,stat:'247,574'},{img: imgHeart,stat:'3,859'},{img:imgMessage,stat:'142'}],
      footerDuration: {current: '2:53',duration:'4:56'}
    }
  },
  render() {
    return (
      <div className='player player--three'>
        <div className="player__left">
          <div className="box">
            <img src={play} alt="play-button"/>
          </div>
        </div>
        <div className="player__right">
          <div className="player__header">
            <div className="header__block header__block--title">
              <h1 className="title">Square Feet</h1>
              <h3 className="subtitle">Noisia</h3>
            </div>
            <div className="header__block header__block--favourite">
              <img src={shallow} alt="like-heart"/>
            </div>
          </div>
          <div className="player__progress">
            <div className="tooltip"><div className="tooltip__inner">3:29</div></div>
          </div>
          <PlayerFooter data={this.state.footerData} duration={this.state.footerDuration}/>
        </div>
      </div>
    );
  }
})

export default PlayerThree
