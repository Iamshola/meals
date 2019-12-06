import React from 'react'


const Checkboxes = ({ onChange, onClick }) => {
  return (
    <form onChange={onChange}>
      <div className="checkbox">
        
        <label className="title is-6">
          <input type="checkbox" value="sugar" onClick={onClick} />
            Sugar
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="egg" onClick={onClick} />
            Eggs
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="flour" onClick={onClick} />
            Flour
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='nut' onClick={onClick} />
            Nuts
        </label>
        <br />
        <br />
        

        <h1 className="title is-7 heading">Dairy Products</h1>
        <label className="title is-6">
          <input type="checkbox" value="milk" onClick={onClick} />
          Milk
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="butter" onClick={onClick} />
          Butter
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="ricotta" onClick={onClick} />
          Ricotta
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="cream" onClick={onClick} />
          Single Cream/Double Cream
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="yogurt" onClick={onClick} />
          Yogurt
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="parmesan" onClick={onClick} />
          Parmesan
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="gruyère" onClick={onClick} />
          Gruyere
        </label>
        <br/>
        <label className="title is-6">
          <input type="checkbox" value="cheddar" onClick={onClick} />
          Cheddar Cheese
        </label>
        <br />
        <br />
        
        <h1 className="title is-7 heading">Meat and Fish</h1>
        <label className="title is-6">
          <input type="checkbox" value="pork" onClick={onClick} />
          Pork
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="chicken" onClick={onClick} />
          Chicken
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="beef" onClick={onClick} />
          Beef
        </label>
        <br/>
        <label className="title is-6">
          <input type="checkbox" value="prawn" onClick={onClick} />
          Prawn
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="duck" onClick={onClick} />
          Duck
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="prosciutto" onClick={onClick} />
          Prosciutto
        </label>
        <br/>

        <label className="title is-6">
          <input type="checkbox" value="salmon" onClick={onClick} />
          Salmon
        </label>
        <br />
        <br/>

        <h1 className="title is-7 heading">Vegetables</h1>
        <label className="title is-6">
          <input type="checkbox" value="onion" onClick={onClick} />
          Onion
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="broccoli" onClick={onClick} />
          Broccoli
        </label>
        <br/>
        <label className="title is-6">
          <input type="checkbox" value="pepper" onClick={onClick} />
          Pepper
        </label>
        <br/>
        <label className="title is-6">
          <input type="checkbox" value="tomato" onClick={onClick} />
          Tomatoes
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='ginger' onClick={onClick} />
          Ginger
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='garlic' onClick={onClick} />
          Garlic
        </label>
        <br />

        <label className="title is-6">
          <input type="checkbox" value='potatoe' onClick={onClick} />
          Potatoes
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='leek' onClick={onClick} />
          Leek
        </label>
        <br />
      </div>
        
    </form> 

   

  )
}
export default Checkboxes
