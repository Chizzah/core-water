import React from 'react'

const TableModal = ({ onViewChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Your order will be delivered on</h1>
      <h2>Insert Date Here</h2>
      <button onClick={(e) => onViewChange('table-view')}>Ammend Order</button>
      <form>
        <button onSubmit={handleSubmit}>Confirm Order</button>
      </form>
    </div>
  )
}

export default TableModal
