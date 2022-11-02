import React, {useEffect,useState} from "react";
import axios from "axios";
import Create from "./Create/Create";
import './App.css';

function App() {
  const [state, setstate] = useState([])

  useEffect(()=>{
    axios.get("https://6362426266f75177ea2a9be0.mockapi.io/ToDo").then((res) =>{
      console.log(res);
      setstate(res.data);
    })
  },[])
  console.log(state)
  return (
    <div className="App">
      

    <Create/>


{state.map((e)=>(
  <div>
  <h1 >First Name:{e.fName} </h1>
  <h1>Last Name:{e.fName}</h1>

  </div>
))}
    </div>
  );
}

export default App;
