import React,{useState} from 'react'
import CatimagesData from './CatimagesData'

import '../component/gallery.css'
import { MdOutlineClose } from 'react-icons/md';
import { GrLinkNext } from 'react-icons/gr';

 const Gallery = () => {
   
  const [model, setModel]=useState(false)
  const [imgsrc, setImgScr]= useState('')
 
  const getimg = (image)=>{
      setImgScr(image)
      setModel(true)
  }
 
return (
  <>
  {/*full img function*/}
  <div className={model? ' modal  open': 'modal'} >
     <img src={imgsrc} alt="error" className="fullimage"/>
    <MdOutlineClose className='icon' onClick={()=>setModel(false)}/>
     
  </div>
  <div className='catimageshead'>

      {CatimagesData.map((item)=>{
         
        return( 
          <div key={item.id} onClick={()=>getimg(item.image)}>
            
            <img src={item.image} alt='image' className='catimages' ></img>
       
     
        </div>
        )
  
      })}
  </div>
  </>
)
}

export default Gallery
