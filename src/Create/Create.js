import React,{useState} from 'react'
import axios from "axios";

function Create(){
const [fName, setfName] = useState()
const [lName, setlName] = useState()
let url ="https://6362426266f75177ea2a9be0.mockapi.io/ToDo"

const postData = () => {
    axios.post(url,{
        fName,
        lName
    }).then(res =>{
        console.log(res);

     })
}
  return (
    <div>

<input placeholder='FName' onChange={e=>{setfName(e.target.value)}}/>
<input placeholder='FName' onChange={e=>{setlName(e.target.value)}}/>
<button on onClick={postData}>LogIn</button>


    </div>
  )
}
export default Create
