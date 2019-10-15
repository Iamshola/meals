import React from 'react'

const Card = ({ name, image }) => {
  return (
    <div className="card">
      
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>

      <div className="card-content has-text-centered">
        <h1>
          {name}
        </h1>
      </div>

    </div>

  )
}
export default Card
