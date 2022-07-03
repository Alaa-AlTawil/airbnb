import {React,useState,useEffect} from 'react';
import Card from './Card';
import axios from 'axios';
import Categories from './Categories';
import CatBody from './CatBody';

function Body() {
    const [data,setdata]=useState([])
    useEffect(()=>axios.get(`http://127.0.0.1:8000/api/getallplaces`)
        .then(res => {
        setdata(res.data["items"])
        }),[])

    
    return ( 
        <div className='cards'>
                {/* {data.map((element,index)=>
                <Card key={index} title={element.title} rate={element.rate} desc={element.description} date={element.date} price={element.price} img={element.image}/>
                )} */}
            <CatBody setdata={setdata} data={data}/>
        </div>
     );
}

export default Body;