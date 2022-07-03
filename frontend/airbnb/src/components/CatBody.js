import {React} from 'react';
import Card from './Card';

function CatBody({data}) {  
    return ( 
        <div className='cards'>
                {data.map((element,index)=>
                <Card key={index} title={element.title} rate={element.rate} desc={element.description} date={element.date} price={element.price} img={element.image}/>
                )}
        </div>
     );
}

export default CatBody;