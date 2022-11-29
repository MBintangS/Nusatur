import React from 'react'
import imgPackage from "../img/img-package.png"
import "../styles/heropackage.css"

const Heropackage = () => {
  return (
    <>
        <div className='container-package'>
            <img src={imgPackage} alt="img" style={{width:"100%"}} />
            <div className='content-package'>
                <h1>Bali</h1>
            </div>
        </div>    
    
    </>
  )
}

export default Heropackage
