import React from 'react'
import axios from 'axios'
import Card from './Card'
import { Link } from 'react-router-dom'

class CategoryIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      categories: []
    }

  }


  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => this.setState({ categories: res.data.categories }))
  }
  render(){
    console.log(this.state.categories)
    if (!this.state.categories) return <h2>Loading...</h2>
    return (
      <div className="container">
        <section className="section">
          <h1 className="title is-1 heading has-text-centered">Category</h1>
          <hr />
          <div className="column">
            <div className="columns is-multiline">
              {this.state.categories.map(category =>
                <div className="column is-half-tablet is-one-quarter-desktop"
                  key={category.idCategory}
                >
                  <Link to={`/categories/${category.strCategory}`}>
                    <Card 
                      name={category.strCategory} 
                      image={category.strCategoryThumb} 
                    />
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



export default CategoryIndex
