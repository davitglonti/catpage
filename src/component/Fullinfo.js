import React from 'react'
import Data from './Data'
import '../component/fullinfo.css';

import { useParams } from 'react-router-dom';


const Fullinfo = () => {
    //Dynamic settings
    const params = useParams();
  
    // product filter function
     const productinfo = Data.filter((item) => {
      if(item.id == params.productid){
        return item;
    }
 })

     return (
      //add product info map
    <div>
      {productinfo.map(item=> {
         return (
         <div  key={item.id}>
          <div className='infohead'>
            
              <img src={item.image} className="fullimg"/>
              <div className='name-origin'>
           <h2>Name: {item.name}</h2> 
           <p style={{color:'darkgreen'}}>Origin: {item.origin}</p>
           <p className='description'>{item.description}</p>
           <span className='fulllife'>Life: {item.life}</span>
           </div>
           </div>
         </div>
        
     );
     })}
    </div>
  )
    
}

export default Fullinfo


/*


   return (
      //add product info map
    <div>
      {productinfo.map(item=> {
         return (
         <div  key={item.id}>
          <div className='infohead'>
            
              <img src={item.image} className="fullimg"/>
              <div className='name-origin'>
           <h2>Name: {item.name}</h2> 
           <p>Origin: {item.origin}</p>
           <span className='fulllife'>Life: {item.life}</span>
           </div>
           </div>
           <p className='description'>{item.description}</p>
         </div>
        
     );
     })}
    </div>
  )

  */