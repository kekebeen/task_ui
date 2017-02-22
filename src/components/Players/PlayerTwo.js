import React from 'react'
import play from '../../images/play-button.png'
import likeHeart from '../../images/like-red.png'
import imgPlay from '../../images/img-play.png'
import imgHeart from '../../images/img-heart.png'
import imgMessage from '../../images/img-comment.png'
import PlayerFooter from './PlayerFooter'
import Canvas from '../Canvas/Canvas'

let PlayerTwo = React.createClass({
  getInitialState: function () {
    return{
      footerData:[{img: imgPlay,stat:'12,434,934'},{img: imgHeart,stat:'6,563'},{img:imgMessage,stat:'831'}],
      footerDuration: {current: '0:35',duration:'4:38'}
    }
  },
  render() {
    return (
      <div className='player player--two'>
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
              <img src={likeHeart} alt=""/>
            </div>
          </div>
          <Canvas color="#0a95dd" canvasHeight={40} canvasWidth={600} randomMax={10} randomLen={300}/>
          <PlayerFooter data={this.state.footerData} duration={this.state.footerDuration}/>
        </div>
      </div>
    );
  }
})

export default PlayerTwo
