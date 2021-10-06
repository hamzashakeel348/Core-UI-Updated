import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Table from '../components/table'
const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Table />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
