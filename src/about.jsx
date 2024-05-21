import { useNavigate } from "react-router-dom";
import four from "./Assests/four.jpg"
import three from "./Assests/three.jpg"
import two from "./Assests/two.jpg"
import one from "./Assests/one.jpg"

function About(){
    const navigative=useNavigate()
    const update=()=>{
        navigative("/Home")
            
    }
    const update1=()=>{
        navigative("/Contact")
}
const update2=()=>{
    navigative("/Login")
}
    return(
        <div>
          <center>  
           <h1 id="login">OUR TEAM</h1>
            <hr></hr>
            <h1 > MEET OUR LOVELY TEAM</h1>
            <p>A front-end development team is responsible for creating and maintaining the user interface of websites or web applications. This includes writing HTML, CSS, and JavaScript code to build interactive and visually appealing interfaces. They also ensure optimal performance, cross-platform compatibility, and adherence to design and accessibility standards. Collaboration, version control, and continuous integration are integral parts of their workflow.</p>
             <div id="about-img">
                <img src={one} height="150px" width="230px"></img>
                <img src={two}height="150px" width="230px"></img>
                <img src={three}height="150px" width="230px"></img>
                <img src={four}height="150px" width="230px"></img>
             </div>
              <div id="about-img" >
                <p>John Welskar<br></br>Founder & CEO</p>
                <p>Chloe Stone<br></br>Co-Founder</p>
                <p>Martin Smith<br></br>Accountant</p>
                <p>John Stevens<br></br>Consultant</p>
              </div>
              <button id="about-one" onClick={update}>TO HOME</button>
            <button id="about-two" onClick={update1}>TO CONTACT</button>
            <button id="about-three" onClick={update2}>TO LOGIN</button>
            </center>
            
        </div>
    )
}
export default About;



