// the user info page
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken' // to use json features
import { useHistory } from 'react-router-dom' // to get  =user history
// local memory will be used
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import i1 from './Assets/av1.jpg'
import v1 from "./Assets/covervid16.mp4"
import v2 from "./Assets/covervid15.mp4"
import "./Dashboard.css"
const Dashboard=()=>
{
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); // error cases, initially, NULL
    
   // to get the user name etc from the  local memory
   // using statehook to do so
  
   const [user, setUser] = useState(null);   //u got terminal access??
   useEffect(() => {
     const u = localStorage.getItem("user")
     const options = {
      body:JSON.parse(u)
     }  
     if (u.length > 0)
       setUser(JSON.parse(u));
       var res = axios.post("http://localhost:3000/sign_up", JSON.parse(u))
       .then(response=>{
         setImages(response.data.username)
               })     
      
     }, [])

     if (!user) return(
      <>
      <video autoPlay loop muted className="video">
           <source src={v2} type="video/mp4" />
       </video>
     <h1 className="Errt">Please Login to view This Page </h1>
     <a className="Dash4" href="/log-in">Login</a>
     </>
    );
    return(
        <>
        <video autoPlay loop muted className="video">
            <source src={v1} type="video/mp4" />
        </video>
        <div className="User">
            <Card className="cr">
            <Card.Text>
            {
                <h1 className="t-dash">DashBoard</h1>
            }
            </Card.Text>
            <Card.Img className='Img1' src={i1} />
            <Card.Body>
            {/* <Card.Title className="Te1"></Card.Title> */}
            <Card.Text>
            {
             user ? <h2 className='Dash1'>Hi, {user.name}! </h2> :
          "PLEASE SIGN IN TO CONTINUE"
            }
            </Card.Text>
            <Card.Text>
            {
             user ? <h2 className='Dash2'>Your email : {user.email} </h2> :
             ""
            }
             </Card.Text>
            <a className="Dash3" href="/">Home</a>
            </Card.Body>
         </Card>

        </div>
        {/* front */}

        </>
    )
}
export default Dashboard;
