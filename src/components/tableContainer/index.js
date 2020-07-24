import React, { useState } from 'react'

import TableView from './tableView'
import TableConfirm from './tableConfirm'

// TableContainer now basically holds different views

const TableContainer = () => {
  // we start it with the table-view
  const [view, setView] = useState('table-view')
  if (view === 'table-view') return <TableView onViewChange={setView} />
  else if (view === 'confirm-view')
    return <TableConfirm onViewChange={setView} />
  else return <div>INVALID VIEW SET</div>
}

export default TableContainer
