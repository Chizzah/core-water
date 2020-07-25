import React from 'react'

const Stepper = ({ value, onIncrease, onDecrease }) => {
  return (
    <span>
      <button
        className='w-6 h-6 mr-2 font-bold text-gray-100 bg-blue-900 rounded hover:bg-blue-800 hover focus:outline-none'
        onClick={onIncrease}
      >
        +
      </button>
      <span>{value}</span>
      <button
        className='w-6 h-6 ml-2 font-bold text-gray-100 bg-blue-900 rounded hover:bg-blue-800 hover focus:outline-none'
        onClick={onDecrease}
      >
        -
      </button>
    </span>
  )
}

export default Stepper
