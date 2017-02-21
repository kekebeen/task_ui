import React from 'react'
import iconPlay from '../../images/img-play.png'

let VideoList = React.createClass({
  getInitialState: function() {
    return {
      videos: this.props.videos
    }
      
  },
  
  handleClick: function(i){
    this.props.onUrlChange(i)
  },

  render() {
    return (
      <div className='column-3 video-list'>
        <div className="list__header">
          <h1 className="title">Related videos</h1>
        </div>
        <ul className="list__items">
          {
            this.state.videos.map((video,i) => {
              return(
                <li key={i} className='item__video'>
                  <div className="item__header">
                    <div className="header__duration">{video.duration}</div>
                  </div>
                  <div className="item__body">
                    <h1 className="video__title" onClick={this.handleClick.bind(this,i)}>{video.title}</h1>
                    <div className="video__details">
                      <img src={iconPlay} alt="icon-play"/>{video.details}
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
})

export default VideoList
