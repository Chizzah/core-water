import React from 'react'

const ConfirmView = ({ onViewChange }) => {
  return (
    <div className='flex items-center justify-center m-6'>
      <span style={{ marginRight: '10px' }}>
        This is confirm view. Not implemented yet
      </span>
      <button
        className='px-3 py-2 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'
        onClick={() => onViewChange('table-view')}
      >
        Amend Order
      </button>
      <button className='px-3 py-2 ml-3 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'>
        Confirm Order
      </button>
    </div>
  )
}

export default ConfirmView
