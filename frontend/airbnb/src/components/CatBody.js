import {React,useState,useEffect} from 'react';
import Card from './Card';
import axios from 'axios';

function CatBody({setdata,data,id}) {
    
    
            // axios.post(`http://127.0.0.1:8000/api/getplacesbycategory`,{category:id})
            //     .then(res => {
            //     setdata(res.data["items"])
            //     })
     console.log("babababa")   
    return ( 
        <div className='cards'>
                {data.map((element,index)=>
                <Card key={index} title={element.title} rate={element.rate} desc={element.description} date={element.date} price={element.price} img={element.image}/>
                )}
            
        </div>
     );
}

export default CatBody;