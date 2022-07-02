import React,{useEffect, useState} from 'react'
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { BsInstagram  } from 'react-icons/bs';
import { ImPhone  } from 'react-icons/im';
import '../component/about.css'

const About = () => {

   return (
    <div className='about'>
      <div className='aboutheader'>
        <h1> Domestic Cat</h1>
        <div className='abouticon'> 
        <AiFillFacebook/>
        <BsInstagram/>
        <AiFillYoutube/>
            
         </div>
      </div>
         <span><h1>Origin and history of cats</h1> 
          <p>The “cat pattern,” established very early in the evolution of modern mammals, was a successful one: early cats were already typical in form at a time when the ancestors of most other modern mammalian types were scarcely recognizable. They first appeared in the early Pliocene Epoch (5.3 to 3.6 million years ago), and they have continued with remarkably little change into modern times.</p>
          
          </span>

         <span>
            <h1>Relationship with Humans</h1>
            <p>Felis catus has had a very long relationship with humans. Ancient Egyptians may have first domesticated cats as early as 4,000 years ago. Plentiful rodents probably drew wild felines to human communities. The cats' skill in killing them may have first earned the affectionate attention of humans. Early Egyptians worshipped a cat goddess and even mummified their beloved pets for their journey to the next world—accompanied by mummified mice! Cultures around the world later adopted cats as their own companions.</p>
         </span>

         <span>
            <h1>Communication</h1>
            <p>Cats communicate by marking trees, fence posts, or furniture with their claws or their waste. These scent posts are meant to inform others of a cat's home range. House cats employ a vocal repertoire that extends from a purr to a screech.</p>
         </span>
         <span>
            <h1>Diet</h1>
            <p>Domestic cats remain largely carnivorous, and have evolved a simple gut appropriate for raw meat. They also retain the rough tongue that can help them clean every last morsel from an animal bone (and groom themselves). Their diets vary with the whims of humans, however, and can be supplemented by the cat's own hunting successes.</p>
            <img src='https://www.medivet.co.uk/globalassets/assets/shutterstock-and-istock/istock/cat-nutrition-1.jpg?w=585&scale=down' alt='caterror'></img>
         </span>

        

         </div>
        
       
   
   )
    
}

export default About


/*useEffect(()=>{
   const fetchcats = async ()=> {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search`)
      setGallery(res.data[0].url)
      console.log(res.data[0].url)
    }
    fetchcats()
  }, [])
  */