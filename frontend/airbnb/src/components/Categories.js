import React from "react";
import island from '../assets/island.jpg'
import cabins from '../assets/cabins.jpg'
import beach from '../assets/beach.jpg'
import nationalpark from '../assets/nationalpark.jpg'
import omg from '../assets/omg.jpg'
import pool from '../assets/pool.jpg'
import design from '../assets/design.jpg'
function Categories() {
  return (
    <div className="Categorybar">
      <div>
        <div><img src={island}/></div>
        <div className="categories">Islands</div>
      </div>
      <div>
        <div><img src={beach}/></div>
        <div className="categories">Beaches</div>
      </div>
      <div>
        <div><img src={pool}/></div>
        <div className="categories">Amazing pools</div>
      </div>
      <div>
        <div><img src={omg}/></div>
        <div className="categories">OMG!</div>
      </div>
      <div>
        <div><img src={nationalpark}/></div>
        <div className="categories">National parks</div>
      </div>
      <div>
        <div><img src={cabins}/></div>
        <div className="categories">Cabins</div>
      </div>
      <div>
        <div><img src={design}/></div>
        <div className="categories">Design</div>
      </div>
      <button>filters</button>
    </div>
  );
}

export default Categories;
