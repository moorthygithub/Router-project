import { useNavigate } from "react-router-dom"
function Home(){
    const navigative=useNavigate()
    const update=()=>{
        navigative("/About")
            
    }
    const update1=()=>{
        navigative("/Contact")
}
const update2=()=>{
    navigative("/Login")
}
    return(
        <div>
            
            <h1 id="login-home">HOME</h1>
            <hr></hr>
            <div id="home-main" >
                <div  id="home-main1" >
                <h1>THE FUTURE IS FRONT END </h1>
                 <p>Make your life easier with Front App.You have flexibility to used the App and contect with the CEO any time with the projets.Dowload the app from Apple App Store or Google Play today</p>
                 <br></br> <br></br>
                 <button id="home-one" onClick={update}>TO ABOUT</button>
               
            <button id="home-one" onClick={update1}>TO CONTACT</button>
            <button id="home-one" onClick={update2}> TO LOGIN</button>
         
                </div>
                <div id="home-main2" >
                    
                </div>
            </div>
           
        </div>
    )
}
export default Home;