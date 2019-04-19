import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Display = (props) => {
  return (
    <div>
      has {props.pisteet} points.
    </div>
  )
}

let points = {0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor((Math.random() * 6)))

  const generateRandom = () => {
    setSelected(Math.floor((Math.random() * 6)))
  }

  const updatePoints = () => {
    const copy = {...points}
    copy[selected] += 1
    points = copy
  }
  
  console.log(points)

  return (
    <div>
      {props.anecdotes[selected]}<br></br>
      <Display pisteet = {points[selected]} />
      <Button handleClick = {updatePoints} text = "vote" />
      <Button handleClick = {generateRandom} text="next anecdote" />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)