import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stats = (props) => {
  return (
    <div>
      Hyvä {props.hyva} <br></br>
      Neutraali {props.neutraali} <br></br>
      Huono {props.paha} <br></br>
    </div>
  )
}

const Button =({handleClick, teksti}) => (
  <button onClick = {handleClick}>
    {teksti}
  </button>
)

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Anna palautetta Unicafelle</h1>
      <Button handleClick = {handleGood} teksti = "hyvä"/>
      <Button handleClick = {handleNeutral} teksti = "neutraali"/>
      <Button handleClick = {handleBad} teksti = "huono"/>
      <br></br><br></br>
      <Stats hyva={good} neutraali={neutral} paha={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

