import React from 'react'
import { Link } from 'react-router-dom'
import Jump from 'react-reveal/Jump'
import Flash from 'react-reveal/Flash'


// import ReactPlayer from 'react-player'

const Modal = (props) => {
  console.log(props.show)
  return (
  // <div>
  //   <div className="modal-wrapper"
  //     style={{
  //       transform: props.show ? 'translateY(0vh)' : 'translateY(-10vh)',
  //       opacity: props.show ? '1' : '0'
  //     }}>

          
  //     <div className="modal-header">
  //       <h1 className="title is-5 heading has-text-centered has-text-white">{props.strMeal}</h1>
  //       <span className="close-modal-btn" onClick={props.close}>×</span>
  //     </div>
  //     <div className="modal-body">

  //       <div className="columns is-flex is-centered">
  //         <figure className="image homeImage">
  //           <img className="" src={props.strMealThumb} alt={props.strMeal} />
  //         </figure>
  //       </div>


  //       <br />
          
  //       <p> {props.strInstructions} </p>

  //     </div>
  //     <div className="modal-footer">
  //       <button className="btn-cancel" onClick={props.close}>CLOSE</button>
  //     </div>
  //   </div>
  // </div>


    <div className={`modal ${props.show ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h1 className="title is-5 heading has-text-centered">{props.strMeal}</h1>
          <button className="delete" onClick={props.close} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="columns is-flex is-centered">
            <figure className="image homeImage">
              <img className="" src={props.strMealThumb} alt={props.strMeal} />
            </figure>
          </div>


          <br />

          <p> {props.strInstructions} </p>
        </section>
      </div>
    </div>

  )
}

export default Modal