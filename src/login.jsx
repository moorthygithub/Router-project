import { useState } from "react";
import "./App.css"
import { useNavigate } from "react-router-dom";
function Login(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")
    
    const change=(e)=>{
        setName(e.target.value)
    }
    const change1=(e)=>{
        setEmail(
        e.target.value
        )
      }
      const change2=(e)=>{
        setPassword(
        e.target.value
        )
      }
      const change3=(e)=>{
        setCpassword(
         e.target.value
        )
      }
      function Submit(){
        if(name.length<6){
          alert("ENTER GREATER THAN FIVE CHARACTER")
        }
        else if(password!==cpassword){
          alert("PASSWORD NOT MATCH")
      
        }
        else{
          alert("from submiit")
          localStorage.setItem("NAME",name)
          localStorage.setItem("EMAIL",email)
          localStorage.setItem("PASSWORD",password)
          localStorage.setItem("CPASSWORD",cpassword)
        }
      }
      const navigative=useNavigate()
      const update=()=>{
              navigative("/Home")
      }
      const update1=()=>{
        navigative("/About")
}
const update2=()=>{
    navigative("/Contact")
}
    return(
        <div >
           <h1 id="login-home">LOGIN</h1>
            <hr></hr>
          <div className="form">
            <form onSubmit={Submit}>
            <h1>DATA ENTERY</h1>
            <label>NAME:</label>
            <input type="text"value={name}onChange={change} placeholder="Moorthy"></input>
            <br></br><br></br>
            <label>EMAIL:</label>
            <input type="email" value={email}onChange={change1} placeholder="moorthy21@gmail.com"></input>
            <br></br><br></br>
            <label>PASSWORD:</label>
            <input type="password" value={password}onChange={change2} placeholder="Moorthy@123"></input>
            <br></br><br></br>
            <label>CONFORM PASSWORD:</label>
            <input type="password" value={cpassword}onChange={change3} placeholder="Moorthy@123"></input>
            <br></br><br></br>
            <input type="submit" id="btform"></input>
            
            </form>
            </div>
            <div>
            <center>
         <button id="about-one" onClick={update}>TO HOME</button>
            <button id="about-two" onClick={update1}>TO ABOUT</button>
            <button id="about-three" onClick={update2}>TO CONTACT</button>
         </center>
            </div>
         
        </div>
    )
}
export default Login;

