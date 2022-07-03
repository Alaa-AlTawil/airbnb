import React from "react";
import island from '../assets/island.jpg'
import cabins from '../assets/cabins.jpg'
import beach from '../assets/beach.jpg'
import nationalpark from '../assets/nationalpark.jpg'
import omg from '../assets/omg.jpg'
import pool from '../assets/pool.jpg'
import design from '../assets/design.jpg'
import {useEffect,useState} from 'react'
import axios from "axios";

function Categories() {
  const [data,setdata]=useState([])
  const getcatid=(event)=>{    
    var id=event.currentTarget.id
    getPlaceById(id);
  }
  function getPlaceById(id){
    console.log(id)
    // axios.get(`http://127.0.0.1:8000/api/getallplaces`,{category:id})
    //     .then(res => {
    //     setdata(res.data["items"])
    //     })
  }
  return (
    <div className="Categorybar">
      <div  onClick={getcatid} id="islands" value="islands">
        <div><img src={island}/></div>
        <div className="categories"  >Islands</div>
      </div>
      <div  onClick={getcatid} id="beach" value="beach">
        <div><img src={beach}/></div>
        <div className="categories">Beaches</div>
      </div>
      <div onClick={getcatid} id="pool" value="pool">
        <div><img src={pool}/></div>
        <div className="categories">Amazing pools</div>
      </div>
      <div onClick={getcatid} id="omg" value="OMG">
        <div><img src={omg}/></div>
        <div className="categories">OMG!</div>
      </div>
      <div onClick={getcatid} id="parks" value="Parks">
        <div><img src={nationalpark}/></div>
        <div className="categories">National parks</div>
      </div>
      <div onClick={getcatid} id="cabin" value="Cabin">
        <div><img src={cabins}/></div>
        <div className="categories">Cabins</div>
      </div>
      <div onClick={getcatid} id="design" value="Design">
        <div><img src={design}/></div>
        <div className="categories">Design</div>
      </div>
      <button>filters</button>
    </div>
  );
}

export default Categories;
