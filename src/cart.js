import React,{useContext,useState} from "react";
import { foodcontext } from './App';
import './Cart.css'; 
import  {AiOutlineHome } from "react-icons/ai";
// import Order from './Order';
import { useNavigate } from 'react-router-dom';

function Cart() {


let placeorder=(()=>{
    context.setCart([])
    context.setCartvalue(0)
  navigate('/orders')
})   
let context=useContext(foodcontext)  
let navigate=useNavigate()
  console.log(context.cart);
  // console.log(context.empty)
  let home=(()=>{
    navigate('/order')
    // console.log("working")
  })
let[cartprice]=useState(0)
     
        let remove=((e)=>{
          context.cart.splice(context.cart.indexOf(e),1)
          context.setCartvalue(context.cartvalue-1)
        })
  return (
    
    <>
    <div className="cart">
      <div><button className="buttons"onClick={home}><span>
      <AiOutlineHome size={40}/>&nbsp;
</span></button></div><h2 className="cartitem">CART&nbsp;&nbsp;ITEMS</h2>
    </div>
    
      <div>
        
        {
        context.cart.length>=1?<>
        {
        context.cart.map((e,i) => {
        cartprice +=Number(e.price)
          return (
          <>
             <div class="food-card_img_cart" > <div key={i}>
             
                <img className='image'src={e.img}alt=""/>
               
              </div>
              <div className="full">
              <div class="food-card_content">
                <div class="food-card_title-section">
                  <a  class="food-card_title">
                    {e.name}
                  </a>
                  <br/>
                  <a href="#!" class="food-card_author">
                    Burger
                  </a>
                </div>

                <div class="food-card_bottom-section">
                  <div class="space-between">
                    <div>
                      <span class="fa fa-fire"></span> 220 - 280 Kcal
                    </div>
                    <div class="pull-right">
                      <span class="badge badge-success">{e.veg}</span>
                    </div>
                  </div>
                  <hr />
                  <div class="space-between">
                    <div class="food-card_price">
                    &#x20B9; <span>{e.price}</span>
                    </div>
                    <button style={{ color : "white",background:"red",borderColor:"red",cursor:"pointer"}} onClick={remove}>Remove</button>
                  </div>
                </div>
              </div>
              </div>
              </div>
          </>)
        })},
          <div className="bottom">Total Price: &#x20B9;{cartprice}:
            <button style={{background : "green" ,color:"white" ,cursor:"pointer"}} onClick={placeorder}>Place Order</button></div></>:<h1 className="emptycart">"cart is empty"</h1>
      }
     
      </div>
      </>
  );
}

export default Cart;
