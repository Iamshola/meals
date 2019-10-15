import React from 'react'
import axios from 'axios'


class CategoryShow extends React.Component {
  constructor() {
    super()
    this.state = {
      category: {}
    }
  }

  componentDidMount() {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php/${this.props.match.params.id}`)
      .then(res => this.setState({ category: res.data.categories }))
  }


  render() {
    console.log(this.state.category)
    if (!this.state.category) return <h2>Loading...</h2>
    return (
      <div className="container">
        <section className="section">
          <h1>Hi Show</h1>
          <figure className="image">
            <img 
              src={this.state.category.strCategoryThumb} 
              alt={this.state.category.strCategory} 
            />
          </figure>
          <br />
          <div className="title is-1 has-text-centered">{this.state.category.strCategory}</div>
          <h2 className="title is-6 heading has-text-centered">{this.state.category.strCategoryDescription}</h2>
        </section>
      </div>
    )
  }
}



export default CategoryShow
