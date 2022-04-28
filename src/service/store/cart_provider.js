import { Reducer, useEffect, useReducer,useState } from "react";
import Cartcontext from "./cart_context";

const defaultcartitem ={
    items:[],
    totalAmount:0
}
const cartreducer = (state,action)=>{
    if(action.type == 'ADD'){
        const Updateitems = state.items.concat(action.item);
        const Updatetotalamount = state.totalAmount + action.item.Price 
        
        return{
            items : Updateitems,
            totalAmount : Updatetotalamount
        }
    }
    return defaultcartitem
}
const CartProvider = (props) =>{
  const [cartState , dispatchCartAction] = useReducer(cartreducer,defaultcartitem);
    const additemhandler = (items) =>{
        dispatchCartAction({type:'ADD',item:items})
    }
    const removeitemhandler =(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const data = {
        items:cartState.items,
        totalamount:cartState.totalAmount,
        addItem : additemhandler,
        removeItem : removeitemhandler
    }
    
    return<Cartcontext.Provider value={data}>
        {props.children}
    </Cartcontext.Provider>
}
export default CartProvider;