import React from "react";
import { useNavigate} from 'react-router-dom'

const Login = ()=>{

    let navigate = useNavigate()

    let navToPage=(url)=>{
navigate(url)
    }
    
   return(
    <>
    <div className="header">
     <div className="header1">
    <i class="ri-restaurant-fill"></i>  
      <h1>Food's Restaurent</h1>
      </div>
      <div className="headers">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU' alt='img' />
      <p>0</p>
      </div>
     </div>
    <h1>Login</h1>
    <div className="App">
        <label>Email address: </label>
        <input type='text' />
        <label>Password: </label>
        <input type='password' />
    <div className="labels">
        <input type='radio'/>
        <label >Accept Me</label>
        
    </div>
        
<div className="button">
 <button onClick={()=>navToPage('/welcome')}>Sign In</button>
 <button onClick={()=>navToPage('/signup')}>Sign Up</button>
</div>
         </div>
         </>
   )
}
export default Login;