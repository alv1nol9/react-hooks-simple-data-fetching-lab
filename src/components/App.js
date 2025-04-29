import React, { useEffect, useState } from 'react'

const App = () => {

    const[image,setImage] =useState([])
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data.message) )
    },[])
  return (
    <>
    <img src={image} alt='okayyy'></img>
    </>
  )
}

export default App