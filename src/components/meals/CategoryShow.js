import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card'


class CategoryShow extends React.Component {
  constructor() {
    super()
    this.state = {
      category: []
    }
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.id)
      .then(res => this.setState({ category: res.data.meals }))
  }


  render() {
    console.log(this.state.category)
    if (!this.state.category) return <h2>Loading...</h2>
    return (
      <div className="container">
        <section className="section">
          <div className="column">
            <div className="columns is-multiline">
              {this.state.category.map(category =>
                <div className="column is-half-tablet is-one-quarter-desktop"
                  key={category.idMeal}
                >
                  <Link to={`/meals/${category.idMeal}`}>
                    <Card name={category.strMeal} image={category.strMealThumb} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }
}



export default CategoryShow
