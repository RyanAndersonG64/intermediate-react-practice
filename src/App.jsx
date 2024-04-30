import { Link } from "react-router-dom"
import { useContext } from "react"
import { TeamContext } from "./main"
import { render } from "react-dom"





const Title = () => {
  return (
      <h1>
        Team Members
      </h1>
  )
}

function App() {
  const { state } = useContext(TeamContext)
  console.log('display =' + state.team)
  const teamDisplay = state.team.map((member, index) => {
    console.log(member)
    return (
      <div key = { index }>
     <h2>{ member.name }</h2>
     <br></br>
     <h5>{ 'health: ' + member.health }</h5>
     <h5>{ 'attack: ' + member.attack }</h5>
     <h5>{ 'speed: ' + member.speed }</h5>
     <br></br>
     </div>
    )
})
  return (
    <div className="p-5">
      <Link to='/about'>Edit Team</Link>
      <Title />
      <h2> { teamDisplay} </h2>
    </div>
  )
}


export default App
