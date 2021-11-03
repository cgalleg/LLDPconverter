import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [color,setColor]= useState("Red");

  function inputChange(e){
    console.log(e.target.value);
    setColor(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={"Cristian"}/>
        <h1>{color}</h1>
        <input onChange={inputChange}></input>
      </header>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default App;
