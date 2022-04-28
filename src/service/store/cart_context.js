import React,{createContext} from 'react'
const Cartcontext = createContext({
    items:[],
    totalamount:0,
    addItem : (items) =>{},
    removeItem : (id) =>{}
})

export default Cartcontext