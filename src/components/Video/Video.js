import React from 'react'
import iconVolume from '../../images/player-volume.png'
import iconFull from '../../images/player-full.png'
import iconHeart from '../../images/player-heart.png'
import iconShare from '../../images/player-share.png'
import imgShare from '../../images/img-heart.png'
import imgPlay from '../../images/img-play.png'
import imgComment from '../../images/img-comment.png'
import plus from '../../images/plus.png'

let Video = React.createClass({
  getInitialState: function() {
    return {
      url: this.props.url,
      video: null,
      progress: '0%',
      volume: 0.3,
      isMouseDown: false
    }
  },

  componentDidMount: function (){
    this.setState({
      video: this.refs.video
    }, () => {
      ['pause', 'play'].forEach(event => {
        this.state.video.addEventListener(event, () => {
          this.forceUpdate();
        });
      });
      this.state.video.addEventListener('timeupdate', this.handleProgress);
    });
  },

  togglePlay: function () {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  },

  handleProgress: function() {
    const { video } = this.state;
    const percent = (video.currentTime / video.duration) * 100;
    this.setState({
      progress: `${percent}%`
    });
  },

  handleRangeUpdate: function (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.refs.video[name] = value;
  },
  
  scrub: function(e) {
    const scrubTime = (e.nativeEvent.offsetX / this.refs.video.clientWidth) * this.refs.video.duration;
    if (!isNaN(scrubTime)) {
      this.refs.video.currentTime = scrubTime;
    }
  },

  startMouseDown: function(e) {
    this.setState({
      isMouseDown: true
    });
  },

  endMouseDown: function(e) {
    this.setState({
      isMouseDown: false
    });
  },
  
  skip:function (e) {
    const skipValue = e.target.attributes[0].value;
    if (!isNaN(skipValue)) {
      this.refs.video.currentTime += Number(skipValue);
    }
  },

  componentWillMount: function (){
    console.log("mounting player, url is", this.props.url)
  },


  render() {
    const video = this.state.video,
          progress = this.state.progress,
          playbackRate = this.state.playbackRate,
          volume = this.state.volume

    return (
      <div className='column-9 video'>
        <div className="video__header">
          <div className="video__icons">
            <img src={iconHeart} alt="icon-heart" className='icon__heart'/>
            <img src={iconShare} alt="icon-share" className='icon__share'/>
          </div>
          <video
            className="player__video viewer"
            ref="video"
            src={''}
            onClick={this.togglePlay}
          />
          
          <div className="player__controls">

            <div 
              className="player__button toggle" 
              title="Toggle Play"
              onClick={this.togglePlay}>
              { video && video.paused ? '►' : '||' }
            </div>

            <div className="progress">
              <progress
                 value="0.3"
                 max="1"
                 ></progress>
               <span className="time__elapsed"><span className='active'>0:24 / </span><span>3:51</span></span>
            </div>
            
            <div className="volume">
              <img src={iconVolume} alt="player-volume-icon" />
              <input 
                type="range" 
                name="volume" 
                className="input__range" 
                min="0" max="1" step="0.05" value={volume}
                onChange={this.handleRangeUpdate}
              />
            </div>

            <div className="quality">720</div>

            <div className="fullscreen"><img src={iconFull} alt="player-full-icon"/></div>
               
          </div>

        </div>
        <div className="video__body">
          <h1 className="video__title">Lord of the rings: The fellowship of the Ring (official trailer)</h1>
          <p className="video__description">The lord of the rings is an epic high-fantasy novel written by English
          autho J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but
          eventually  developed into a much larger work.</p>
          <div className="video__stats">
            <div className="stat stat--play">
              <img src={imgPlay} alt="icon-play"/> <span>12,434,934</span>
            </div>
            <div className="stat stat--share">
              <img src={imgShare} alt="icon-share"/> <span>6,563</span>
            </div>
            <div className="stat stat-comment">
              <img src={imgComment} alt="icon-comment"/> <span>831</span>
            </div>
          </div>
          <div className="body__footer">
            <div className="footer__block footer__block--avatar">
              <div className="dot"></div>
              <div className="author">
                <b>Sara jameson</b>
                <em>12,353 followers</em>
              </div>
            </div>

            <div className="footer__block footer__block--btn">
              <div className="button">
                <div className="left"><img src={plus} alt="icon-plus"/></div>
                <div className="right">Follow</div>
              </div>
            </div>

            <div className="footer__block footer__block--date">
              <span className="title">Uploaded: </span>
              <b>8 March, 2007</b>
            </div>

          </div>
        </div>
      </div>
    );
  }
})

export default Video
