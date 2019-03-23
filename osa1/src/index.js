import React from 'react';
import ReactDOM from 'react-dom';

//Jatka kohdasta: props: tiedonvälitys komponenttien välillä 
// https://fullstackopen-2019.github.io/osa1/reactin_alkeet

const Hello =() => {
    return(
        <div>
            <p> Hello world</p>
        </div>
    )
}

const App = () => {
    return (
    <div>
        <h1>Greetings</h1>
        <Hello />
        <Hello />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

