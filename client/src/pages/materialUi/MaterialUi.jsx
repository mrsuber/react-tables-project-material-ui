import {useState} from 'react'
import MaterialTable from 'material-table'

import {title, data, columns,tableIcons} from '../../data/data'





const MaterialUi = () => {
  const [tableData,setTableData]=useState([])
  setTableData(data)
  return (

    <div>
      <MaterialTable  icons={tableIcons} columns={columns} data={tableData} title={title}/>
    </div>
  )
}

export default MaterialUi
