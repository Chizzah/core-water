import React, { useState } from 'react'

import '../../css/style.css'
import TableView from './tableView'
import ConfirmView from './confirmView'

const TableContainer = () => {
  const [view, setView] = useState('table-view')
  const [data, setData] = useState(null)

  const handleSubmission = (data) => {
    setData(data)
    setView('confirm-view')
  }

  if (view === 'table-view') {
    // we replace onViewChange with onSubmission
    return (
      <TableView
        onSubmitData={handleSubmission}
        onSubmitDate={handleSubmission}
      />
    )
  } else if (view === 'confirm-view') {
    return <ConfirmView data={data} onViewChange={(view) => setView(view)} />
  } else {
    return <div>Invalid view. Expected [table-view|confirm-view]</div>
  }
}

export default TableContainer
