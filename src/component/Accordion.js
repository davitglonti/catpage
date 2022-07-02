import React,{useState} from 'react'
import '../App.css'
import { FiMoreHorizontal } from 'react-icons/fi';

const Accordion = (props) => {
    const [show, setShow]=useState(false)
  return (
    <div>
        <button className="faq-icon" onClick={(e)=>setShow(!show)}>
           {
              show ? 'less' : <FiMoreHorizontal/>
           }
                    
        </button>
           {
              show ? <p className="faq-details">{props.info}</p> : ""
           }
    </div>
  )
}

export default Accordion