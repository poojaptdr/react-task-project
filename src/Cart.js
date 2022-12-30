import { createContext, useReducer } from "react"
import FoodItems from "./FoodItems"
// import Header from "./Header"
import data from "./data"
import reducer from "./reducer"
import { useEffect } from "react"



export const CartContext = createContext()

const initialState={
    item: data,
    totalAmount: 0,
    totalItem: 0
}

const Cart = ()=>{

    const [state, dispath] = useReducer(reducer, initialState);

    const increment =(id)=>{
        return dispath({
            type: 'INCREMENT',
            payload: id,
        })
    }

    const decrement = (id)=>{
        return dispath({
            type: 'DECREMENT',
            payload: id,
        })
    }

    useEffect(()=>{
       dispath({type: 'GET_TOTAL'})
       console.log('hello')
    }, [state.item])

    return(
<CartContext.Provider value={{...state, increment, decrement}}>
<FoodItems />
</CartContext.Provider>
    )
}
export default Cart;