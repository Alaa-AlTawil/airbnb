import React from 'react';
import rest from '../assets/try.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Card({title,rate,desc,date,price}) {
    return ( 
        <div className='card'>
            <div><img src={rest}/></div>
            <div>
                <div>{title}</div>
                <div>{rate}<div className='fontawesome'><FontAwesomeIcon icon={faStar} color='rgb(46, 45, 45)' /></div></div>
            </div>
            <div>{desc}</div>
            <div>{date}</div>
            <div>{price}</div>

        </div>
     );
}

export default Card;