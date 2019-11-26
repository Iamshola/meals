import React from 'react'


const Checkboxes = ({ onChange, onClick }) => {
  return (
    <form onChange={onChange}>
      <div className="checkbox">
        <label className="title is-6">
          <input type="checkbox" value="onion" onClick={onClick} />
            Onion
        </label>
        <br />
     
        <label className="title is-6">
          <input type="checkbox" value="pork" onClick={onClick} />
            Pork
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="sugar" onClick={onClick} />
            Sugar
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value="eggs" onClick={onClick} />
            Eggs
        </label>
        <br />
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
          <input type="checkbox" value="flour" onClick={onClick} />
            Flour
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='garlic' onClick={onClick} />
            Garlic
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='sugar' onClick={onClick} />
            Sugar
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='ginger' onClick={onClick} />
            Ginger
        </label>
        <br />
        <label className="title is-6">
          <input type="checkbox" value='nut' onClick={onClick} />
            Nuts
        </label>
      </div>
        
    </form> 

   

  )
}
export default Checkboxes
