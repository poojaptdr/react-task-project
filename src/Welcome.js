import React from "react";
import { useNavigate } from "react-router-dom";


const Welcome =()=>{

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

        <div className="main">
        <div className="center">
        <h1>Welcome The Food's kitchen</h1>
        <button onClick={()=>navToPage('/cart')}>Go To Menu</button>
        </div>
        </div>
</>
    )

}
export default Welcome;