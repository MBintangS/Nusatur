import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/articlehome.css"
import {Clock} from  'react-bootstrap-icons';

const Articlebloghome = () => {
  return (
    <Container style={{marginTop:"50px"}}>
        <h1>Article Blog</h1>
        <div className="garismeraharticlehome"></div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className="card-article-1 mt-5">
                <div className="konten-article">
                    <h5>Tips dan trik liburan sesuai
                        budget dengan nusatur</h5>
                    <div><Clock /> Nov 10, 2022</div>    
                </div>
            </div>
            <div className="card-article-2 mt-5">
                <div className="konten-article">
                    <h5>Tips dan trik liburan sesuai
                        budget dengan nusatur</h5>
                    <div><Clock /> Nov 10, 2022</div>    
                </div>
            </div>
            <div className="card-article-3 mt-5">
                <div className="konten-article">
                    <h5>Tips dan trik liburan sesuai
                        budget dengan nusatur</h5>
                    <div><Clock /> Nov 10, 2022</div>    
                </div>
            </div>

        </div>

    </Container>
  )
}

export default Articlebloghome
