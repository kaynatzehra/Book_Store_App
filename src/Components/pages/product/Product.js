import React,{useEffect,useState,useContext} from 'react'
import './Product.css'
import Productcard from './product-card/productcard';
import { booklist_api ,addorders,getorders} from '../../../service/api';
import Cartcontext from '../../../service/store/cart_context';


function Product(props) {
  const [bookdata,setbookdata] = useState();
  const [products, setProducts] = useState({
    id: '',
    Bookname: "",
    Authorname: "",
    Price: "",
    Bookimage: "",
    quantity: "1" 
  });
  const [Cart,SetCart] = useState([]);
  const [ searchInput, setSearchInput ] = useState('');
  const [ filteredResults, setFilteredResults ] = useState();
  const crtcont  =   useContext(Cartcontext);

  useEffect(()=>{
      booklist_api()
      .then((res)=>{
          setbookdata(res.data);
          setFilteredResults(res.data);
      }).catch((err)=>{
        console.log(err)    
      })
      getorders()
      .then((res)=>{
        //SetCart(res.data)
      }).catch((err)=>{
        console.log(err)    
      })
  },[])
  useEffect(()=>{
    if(props.searhvalue){
        const searchInputt = props.searhvalue;
        if (searchInputt != '') {
          const filteredData = bookdata.filter((bookvalue) => {
            return Object.values(bookvalue).join('').toLowerCase().includes(searchInputt.toLowerCase());
          });
          setFilteredResults(filteredData);
        } else {
          setFilteredResults(bookdata);
        }
    }
  },[props.searhvalue])

  const addproducts = (data) =>{
        addorders(data)
        .then((res)=>{
             
        }).catch((err)=>{
          console.log(err)    
        })
  }
  const addToCart = (value) =>{
        const id = value.id
        crtcont.addItem({...value})
        const newitem = {
          id: value.id,
          Bookname:value.Bookname,
          Authorname: value.Authorname,
          Price: value.Price,
          Bookimage: value.Bookimage,
          quantity: 1
        }
        const newItems = [...Cart, newitem];
        SetCart(newItems);
  }
useEffect(()=>{
  if(Cart.length > 0){
    console.log(Cart);
    localStorage.setItem('orders',JSON.stringify(Cart));
    addproducts(Cart)
  }
},[Cart])
  return (
    <div className='product-main row '>
      {bookdata ? filteredResults.map((value,i)=>{
        return(
            <Productcard key={i} bookname={value.Bookname} 
            author={value.Authorname} 
            Amount={value.Price} 
            image={value.Bookimage} 
            onChild2Event={() => addToCart(value)}
            ></Productcard>
        );
      })
      : <h1>NO Products Available</h1>
      }
    </div>
  )
}

export default Product