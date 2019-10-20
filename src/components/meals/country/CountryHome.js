import React from 'react'

class CountryHome extends React.Component {
  constructor() {
    super()
    this.state = {
      countrySearchTerm: ''
    }
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleCountryChange(e) {
    this.setState({ countrySearchTerm: e.target.value })
  }

  handleSubmit() {
    this.props.history.push('/search/countries/' + this.state.countrySearchTerm)

  }

  render() {
   
    return (
      <div>
        <section className="hero is-fullheight-with-navbar is-bold">
          <div className="hero-body">
            <div className="column is-one-third-desktop has-text-centered">
              <h1 className="title is-1 heading">MealBored</h1>
              <h2 className="subtitle is-4"> A place for bored meal lovers</h2>
              <div className="field has add-ons">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" 
                    placeholder="Search your favourite cuisine" 
                    className="input is-rounded"
                    onChange={this.handleCountryChange} />
                </form>
              </div>
            </div>
          </div>
        </section>
        
      </div>

    )
  }
}

export default CountryHome
