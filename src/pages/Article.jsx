import React from 'react'
import Detailarticle from '../components/Detailarticle';
import Heroarticle from '../components/Heroarticle';
import HOC from "../components/HOC";

const Article = () => {
  return (
    <HOC headerTitle='Article'>
        <Heroarticle />
        <Detailarticle />

        <h1 style={{marginTop:"100px"}}>Ini Page Article</h1>

    </HOC>
  )
}

export default Article
