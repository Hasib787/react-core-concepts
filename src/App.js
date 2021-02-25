
import './App.css';

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      </header>
    </div>
  );
}

function Nayok(){
  const nayokStyle ={
    border: '2px solid red',
    margin: "10px",
    padding: '10px'
  }
  return (
    <div style={nayokStyle}>
       <h1>Ami khol Nayok!!</h1>
       <h3>I have done 10 movies</h3>
    </div>
  )
}

export default App;
