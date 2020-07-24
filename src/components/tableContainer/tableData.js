import React from 'react'

import Remove from '../../../static/icons/remove.svg'

/*
  data: is basically an array of objects that will be rendered
  columns: basically tells this component that how to render the given rows
  like what will go in th and in what order
*/

const DataTable = ({ data, columns, onAction }) => {
  const handleAction = (e) => {
    let action = e.target.getAttribute('data-action')
    if (!action) return
    let rowId = e.target.getAttribute('data-id')
    onAction(rowId, action)
  }
  return (
    <>
      <table
        onClick={handleAction}
        className='w-8/12 text-gray-900 bg-gray-100 shadow-2xl'
      >
        <thead className='text-gray-100 bg-gray-600'>
          <tr>
            {columns.map((v) => (
              <th className='py-3' key={v.accessor}>
                {v.label}
              </th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className='py-3 text-center' key={row.id}>
              <td className='py-3 text-center' key={'product'}>
                {row['product']}
              </td>
              <td className='py-3 text-center' key={'price'}>
                R{row['price']}
              </td>

              <td
                className='flex items-center justify-center py-3'
                key={'quantity'}
              >
                <span
                  data-action='+'
                  data-id={row.id}
                  className='w-6 h-6 mr-3 text-gray-100 bg-blue-900 rounded cursor-pointer focus:outline-none hover:bg-blue-800 hover'
                >
                  +
                </span>
                {row['quantity']}
                <span
                  data-action='-'
                  data-id={row.id}
                  className='w-6 h-6 ml-3 text-gray-100 bg-blue-900 rounded cursor-pointer focus:outline-none hover:bg-blue-800 hover'
                >
                  -
                </span>
              </td>
              <td className='space'>R{row['price'] * row['quantity']}</td>
              <td />
              {/* <td>
                <img
                  data-action='x'
                  data-id={row.id}
                  className='w-5 h-5 cursor-pointer'
                  src={Remove}
                  alt='Remove line item icon'
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DataTable
