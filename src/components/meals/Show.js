import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Link } from 'react-router-dom'

import Box from '../meals/indexPageTools/Box'

class ShowMeal extends React.Component {
  constructor(){
    super()
    this.state = {
      meal: [], 
      names: [], 
      active: true, 
      unactive: false
    }
    this.handleIngredients = this.handleIngredients.bind(this)
    this.addFavs = this.addFavs.bind(this)
    this.removeFav = this.removeFav.bind(this)
  }
  
  componentDidMount(){
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ meal: res.data.meals[0]
      }, () => {
        this.handleIngredients()
        this.highlightChecker()
      })
      )
  }

  handleIngredients(){
    const ingredients = [this.state.meal.strIngredient1, this.state.meal.strIngredient2, this.state.meal.strIngredient3, this.state.meal.strIngredient4, this.state.meal.strIngredient5, this.state.meal.strIngredient6, this.state.meal.strIngredient7, this.state.meal.strIngredient8, this.state.meal.strIngredient9, this.state.meal.strIngredient10, this.state.meal.strIngredient11, this.state.meal.strIngredient12, this.state.meal.strIngredient13, this.state.meal.strIngredient14, this.state.meal.strIngredient15, this.state.meal.strIngredient16, this.state.meal.strIngredient17, this.state.meal.strIngredient18, this.state.meal.strIngredient19, 
      this.state.meal.strIngredient20]

    const portion = [this.state.meal.strMeasure1, this.state.meal.strMeasure2, this.state.meal.strMeasure3, this.state.meal.strMeasure4, this.state.meal.strMeasure5, this.state.meal.strMeasure6, this.state.meal.strMeasure7, this.state.meal.strMeasure8, this.state.meal.strMeasure9, this.state.meal.strMeasure10, this.state.meal.strMeasure11, this.state.meal.strMeasure12, this.state.meal.strMeasure13, this.state.meal.strMeasure14, this.state.meal.strMeasure15, this.state.meal.strMeasure16, this.state.meal.strMeasure17, this.state.meal.strMeasure18, this.state.meal.strMeasure19, this.state.meal.strMeasure20]

    if (ingredients.length === portion.length) {
      var c = []
      for (var i = 0; i < ingredients.length; i++) {
        c.push(ingredients[i] + ', ' + portion[i])
      }
    }
    let displayIngredients = c.filter(item => item !== ',  ' && item !== ', ' && item !== 'null, null')
    console.log(displayIngredients)
    displayIngredients = displayIngredients.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())

    return displayIngredients
  }

  addFavs() { 
    var names = []
    names = JSON.parse(window.localStorage.getItem('names')) || []
    names.push(this.state.meal.idMeal)
    names = window.localStorage.setItem('names', JSON.stringify(names))
    toast.success('You favourited ' + this.state.meal.strMeal )
    this.setState({ names, active: !this.state.active, unactive: !this.state.unactive })
    
  }


  removeFav(){
    var names = JSON.parse(window.localStorage.getItem('names'))
    names = names.filter(item => item !== this.state.meal.idMeal)
    names = window.localStorage.setItem('names', JSON.stringify(names))
    toast.info('You unfavourited ' + this.state.meal.strMeal)
    this.setState({ names, unactive: !this.state.unactive, active: !this.state.active  })
  }
  

  highlightChecker(){ 
    var names = JSON.parse(window.localStorage.getItem('names'))
    if(names.includes(this.state.meal.idMeal)){
      this.setState({ names, unactive: !this.state.unactive, active: !this.state.active })
    }
    
  }


  render() {
    const detectMob = window.mobileCheck = function () {
      let check = false;
      (function (a) { 
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check
    }
    console.log(detectMob())
    
    if (!this.state.meal || !this.state.meal.strTags) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
              </figure>
            </div>

            <ToastContainer />

            <div className="column">
              <div className="title is-1 has-text-centered">{this.state.meal.strMeal}</div>
              <div className="has-text-centered">

                {!detectMob && this.state.active && <button className="button is-primary" value={this.state.meal.idMeal} onClick={this.addFavs}><i className="fa fa-heart" />  Save this for later!</button>}
                {!detectMob && this.state.unactive && <button className="button is-danger" onClick={this.removeFav}> <i className="fas fa-heart-broken" />Remove this from your favourites </button>}
                <br />
                <br />


                <p className="title is-5 has-text-centered">{this.state.meal.strTags.split(',').join(', ')}</p>
                <Link to={`/countries/${this.state.meal.strArea}`}>
                  <p className="title is-5 has-text-centered"> {this.state.meal.strArea} </p>
                </Link>
                <hr />
              </div>

              <br />
              <p className="title is-3 has-text-centered">Ingredients:</p>
              <ul>
                {this.handleIngredients().map((item, index) =>
                  <li key={index} className="has-text-centered">{item}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="column">

          <p className="title is-4 has-text-centered">Instructions:</p>
          <p className="is-7 has-text-centered">{this.state.meal.strInstructions}</p>
          <br />
          <Box
            name={this.state.meal.strMeal}
            strYoutube={this.state.meal.strYoutube}
          />
        </div>



      </section>


    )
  }
}



export default ShowMeal
