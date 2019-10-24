import React from 'react'

const Card = ({ name, image }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p className="title is-6 heading">{name}</p>
          </div>

        </div>
      </article>
    </div>


  )
}
export default Card
