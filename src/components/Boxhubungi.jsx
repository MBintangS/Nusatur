import React, {useEffect} from 'react'
import dot1 from "../img/dot1.png"
import AOS from "aos" //for animation
import 'aos/dist/aos.css' 
import {Whatsapp} from "react-bootstrap-icons"
import "../styles/boxhubungi.css"


const Boxhubungi = () => {
    useEffect(() => {
        AOS.init({duration: 1500});
      }, []);

  return (
    <section data-aos="fade-up">
        <div className="hubungi-container">
            <div className='hubungi-content'>
                <img src={dot1} alt="" className="img1-explore" />
                <img src={dot1} alt="" className="img2-explore" />
                <h5>Hubungi kami jika ingin melakukan wisata secara custom atau ada pertanyaan terkait layanan kami</h5>
                <button><Whatsapp size={20} /> +62 8111 2222 3333 </button>
            </div>
        </div>
    </section>
  )
}

export default Boxhubungi
