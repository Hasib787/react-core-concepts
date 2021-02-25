import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])
  // const nayoks = [{ name: 'Sharukh', age: 55 }, { name: 'Salman', age: 52 }, { name: 'Amir', age: 53 }, { name: 'RajniKanth', age: 60 }]
  return (

    <div className="App">

      <header className="App-header">
        <MovieCounter></MovieCounter>
        {
          nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age} website={nk.website}></Nayok>)
        }
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

function MovieDisplay(props) {
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
      <h3>I have done 10 movies {props.age || 30} years</h3>
      <h4>Website: {props.website}</h4>
    </div>
  )
}

export default App;
