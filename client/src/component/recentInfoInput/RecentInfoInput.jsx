import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
// import {ViewPopUp} from '../../../components'




const RecentInfoInput = () => {
  const  data = [
    {  "id":1,
      "TableType":"material-table",
      "TableName":"Material Table",
      "TableTech":"material-ui ",
      "TableDesc":"material-ui installed with npm in react",
      "Link":"/material_ui_table"
    },
      {  "id":2,
        "TableType":"Html-css-js",
        "TableName":"Pure Html/Css/Js Table",
        "TableTech":"Html Css JavaScript ",
        "TableDesc":"display table data and pagination",
        "Link":"/htmlcssjs"
      },
    ]
    const history = useHistory()
  const [info, setInfo] = useState(data)
  // setInfo(data)
  // const [popup, setPopup] = useState(false)
  // const [data, setData] = useState('')
  console.log(info)
  // useEffect(()=>{
  //   const getInfo = async () =>{
  //     const config = {
  //       headers:{
  //         "Content-Type":"application/json",
  //         Authorization:`Bearer ${localStorage.getItem("authToken")}`
  //
  //       }
  //     }
  //
  //     try{
  //       const res= await axios.get("/api/private/getallprodject",config);
  //
  //       setInfo(res.data.data)
  //
  //     }catch(error){}
  //   }
  //
  //
  //   getInfo()
  // },[])

  // const userPopup =(item)=>{
  //   setPopup(true)
  //   setData(item)
  // }
  const navigate = (link)=>{
    history.push(link)
  }
  return (
    <div className="admin__recentOrder">

      <div className="admin__cardHeader">
        <h2>Recent Information</h2>
        <Link to="/infos" className="admin__btn">View all</Link>
      </div>
      <table>

        <thead>
          <tr>
            <td>Table Type</td>
            <td>Table Name</td>
            <td>Table Tech</td>
            <td>Table Description</td>





          </tr>
        </thead>
        <tbody>
        {
          info.reverse().slice(0, 10).map((item,index)=>(
            <tr key={index} onClick={()=>navigate(item.Link)}>
              <td>{item.TableType}</td>
              <td>{item.TableName}</td>
              <td>{item.TableTech}</td>
              <td>{item.TableDesc}</td>
            </tr>

          ))
        }

        </tbody>
      </table>
    </div>
  )
}

export default RecentInfoInput
