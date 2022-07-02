import React from 'react';
import rest from '../assets/try.jpeg';
function Card() {
    return ( 
        <div className='card'>
            <div><img src={rest}/></div>
            <div>
                <div>title</div>
                <div>rate</div>
            </div>
            <div>info</div>
            <div>date</div>
            <div>price</div>

        </div>
     );
}

export default Card;