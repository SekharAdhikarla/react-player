import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

const videoUrl = 'https://youtu.be/YE7VzlLtp-4'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'pause' : 'play'

    return (
      <div className="video-container">
        <h1 className="heading">AVS Player</h1>
        <div className="responsive-container">
          <ReactPlayer url={videoUrl} playing={isPlaying} />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}
export default VideoPlayer
