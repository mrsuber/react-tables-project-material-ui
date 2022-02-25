import {useState} from 'react'
import MaterialTable from 'material-table'
import {Topbar,Sidebar} from '../../component'
import {title, data, columns,tableIcons} from '../../data/data'





const MaterialUi = ({history}) => {
  const [tableData,setTableData]=useState(data)

  return (
    <>
    <Sidebar history={history}/>
    <div className="admin__main">
      <Topbar/>
    <div>

      <h2>This is the materailTable</h2>
      <MaterialTable  icons={tableIcons} columns={columns} data={tableData} title={title}/>
    </div>
    </div>
    </>
  )
}

export default MaterialUi
