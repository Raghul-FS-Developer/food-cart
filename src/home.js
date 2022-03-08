import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';
function Home() {
const navigate=useNavigate()
 let handleorder = ()=>{
     navigate('/order')
    }
    return (
    <div className='background'>
   
        <div>
          <h1 className='header'>FoodCourt</h1>
      </div>
        <div >
         
           <button className='pizza' onClick={handleorder}>click</button>
        </div>
        </div>
    )   
} 

export default Home
