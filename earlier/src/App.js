import './App.css';
import {useState, useEffect} from 'react';


const Person = (props) => {
  return (
    <>
    <h1> name : {props.name}</h1>
    <h1> surname : {props.last}</h1>
    </>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect( () => {
    setCounter(100);
  },[]);

  return (
    <div className="App">
     <h1>Hellow world!</h1>
     <Person name={"yash"} last={'sajwan'}/>

     <button onClick={ () => {
      setCounter((prevCount) => prevCount-1 );
     }}>-</button>
     <h1>{counter}</h1>
     <button onClick={() => {
      setCounter((prevCount) => prevCount+1);
     }} >+</button>


     
    </div>
  );
}

export default App;
