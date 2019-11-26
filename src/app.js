import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,  Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import ShowMeal from './components/meals/Show'
import MealsIndex from './components/meals/Index'
import Navbar from './components/common/Navbar'
import './style.scss'
import CategoryIndex from './components/meals/country/CategoryIndex'
import CountriesIndex from './components/meals/country/CountriesIndex'



class App extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route exact path="/countries/:country" component={CountriesIndex} />
            <Route exact path="/countries/:id" component={ShowMeal} />
            <Route path="/categories/:id" component={CategoryIndex} />
            <Route path="/meals/:id" component={ShowMeal} />
            <Route path="/search/:meal" component={MealsIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    )
  }

}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
