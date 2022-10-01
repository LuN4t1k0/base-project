import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Galeria = () => {
  const {data} = useContext(AppContext)
  return (  
    <div>{data.map(item => <img key={item.id} src={item.src.small} alt="" /> )}</div>
  )
}

export default Galeria