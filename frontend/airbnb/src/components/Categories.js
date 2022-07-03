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
import CatBody from "./CatBody";
import Popup from "./Popup";

function Categories() {

  const [data,  setdata]=useState([])
  const [selectedCat ,setselectedCat]=useState("")
  const [isOpen, setIsOpen] = useState(false);
useEffect(()=>{
  get("islands")
},[])

 
const togglePopup = () => {
    setIsOpen(!isOpen);
  }
function get(id){

  axios.post(`http://127.0.0.1:8000/api/getplacesbycategory`,{category:id})
                .then(res => {
                setdata(res.data["items"])
                setselectedCat(id)
                console.log("hello")
                })
  console.log(id)
 

}
  return (<div>
    <div className="Categorybar">
      <div  onClick={()=>{get("islands")}} id="islands" value="islands">
        <div><img src={island}/></div>
        <div className={ selectedCat==="islands" ? "categories selected-cat":"categories"}>Islands</div>
      </div>
      <div  onClick={()=>{get("beach")}} id="beach" value="beach">
        <div><img src={beach}/></div>
        <div className={ selectedCat==="beach" ? "categories selected-cat":"categories"}>Beaches</div>
      </div>
      <div onClick={()=>{get("pool")}} id="pool" value="pool">
        <div><img src={pool}/></div>
        <div className={ selectedCat==="pool" ? "categories selected-cat":"categories"}>Amazing pools</div>
      </div>
      <div onClick={()=>{get("omg")}} id="omg" value="OMG">
        <div><img src={omg}/></div>
        <div className={ selectedCat==="omg" ? "categories selected-cat":"categories"}>OMG!</div>
      </div>
      <div onClick={()=>{get("parks")}} id="parks" value="Parks">
        <div><img src={nationalpark}/></div>
        <div className={ selectedCat==="parks" ? "categories selected-cat":"categories"}>National parks</div>
      </div>
      <div onClick={()=>{get("cabin")}} id="cabin" value="Cabin">
        <div><img src={cabins}/></div>
        <div className={ selectedCat==="cabin" ? "categories selected-cat":"categories"}>Cabins</div>
      </div>
      <div onClick={()=>{get("design")}} id="design" value="Design">
        <div><img src={design}/></div>
        <div className={ selectedCat==="design" ? "categories selected-cat":"categories"}>Design</div>
      </div>
      <button onClick={togglePopup}>filters</button>
    {isOpen && <Popup
      content={<>
        <b>Filters</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    </div>
    <div className="cards"><CatBody data={data}/></div></div>
  );
}

export default Categories;
