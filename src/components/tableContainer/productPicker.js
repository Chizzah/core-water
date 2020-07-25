import React from 'react'

const ProductPicker = ({ options, value, onChange }) => {
  return (
    <select
      className='w-32 h-6 mr-3 text-gray-900'
      value={value}
      onChange={onChange}
    >
      {options.map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      ))}
    </select>
  )
}

export default ProductPicker
