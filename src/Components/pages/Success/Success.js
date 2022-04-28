import React from 'react'
import image from '../../../assets/images/image.png'
import './Success.css';
import {Link} from "react-router-dom";
function Cart() {
  return (
    <div className='Successimage'>
    <img className='successimage' src={image}></img>
    <p className='msg'>Order Placed Successfully</p>
    <p className='msg'>Hurry! Your order is confirmed <br/>the order id is #12345 save the order id for<br></br> further communication</p>
    <div>
    <table className="orderTable" align="center">
        <tr>
          <th>Email Us</th>
          <th>Contact Us</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>abc@bookstore.com</td>
          <td>+91 8163475881</td>
          <td>
            #345 Bridgelabz company HSR layout Bangalore Karnataka India 
          </td>
        </tr>
      </table>
    </div>
    <div className='Continue'>
    <Link to='/'>
                <button className="Continue">Continue Shopping</button>
                </Link>
            </div>
  </div>
  )
}
export default Cart;