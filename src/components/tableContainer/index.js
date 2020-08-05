import React, { useState } from 'react'

import '../../css/style.css'
import TableView from './tableView'
import ConfirmView from './confirmView'

const TableContainer = ({ user }) => {
  const [view, setView] = useState('table-view')
  const [data, setData] = useState(null)
  const [date, setDate] = useState(null)

  const handleData = (data) => {
    setData(data)
    setView('confirm-view')
  }

  const handleDate = (date) => {
    setDate(date)
  }

  const handleView = () => {
    setView('confirm-view')
  }

  if (view === 'table-view') {
    // we replace onViewChange with onSubmission
    return (
      <TableView
        onSubmitData={handleData}
        onSubmitDate={handleDate}
        onSubmitView={handleView}
      />
    )
  } else if (view === 'confirm-view') {
    return (
      <ConfirmView
        data={data}
        date={date}
        onViewChange={(view) => setView(view)}
        user={user}
      />
    )
  } else {
    return <div>Invalid view. Expected [table-view|confirm-view]</div>
  }
}

export default TableContainer
