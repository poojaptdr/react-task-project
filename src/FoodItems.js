import Item from "./Item";
import {CartContext} from './Cart'
import { useContext } from "react";


const FoodItems = ()=>{
    const {item, totalItem} = useContext(CartContext)

    if(item.length === 0){
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
    
    {item.map((curElmt)=>
    <Item key={curElmt.id} {...curElmt}/>
    )}
       
            </>
        )
    
    }

    return(
        <>
<div className="header">
 <div className="header1">
 <i class="ri-restaurant-fill"></i>  
 <h1>Food's Restaurent</h1>
 </div>

 <div className="headers">
 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyt6WKzgJTtjis00jF0NNLHMFvss-08TsTtw&usqp=CAU' alt='img' />
 <p>{totalItem}</p>
 </div>
</div>

 {item.map((curElmt)=>
<Item key={curElmt.id} {...curElmt}/>
)}
   
        </>
    )
}
export default FoodItems;