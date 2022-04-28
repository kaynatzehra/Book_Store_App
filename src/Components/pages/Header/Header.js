import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/icons/book.png'
import logo1 from '../../../assets/icons/cart.png'
import Cartcontext from '../../../service/store/cart_context';
import { FaCartPlus ,FaBookOpen } from "react-icons/fa";

function Header(props) {
  const cartcntxt  =  useContext(Cartcontext);
  const totalitems = cartcntxt.items.length;

  const getsearchvalue = (value) =>{
      props.Searchvalue(value);
  }
  return (
    <header className='header'>
        <div className='row'>
       
            
            <div className='col-lg-4'>
            <Link to={'/'}>
            <FaBookOpen className='Book-icon'/>
            </Link>
                  <span className='linkname'>Book store</span>
                
              </div>
        
          
            <div className='col-lg-4'>
                <input type="text" placeholder='Search..' onChange={(e)=>{getsearchvalue(e.target.value)}} className='form-control'/>
            </div>
            <div className='col-lg-4 cartsection'>
               <Link to={'/cart'}>
               <FaCartPlus className='cart-icon'/>
                </Link>
                  <span className='totalitem'> {totalitems}</span>
              
            </div>
           
            </div>
        
    </header>
  )
}

export default Header