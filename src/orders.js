import React from 'react'
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Orders() {
    let navigate=useNavigate()
   
      setTimeout(() => {
          navigate('/order')
      },2000);
    return <>
          <div className="orders" >
     <h2 >
         
     Order Status</h2>
    </div>
        <div>
            <h1 className='placed'>"Your order placed successfully"</h1>
        </div>
    
    
    </>
}

export default Orders
