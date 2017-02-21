import React from 'react'
import Video from '../components/Video/Video'
import VideoList from '../components/Video/VideoList'

let VideoSection = React.createClass({
  getInitialState: function () {
    return {
      videos: [
        {title:'The lord of the Rings - Best scene of the movie (HD)',duration:'2:41', url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',details:'8,204,301'},
        {title: 'LOTR: The Two Towers - The Battle of the Hornburg',duration:'4:38', url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4', details:'2,857,112'},
        {title: 'Lord of The Rings - Battle of Helms  Deep Opening',duration:'6:38', url: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4', details:'3,642,730'}
      ],
      currentVideo: ''
    }
  },

  componentWillMount: function () {
    let video = this.state.videos[0].url
    this.setState({
      currentVideo: video
    })
  },

  componentDidMount: function (){
    this.forceUpdate()
  },

  render() {
    return (
      <section className='section' id="video">
        <div className="container">
          <div className="row">
            <Video url={this.state.currentVideo}/>
            <VideoList videos={this.state.videos} onUrlChange={this.handleChange}/>
          </div>
        </div>
      </section>
    );
  },

  handleChange: function(id){
    let video = this.state.videos[id].url
    this.setState({
      currentVideo: video
    })
    console.log("setted new video with id: ", this.state.currentVideo)
  }
})

export default VideoSection
