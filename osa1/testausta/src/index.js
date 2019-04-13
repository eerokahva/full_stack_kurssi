import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//Jatka kohdasta: Osa1, Komponentil tila ja tapahtumankäsittely, Tapahtumankäsittelijä on funktio

const App = (props) => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () =>
      setCounter(counter + 1)

    const setToZero = () =>
      setCounter(0)

    return (
      <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}>
          zero
        </button>
      </div>
    )
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





