import React from 'react'
import Footer from '../components/Footer';
import Herodetail from '../components/Herodetail';
import HOC from "../components/HOC";
import Infodetail from '../components/Infodetail';

const Detail = () => {
  return (
    <HOC headerTitle='Detail Bali'>
        <Herodetail />
        <Infodetail />
        <Footer />
    </HOC>
  )
}

export default Detail
