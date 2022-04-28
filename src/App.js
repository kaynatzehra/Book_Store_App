import { useState } from "react";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/pages/Header/Header";
import Footer from "./Components/pages/Footer/Footer";
import CartProvider from "./service/store/cart_provider";
function App() {
  const [searhvalue , setsearchvalue]= useState();
  const Searchvalue_get = (data) =>{
    setsearchvalue(data);
  }
  return (
    <>
        <Header Searchvalue={Searchvalue_get}/>
                 <Router searchvalue={searhvalue}/>
        <Footer/>
    </>
   
  );
}

export default App;