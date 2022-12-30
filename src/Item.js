import {CartContext} from './Cart'
import { useContext } from "react";

const Item = ({id, name, price, image, quantity})=>{
    const {increment, decrement} = useContext(CartContext)
    
    return(
        <>
        <div className="mains">
    <div className="centers"> 
    <img src={image} alt=''/>
   <h2>{name}</h2>
  <p>Price: <span>{price}</span></p>
  <p>Cost(INR): {price*quantity}</p>
        <p>Total: {quantity}</p>
        <button onClick={()=>increment(id)}>➕</button>
        <button className="btns" onClick={()=>decrement(id)}>➖</button>

 </div>
</div>
</>
    )
}
export default Item;