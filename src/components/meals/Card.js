import React from 'react'


const Card = ({ strMeal, strCategory, strArea, strMealThumb}) => {


  return(
    <div className="card">

      <div className="card-image">
        <figure className="image is-3by2">
          <img src={strMealThumb} alt={strMeal} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-6 heading">{strMeal}</p>
        <hr/>
        <p className="text is-12">{strCategory}, <br />{strArea}</p>
      </div>
    </div>


  )
}

export default Card
