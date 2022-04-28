import React from 'react'
import book2 from '../../../assets/images/book2.png'
import './OrderSummary.css';
import {Link} from "react-router-dom";
function Cart() {
  return (
    <div className='maincartdiv'>
      <div className="row maincart">
          <div className="col-lg-6">
              <div className='row'>
                <h6 className='mycart'>My cart<span>(2)</span></h6>
                <div className='col-lg-6'>
                      <img className='cartimage' src={book2}></img>
                </div>
                <div className='col-lg-6'>
                    <p className='cart-bookname'>Dont't Make Me Think</p>
                    <p className='cart-bookauthor'>Author name</p>
                    <p className='cart-bookprice'>Rs. 1500</p>
                    <p className='cart-bookdetails'>this is a book</p>
                    <div className='cart-events'>
                        <button className='decrement'>-</button>
                        <input type='text' className="cartvalue" placeholder='1'/>
                        <button className='increment'>+</button>
                        <a className='removebutton'>Remove</a>
                    </div>
                </div>
              </div>
          </div>
          <div className="col-lg-6 cart-button">

              <button className="placeorder_button">PLACE ORDER</button>
          </div>
      </div>
        <div className="card customerdetail">
            <h4>Customer Details</h4>
            <div className="firstdiv"> 
                <input type="text" className='inputbox' placeholder='Priya'/>
                <input type="text" className='inputbox' placeholder='9876543210'/>
            </div>
           
            <div className="firstdiv" > 
                <input type="text" className='inputbox' placeholder='577004'/>
                <input type="text" className='inputbox' placeholder='Davangere'/>
            </div>

            <div className='address'>
                <textarea id="w3review" className='textbox' name="w3review" rows="4" cols="50" placeholder='davangere karantaka India'></textarea>
            </div>
        
            <div className='firstdiv'>
                    <input type="text" className='inputbox' placeholder='Davangere'/>
                    <input type="text" className='inputbox' placeholder='PJExtension'/>
            </div>
            <div className='checkbox'>
                    <h5>Type</h5>
                <div className='col-lg-12 firstdiv'>
                    <div className='radiodiv'>
                        <input type="radio" name="type" />
                        <label className="typelabel">Home</label>
                    </div>
                    <div className='radiodiv'>
                        <input type="radio" name="type" />
                        <label className="typelabel">Work</label>
                    </div>
                    <div className='radiodiv'>
                        <input type="radio" name="type" />
                        <label className="typelabel">Other</label>
                    </div> 
                </div>
            </div>
            <div className='custdivbutton'>
                <button className="customer-button">Continue</button>
            </div>
        </div>  
        <div className='card ordersummarydiv'>
            <h6 className=''>Order Summary</h6>
            <div className='OrderSummary'>
                <div className='orderimagediv'>
                        <img className='cartimage' src={book2}></img>
                </div>
                <div className='orderSummiddlediv'>
                    <p className='order-bookname'>Dont't Make Me Think</p>
                    <p className='order-bookauthor'>Author name</p>
                    <p className='order-bookprice'>Rs. 1500</p>
                    <p className='order-bookdetails'>this is a book</p>
                </div>
                <div className="checkoutdiv">
                <Link to='/Success'>
                        <button className="checkout">Checkout</button>
                        </Link>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Cart