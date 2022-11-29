import React, {useEffect} from 'react'
import "../styles/boxexplore.css"
import dot1 from "../img/dot1.png"
import AOS from "aos" //for animation
import 'aos/dist/aos.css' 

const Boxexplore = () => {
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  return (
    <section data-aos="fade-up">
        <div className="explore-container">
            <div className='explore-content'>
                <img src={dot1} alt="" className="img1-explore" />
                <img src={dot1} alt="" className="img2-explore" />
                <h1>Are You Ready To Explore</h1>
                <button>Let's Explore</button>
            </div>
        </div>
    </section>
  )
}

export default Boxexplore
