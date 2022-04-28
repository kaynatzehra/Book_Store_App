import React ,{useContext,useEffect,useState}from 'react'
import book2 from '../../../assets/images/book2.png'
import './cart.css';
import {  Link } from "react-router-dom";
import Cartcontext from '../../../service/store/cart_context';
function Cart() {
  const {items} =  useContext(Cartcontext);
  const orders = JSON.parse(localStorage.getItem('orders'))
  const[cart ,setcart]=useState(orders);


  const decreaseProduct = (id) =>{
      cart.forEach(item => {
          if (item.id === id) {
              item.quantity === 1 ? item.quantity = 1 : item.quantity--;
          }
      })
      setcart([...cart]);
  }
  const increaseProduct = (id) =>{
      cart.forEach(item => {
          if (item.id === id) {
              item.quantity++;
          }
      })
      setcart([...cart]);
  }

  return (
    <div className='maincartdiv'>
      <div className="row maincart">
          <div className="col-lg-6">
          
              <>
                  <h6 className='mycart'>My cart<span>({items.length})</span></h6>
                  {
                   cart && cart.map((data,i)=>{
                      return(
                        <div className='row'  key={i}>
                              <div className='col-lg-6'>
                                  <img className='cartimage' src={data.Bookimage}></img>
                              </div>
                              <div className='col-lg-6'>
                                  <p className='cart-bookname'>{data.Bookname}</p>
                                  <p className='cart-bookauthor'>{data.Authorname}</p>
                                  <p className='cart-bookprice'>Rs. {data.Price}</p>
                                  <div className='cart-events'>
                                      <button className='decrement' onClick={()=>{ decreaseProduct(data.id)}}>-</button>
                                        <input type='text' className="cartvalue" value={data.quantity}/>
                                      <button className='increment'onClick={()=>{increaseProduct(data.id)}}>+</button>
                                      <a className='removebutton'>Remove</a>
                                  </div>
                              </div>
                        </div>
                      )
                    })
                  }
                 
              </>
          </div>

          <div className="col-lg-6 cart-button">
             <Link to='/CustomerDetails'>
              <button className="placeorder_button">PLACE ORDER</button>
              </Link>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 card customerdetails"> Customer Details</div>
          <div className="col-lg-12 card OrderSummary"> Order Summary</div>
      </div>
  
    </div>
  )
}

export default Cart