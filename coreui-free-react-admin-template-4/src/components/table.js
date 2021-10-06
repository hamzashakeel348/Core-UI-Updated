import React from 'react'
import { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Tables() {
  const [users, setusers] = useState([])

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    {
      dataField: 'username',
      text: 'Username',
      sort: true,
      filter: textFilter(),
    },
    { dataField: 'email', text: 'Email', sort: true },
  ]

  const paginator = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setusers(result))
      .catch((error) => console.log(error))
  })
  return (
    <div>
      <BootstrapTable
        bootstrap4
        pagination={paginator}
        keyField="id"
        columns={columns}
        data={users}
        filter={filterFactory()}
      />
    </div>
  )
}
export default Tables
