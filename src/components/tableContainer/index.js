import React, { useState } from 'react'

import '../../css/style.css'
import TableView from './tableView'
import ConfirmView from './confirmView'

const TableContainer = () => {
  const [view, setView] = useState('table-view')

  if (view === 'table-view') {
    return <TableView onViewChange={(view) => setView(view)} />
  } else if (view === 'confirm-view') {
    return <ConfirmView onViewChange={(view) => setView(view)} />
  } else {
    return <div>Invalid view. Expected [table-view|confirm-view]</div>
  }
}

export default TableContainer
