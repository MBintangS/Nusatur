import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/footer.css"
import logo from "../img/Logo.png"
import {Whatsapp, Instagram, Twitter, Tiktok} from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <div className="footer-section">
        <Container>
            <div className="d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="display" style={{width:"300px"}} />
                </div>
                <div className="content-footer">
                    <h4>Tentang Kami</h4>
                    <p>NusaTur adalah sebuah website yang menyediakan tur lokal budaya Indonesia dengan memberikan pengalaman terbaik untuk wisatawan</p>
                </div>
                <div className='link-footer'>
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/">Destination</a>
                    <a href="/">Gallery</a>
                    <a href="/">Travel Blog</a>
                    <a href="/">About Us</a>

                </div>
                <div className="sosmed-footer">
                    <h4>Social Media</h4>
                    <p><Whatsapp size={20} /> +62 8111 222 333</p>
                    <p><Instagram size={20} /> @nusaturofficial</p>
                    <p><Twitter size={20} /> nusaturofficial</p>
                    <p><Tiktok size={20} /> @nusaturofficial</p>
                </div>
            </div>
            <div className="footer-copy">
            © 2022 Nusatur. All right reserved
            </div>
        </Container>
    </div>
  )
}

export default Footer
