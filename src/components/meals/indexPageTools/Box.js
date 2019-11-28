import React from 'react'
import ReactPlayer from 'react-player'

const Box = ({ strYoutube }) => {
  return (
    <div className="card">

      <div className="card-image">
        <div className='player-wrapper'>
          <ReactPlayer
            url={strYoutube}
            className='react-player'
            playing
            width='100%'
            height='100%'

          />
        </div>
      </div>
    </div>

  )
}
export default Box