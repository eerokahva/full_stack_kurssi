import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stats = (props) => {
  let keski = 0
  let posi = 0
  if (props.yht === 0) {
    keski = 0
    posi = 0
  }
  else {
    keski = (props.hyva - props.paha )/ props.yht
    posi = (props.hyva / props.yht)*100
  }

  return (
    <div>
      <h2>Tilastot</h2>
      Hyvä {props.hyva} <br></br>
      Neutraali {props.neutraali} <br></br>
      Huono {props.paha} <br></br>
      Yhteensä {props.yht} <br></br>
      Keskiarvo {keski} <br></br>
      Positiivisia {posi}%
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
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Anna palautetta Unicafelle</h1>
      <Button handleClick = {handleGood} teksti = "hyvä"/>
      <Button handleClick = {handleNeutral} teksti = "neutraali"/>
      <Button handleClick = {handleBad} teksti = "huono"/>
      <br></br><br></br>
      <Stats hyva={good} neutraali={neutral} paha={bad} yht={total}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

