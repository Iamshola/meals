import React from 'react'
import axios from 'axios'
import Card from './Card'
import { Link } from 'react-router-dom'

class CategoryIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      category: []
    }

  }


  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => this.setState({ category: res.data.categories }))
  }
  render(){
    console.log(this.state.category)
    if (!this.state.category) return <h2>Loading...</h2>
    return (
      <div className="container">
        <section className="section">
          <div className="column">
            <div className="columns is-multiline">
              {this.state.category.map(category =>
                <div className="column is-half-tablet is-one-quarter-desktop"
                  key={category.idCategory}
                >
                  <Link to={`/categories/${category.idCategory}`}>
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
