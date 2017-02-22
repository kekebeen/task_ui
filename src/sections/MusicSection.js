import React from 'react'
import PlayerOne from '../components/Players/PlayerOne'
import PlayerTwo from '../components/Players/PlayerTwo'
import PlayerThree from '../components/Players/PlayerThree'

let MusicSection = React.createClass({
  render() {
    return (
      <section className='section' id="music">
        <div className="container">
          <div className="row">
            <div className="column-3 mr">
              <PlayerOne />
            </div>
            <div className='column-9'>
              <PlayerTwo />
              <PlayerThree />
            </div>
          </div>
        </div>
      </section>
    );
  }
})

export default MusicSection
