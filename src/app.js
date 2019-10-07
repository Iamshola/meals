import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
  constructor(){
    super()
    // this.state = { cocktails: {} }
  }

  render(){
    return(
      <div>
        <h1>Hey there</h1>
      </div>
    )
  }

}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
