
import './App.css';

function App() {
  const nayoks = ['Sharukh','Salman','Amir','RajniKanth' ]
  return (
    
    <div className="App">
      
      <header className="App-header">
      <Nayok name={nayoks[1]} age='55'></Nayok>
      <Nayok name="Razzak"></Nayok>
      <Nayok name={nayoks[3]}></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle ={
    border: '2px solid red',
    margin: "10px",
    padding: '10px'
  }
  return (
    <div style={nayokStyle}>
       <h1>Ami Nayok: {props.name}</h1>
       <h3>I have done 10 movies {props.age  || 45} years</h3>
    </div>
  )
}

export default App;
