import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import {Topbar,Sidebar,Card,RecentInfo,ResentUsers} from '../../component'

const Home = ({history}) => {
  const [cdata,setCdata] = useState([])



  return (
    <>
    <Sidebar history={history}/>
    <div className="admin__main">
      <Topbar/>
      <Card/>
      <div className="admin__details">
      <RecentInfo/>
      <ResentUsers/>
      </div>
    </div>


    </>
  )
}

export default Home
