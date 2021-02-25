import React, { useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Sharukh', 'Salman', 'Amir', 'RajniKanth']
  return (

    <div className="App">

      <header className="App-header">
        <MovieCounter></MovieCounter>
        <Nayok name={nayoks[1]} age='55'></Nayok>
        <Nayok name="Razzak"></Nayok>
        <Nayok name={nayoks[3]}></Nayok>
        <Nayok name={nayoks[0]}></Nayok>
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of Movie: {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay (props){
  return <h3>Movie I have Acted: {props.movies} </h3>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid red',
    margin: "10px",
    padding: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok: {props.name}</h1>
      <h3>I have done 10 movies {props.age || 45} years</h3>
    </div>
  )
}

export default App;
