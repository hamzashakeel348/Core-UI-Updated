import React from 'react'
import { useState, useEffect } from 'react'

import MaterialTable from 'material-table'

const Table = () => {
  const [users, setusers] = useState([])
  const columns = [
    { title: 'Id', field: 'id', filtering: false },
    { title: 'Name', field: 'name' },
    { title: 'Username', field: 'username' },
    { title: 'Email', field: 'email' },
  ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setusers(result))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="table"
        columns={columns}
        data={users}
        options={{
          exportButton: true,
          sorting: true,
          filtering: true,
        }}
      />
    </div>
  )
}

export default Table
