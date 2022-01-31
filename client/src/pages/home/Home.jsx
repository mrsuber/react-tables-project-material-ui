import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import {data} from '../../data/data'

const Home = () => {
  const [cdata,setCdata] = useState([])
setCdata(data)
console.log(cdata)

  return (
    <>
    <h2>The Main table hear</h2>
    <Link to="/material_ui_table">material ui table</Link><br/>

      <Link to="/htmlcssjs">Html Css JavaScript</Link>


    </>
  )
}

export default Home
