const reducer = (state, action) =>{
    if(action.type === 'INCREMENT'){
        let updatedCart = state.item.map((curItem)=>{
            if(curItem.id === action.payload){
                return{...curItem, quantity: curItem.quantity + 1}
            }
            return curItem;
        })
        return{...state, item: updatedCart}
    }

if(action.type === 'DECREMENT'){
    let updatedCart = state.item.map((curItem)=>{
        if(curItem.id === action.payload){
            return{...curItem, quantity: curItem.quantity-1}
        }
        return curItem
    }).filter((curItem)=>curItem.quantity !== 0)
    return{...state, item: updatedCart}
}

if(action.type === 'GET_TOTAL'){
    let {totalItem} = state.item.reduce((accum, curVal)=>{
        let {quantity} = curVal;
        accum.totalItem += quantity
        return accum;
    },{
      totalItem : 0,
    });
    return {...state, totalItem}
}

    return state;
}
export default reducer;