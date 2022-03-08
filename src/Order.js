import React,{useContext} from 'react';
import './Order.css';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { foodcontext } from './App';

function Order() {
let context=useContext(foodcontext)  

let orders=(()=>{
    navigate('/orders')
})
let navigate=useNavigate()
 let carts=()=>{
   
 
   
 navigate('/cart')
 

}
let product=context.data

   return <>
        
           <section class="main-content">
           
            <div class="text-center text-uppercase">
           <h1 className='heading'>Food Order Card </h1>
          <div  className="buttonss" > <button className='inside' onClick={carts}><AiOutlineShoppingCart size={40}/></button>{context.cartvalue}</div>
          </div>
    <div className="container">
  
        <br/>
        <br/>
                       
                        {
                        product.map((e,i)=>{
                            return(
                                
                                <div class="row"key={i}>
                                <div class="col-sm-6 col-md-6 col-lg-4">
                                    <div class="food-card">
                                        <div class="food-card_img">
                                            <img src={e.img} alt=""/>
                                            <a href="#!"><i class="far fa-heart"></i></a>
                                        </div>
                            <div class="food-card_content">
                        
                            <div class="food-card_title-section">
                            <a href="#!" class="food-card_title">{e.name}</a>
                            <a href="#!" class="food-card_author">Burger</a>
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
                            <hr/>
                            <div class="space-between">
                                <div class="food-card_price">
                                &#x20B9;<span>{e.price}</span>
                                </div>
                                </div>
                                </div>
                                 </div>
                           
                            <button className='button' onClick={(()=>{
                          context.cart.push(e)
                              context.setCartvalue(context.cartvalue+1)
                            
                            }
                                )}>Add Cart</button>
                                <button className='order'onClick={orders}>order now</button>
                                
                            </div>
                        </div>
                    </div>
   
                

                        )})}
         
                            
               
     </div>          
</section>
      
    </>
}

export default Order
