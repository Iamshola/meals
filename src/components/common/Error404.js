import React from 'react'
import { Link } from 'react-router-dom'



class Loading extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <section className="hero">
  
        <div className="container">

          <div id="notfound">
            <figure className="image  is-1by1">
              <img src="https://media.giphy.com/media/l0D7flJ449F3aPaik/giphy.gif" alt="Loading" />
            </figure>
            <h2 className="title is-6 heading has-text-centered">No result found. Return <Link to="/">home </Link> </h2>
          </div>
     
        </div>

      </section>

        
   
    )
  }



}


export default Loading
