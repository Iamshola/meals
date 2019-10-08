import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,  Route } from 'react-router-dom'

import Home from './components/pages/Home'
import ShowMeal from './components/meals/Show'
import MealsIndex from './components/meals/Index'
import Navbar from './components/common/Navbar'
import './style.scss'


class App extends React.Component {
  constructor(){
    super()
    // this.state = { meals: {} }
  }

  render(){
    return(
      <div>
        <HashRouter>
          <Navbar />
          <Route path="/meals/:id" component={ShowMeal} />
          <Route path="/search/:meal" component={MealsIndex} />
          <Route exact path="/" component={Home} />
        </HashRouter>

      </div>
    )
  }

}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
