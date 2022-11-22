import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "../styles/cardrekomendasi.css"

const Cardrekomendasi = ({img, title, price, subtitle, list1, list2, list3, list4, list5}) => {
  return (
    <div className='mt-5'>
      <Card className="card-container">
        <div className="">
            <div className="text-center">
                <img src={img} alt='' className="card-img"></img>
                <h3 style={{fontSize:"24px", marginTop:"10px"}}>{title}</h3>
                <h5 style={{fontSize:"16px"}}>{price}</h5>
                <p style={{fontSize:"14px", width:"340px", margin:"15px auto"}}>{subtitle}</p>
            </div>
            <ul>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
                <li>{list4}</li>
                <li>{list5}</li>

            </ul>
            <div className='text-center'>
                <Button className="card-btn">Lihat Detail</Button>
            </div>
        </div>
      </Card>
    </div>
  )
}

export default Cardrekomendasi
