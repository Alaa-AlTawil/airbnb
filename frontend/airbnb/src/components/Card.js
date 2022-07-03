import React from 'react';
import rest from '../assets/try.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons'
function Card({title,rate,desc,date,price,img,key}) {

    return ( 
        <div className='card' key={key}>
            <div><FontAwesomeIcon className='heart' icon={faHeart} color='rgb(46, 45, 45)' size='lg' /><img src={img}/></div>
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