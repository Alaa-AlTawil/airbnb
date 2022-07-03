import React from 'react';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Card({title,rate,desc,date,price,img,key}) {
    const[isActive,setActive]=useState(false)
    const handleToggle= ()=>{
        setActive(!isActive)
    }
    return ( 
        <div className='card' key={key}>
            <div><button className={isActive ? "red" : "black"} onClick={()=>handleToggle()} >&#9829;</button><img src={img}/></div>
            <div>
                <div><strong>{title}</strong></div>
                <div>{rate}<div className='fontawesome'><FontAwesomeIcon icon={faStar} color='rgb(46, 45, 45)' /></div></div>
            </div>
            <div>{desc} kilometer away</div>
            <div>{date}</div>
            <div><strong>${price}</strong> night</div>
        </div>
     );
}

export default Card;