import React from 'react';



function Admin() {
    var s
    function encode(){
    var  element=document.getElementById("addimage")
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          s=reader.result;
          console.log(s)
        }
        reader.readAsDataURL(file);
    }
      
    return (
     <div>
        <center>
                <input className="inputs" type="text" id="addtitle" placeholder="product name"/>
                <input className="inputs" type="text" id="price" placeholder="price"/>
                <input type="file" id="addimage" onChange={()=>{encode()}}/>
                <button className="inputs" id="additembtn">Add Product</button>
        </center>
    </div> 
    );
}

export default Admin;