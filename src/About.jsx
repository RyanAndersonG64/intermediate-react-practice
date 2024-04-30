import { Link, RouterProvider } from "react-router-dom"
import { useState, useContext } from "react"
import { TeamContext } from "./main"



// const initialState = {
//   team: [],
//   error: null
// }
// const teamReducer = (state, action) => {
//   switch(action.type) {
//     case 'addMember':
//       return state.team.length >= 4 ? (
//         {
//           ...state,
//           error: 'Too many!'
//         }
//       ) : (
//         {
//           ...state,
//           team: [...state.team,{name: action.name, health: action.health, attack: action.attack, speed: action.speed}]
//         }
//       )
//     default: 
//       throw new Error('Skill issue')
//     }
//   }


function About() {
  const{ state, dispatch } = useContext(TeamContext)
  const[name, setName] = useState('')
  const[health, setHealth] = useState('')
  const[attack, setAttack] = useState('')
  const[speed, setSpeed] = useState('')
  console.log(state)
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Edit Team</h1>
      
      <div> Name
        <input 
          value = { name } 
          onChange = {(e) => {
            setName(e.target.value)
            console.log(name)
          }}
        >
        </input>
      </div>
        <div> Health
        <input  
          value = { health } 
          onChange = {(e) => {
            setHealth(e.target.value)
            console.log(health)
          }}
        >
        </input>
        </div>
        <div> Attack
          <input  
            value = { attack } 
            onChange = {(e) => {
              setAttack(e.target.value)
              console.log(attack)
            }}
          >
          </input>  
        </div>
        <div> Speed
          <input  
            value = { speed } 
            onChange = {(e) => {
              setSpeed(e.target.value)
              console.log(speed)
            }}
          >
        </input>
        </div>
        <button onClick = {() => dispatch({ type: 'addMember', name: name, health: health, attack: attack, speed: speed})}>
          Add Member
        </button>
    </div>
  )
}


export default About