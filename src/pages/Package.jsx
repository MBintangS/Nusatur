import React from 'react'
import Boxhubungi from '../components/Boxhubungi';
import Detailpackage from '../components/Detailpackage';
import Footer from '../components/Footer';
import Heropackage from '../components/Heropackage';
import HOC from "../components/HOC";

const Package = () => {
  return (
    <HOC headerTitle='Package'>
        <Heropackage />
        <Detailpackage />
        <Boxhubungi />
        <Footer />
    </HOC>
  )
}

export default Package
