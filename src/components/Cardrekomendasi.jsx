import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "../styles/cardrekomendasi.css"

import { NavLink } from "react-router-dom";

const Cardrekomendasi = ({img, title, price, subtitle, list = [], to}) => {


  return (
    <div className='mt-5'>
      <Card className="card-container">
        
            <div className="text-center">
                <img src={img} alt='' className="card-img"></img>
                <h3 style={{fontSize:"24px", marginTop:"10px"}}>{title}</h3>
                <h5 style={{fontSize:"16px"}}>{price}</h5>
                <p style={{fontSize:"14px", width:"340px", margin:"15px auto"}}>{subtitle}</p>
            </div>
            <ul>
                {list.map((val, i) => <li key={i}>{val}</li>)}
            </ul>
            <div className='text-center btn-rekomendasi'>
                <Button><NavLink to={to} className="btn-navlink-rec" >Lihat Detail</NavLink></Button>
            </div>
    
      </Card>
    </div>
  )
}

export default Cardrekomendasi
