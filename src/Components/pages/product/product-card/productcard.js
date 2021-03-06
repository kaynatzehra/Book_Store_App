import React,{useEffect} from 'react'
import './productcard.css'
import { Link } from 'react-router-dom'


function Productcard(props) {
    const handleEvent = event => {
        props.onChild2Event();
    };
   
  return (
        <div className='col-lg-3 card product-card'>
                <img src={props.image} className='cardimage' alt="John" />
                <div className="row card">
                    <div className="col-lg-12 product-card-content">
                        <h6 className='content-header'>{props.bookname}</h6>
                        <p className='content-subheading'>{props.author}</p>
                        <p className='book-price'>Rs. {props.Amount}</p>
                        <div className='row book-button'>
                                <div className='col-lg-6 button1'>
                                    <button className='addbag_button' onClick={handleEvent}>Add to Bag</button>
                                </div>
                                <div className='col-lg-6 button1'>
                                    <button className='whishlist_button'>Whishlist</button>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Productcard