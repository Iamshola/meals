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
      <div className='loading-container'>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>
        <div className="loading-child"></div>

        <h2 className="title is-6 heading">No result found. Return <Link to="/">home </Link> </h2>
      </div>
    )
  }



}


export default Loading
