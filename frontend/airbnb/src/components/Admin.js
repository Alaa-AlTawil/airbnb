import React from "react";
import axios from 'axios';
function Admin() {
  var s;
  function encode() {
    var element = document.getElementById("addimage");
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      s = reader.result;
      console.log(s);
    };
    reader.readAsDataURL(file);
  }
function addItems(){
    var name=document.getElementById("name")
    var distance=document.getElementById("distance")
    var category=document.getElementById("cat")
    var price=document.getElementById("price")
    var rate=document.getElementById("rate")
    var date=document.getElementById("date")
    axios.post(`http://127.0.0.1:8000/api/addplace`, {title:name.value, 
        description:distance.value,image:s,category:category.value,price:price.value,rate:rate.value,date:date.value})
        .then(res => {
          
          alert("item added")
         
        })
}


  return (
    <div className="data_entry">
      <center>
        <div><input
          className="inputs"
          type="text"
          id="name"
          placeholder="Location"
        /></div>
          <div><select id="cat">
            <option>islands</option>
            <option>beach</option>
            <option>pool</option>
            <option>omg</option>
            <option>parks</option>
            <option>cabin</option>
            <option>design</option>
          </select></div>
        <div><input
          className="inputs"
          type="text"
          id="distance"
          placeholder="Distance"
        /></div>
        <div>
        <input
          className="inputs"
          type="text"
          id="rate"
          placeholder="Rate"
        />
        </div>
        <div><input
          className="inputs"
          type="text"
          id="date"
          placeholder="Date Range"
        /></div>
        <div><input className="inputs" type="text" id="price" placeholder="Price" /></div>
        <div><input
          type="file"
          id="addimage"
          onChange={() => {
            encode();
          }}
        /></div>
        <div><button className="inputs" id="additembtn" onClick={()=>addItems()}>
          Add Product
        </button></div>
      </center>
    </div>
  );
}

export default Admin;
