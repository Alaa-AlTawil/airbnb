import {React,useState,useEffect} from 'react';
import axios from 'axios';
import CatBody from './CatBody';

function Body() {
    const [data,setdata]=useState([])
    useEffect(()=>axios.get(`http://127.0.0.1:8000/api/getallplaces`)
        .then(res => {
        setdata(res.data["items"])
        }),[])
    return ( 
        <div className='cards'>
            <CatBody setdata={setdata} data={data}/>
        </div>
     );
}

export default Body;