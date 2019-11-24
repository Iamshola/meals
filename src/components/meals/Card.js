import React from 'react'

const Card = ({ name, image }) => {
  return (

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            
          </div>
          <div className="media-content">
            <p className="title is-7 heading">{name}</p>
               
          </div>
        </div>
      </div>
    </div>

  )
}
export default Card
