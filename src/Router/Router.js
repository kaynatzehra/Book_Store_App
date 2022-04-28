import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Product from '../Components/pages/product/Product';
import Cart from '../Components/pages/cart/cart';
import CustomerDetails from '../Components/pages/CustomerDetails/CustomerDetails';
import OrderSummary from '../Components/pages/OrderSummary/OrderSummary';
import Success from '../Components/pages/Success/Success';
function Router(props) {
  return (
            <Routes>
                <Route exact path='/' element={<Product searhvalue={props.searchvalue}/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route exact path='/CustomerDetails' element={<CustomerDetails/>}/>
                <Route exact path='/OrderSummary' element={<OrderSummary/>}/>
                <Route exact path='/Success' element={<Success/>}/>
            </Routes>
  )
}

export default Router