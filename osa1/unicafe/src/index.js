import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stats = (props) => {
  
  if (props.yht === 0) {
    return (
      <div>
        Yhtään palautetta ei ole vielä annettu
      </div>
    )
  }

  let keski = (props.hyva - props.paha )/ props.yht
  let posi = (props.hyva / props.yht)*100

  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>Hyvä</td><td>{props.hyva}</td>
        </tr>
        <tr>
          <td>Neutraali</td><td>{props.neutraali}</td>
        </tr>
        <tr>
          <td>Huono</td><td>{props.paha}</td>
        </tr>
        <tr>
          <td>Yhteensä</td><td>{props.yht}</td>
        </tr>
        <tr>
          <td>Keskiarvo</td><td>{keski}</td>
        </tr>
        <tr>
          <td>Positiivisia</td><td>{posi}%</td>
        </tr>
        </tbody>
      </table>
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
      <h2>Tilastot</h2>
      <Stats hyva={good} neutraali={neutral} paha={bad} yht={total}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

