import React, {useState, useEffect} from 'react'
import Data from './Data'
import { Link } from 'react-router-dom';
import '../App.css';
import HomeHeader from './HomeHeader';
import FavoritFoodData from './FavoritFoodData';
import Accordion from './Accordion';
const Home = () => {
  
 
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
//scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
   
  }, []);

  return (
    <>
    <HomeHeader/>
    <h1 className='catbreds'> Cat Breeds </h1>
    <div className='container'  >        
      {Data.map(item=> {
         return (
             <div className='item' key={item.id} > 
            
             <Link to={`./product/${item.id}`} className="links">
            <img className='homeimg' src={item.image} alt={item.name}/>
              <h2> {item.name}</h2> 
            <p className='origin'>Origin: {item.origin}</p>
            <h3 className='life'>Life: {item.life}</h3>
            </Link>
          </div>
      );
      })}
    </div>
    {/* favorite food section*/}
  <section className='food' style={{ color: `red(-${offsetY})` }}>
<h1 style={{textAlign:'center', color:'white'}}> Favorite Foods</h1>
    <div className='favoritfood'>
        {FavoritFoodData.map(item=>{
          return (
            <section className='foodsection' key={item.id} >
               
            <h1 style={{textAlign:'center'}}>{item.name}</h1>
            <img src={item.image} alt={item.name} className='foodimg'/>
            <Accordion  {...item}/>
           </section>
          )
         })
        }
    </div>
  </section>
    </>
  )

}


export default Home

//  <Link to={`./product/${item.id}`}>  <h2> {item.name}</h2> </Link>