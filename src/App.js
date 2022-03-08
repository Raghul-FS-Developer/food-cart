import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './home';
import Order from './Order';
import axios from 'axios';
import Cart from './cart';

import Orders from './orders';

export const foodcontext=React.createContext()
const url="https://614eacd3b4f6d30017b48344.mockapi.io/burger"; 
function App() {
  useEffect(() => {
    order()
   },[])
   
  let[data,setData]=useState([])
  let [cart,setCart]=useState([])
  let [cartvalue,setCartvalue]=useState(0)

  let order=async()=>{
    let res=  await axios.get(`${url}`)
    console.log(res.data)
    setData(res.data)
 
  } 
 
  // const [cartdata,setCartdata]=useState([])

  // const handleaddcart=(fooddata)=>{
  //   setCartdata([...cartdata,fooddata])

  // }
  return <>
  <Router>
    <foodcontext.Provider value={{data,cart,setCart,cartvalue,setCartvalue,url}}>

    <Routes>
      <Route path='/orders' element={<Orders/>}/>

    <Route path='/' element={<Home/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </foodcontext.Provider>
  </Router>
    

  
  </>
  
}

export default App;
// handleaddcart={handleaddcart}
// cartdata={cartdata}