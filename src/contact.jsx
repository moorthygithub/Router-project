import { useNavigate } from "react-router-dom"
function Contact(){

    const navigative=useNavigate()
    const update=()=>{
            navigative("/Home")
    }
    const update1=()=>{
      navigative("/About")
}
const update2=()=>{
  navigative("/Login")
}
    return(
        <div>
         <center>
         <h1 id="login">
                CONTACT US
               <hr></hr>
            </h1>
   
         </center>
         <div id="contact-main">
         <div id="main">
         <svg  height="30px" width="30px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">

          <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z"/>
         </svg>
         <h3>Live Chat & Help Center</h3>

        <h5>Want to quick answer to a burning questions</h5>

         <h5>Visit our Help Center for FAQ's or chat with a live agent.</h5>

         <h5>Live Chat Hours:</h5>

         <h5>Monday-Friday</h5>

         <p>6.00am-4.00pm PT</p>

         <h5>Saturday & Sunday:</h5>
         </div>
         <div>
         <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
         <h5>1-888-001-3652</h5>
         <h5>Phone Hours:</h5>
         <h5>Monday-Friday</h5>

       <p>6.00am-4.00pm PT</p>

       <h5>Saturday & Sunday:</h5>
       <p>Phones are Closed,but please Chat with us 6am-4pm PT</p>
         </div>
         <div>
         <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <h5>Email Us</h5>
        <p>Submit an email and we will get back to you soon</p>
        <h5>Email Hours:</h5>
         <h5>Monday-Friday</h5>

       <p>6.00am-4.00pm PT</p>

       <h5>Saturday & Sunday:</h5>

         </div>

         </div>

         <center>
         <button id="about-one" onClick={update}>TO HOME</button>
            <button id="about-two" onClick={update1}>TO ABOUT</button>
            <button id="about-three" onClick={update2}>TO LOGIN</button>
         </center>
        </div>
    )
}
export default Contact;








//using props method 
// function Contact() {

//   return (
//     <div id="grid">
//       <div id="grid1">
//         <Gridexample name="thiyash" message="this is thiyash" image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"></Gridexample>
//       </div>
//       <div id="grid2">
//         <Gridexample name="karthick" message="this is thiyash father"></Gridexample>
//       </div>
//       <div id="grid3">
//         <Gridexample name="kathick" message="something "></Gridexample>
//       </div>
//     </div>
//   );
// }
// export default Contact;

// function Gridexample(props) {
//   const name = props.name;
//   const message = props.message;
//   const img=props.image;

//   function Click(){
//     console.log(name)
//     console.log(message)
//   console.log(img)
//    }
//   return (
//     <div id="grid1">
//       <h1>{name}</h1>
//       <h2>{message}</h2>
//       <img src={img}></img>
//       <button onClick={Click}>Submit</button>
//     </div>
//   );
// }
