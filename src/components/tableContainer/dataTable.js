import React from 'react'

/*
  data: is basically an array of objects that will be rendered
  columns: basically tells this component that how to render the given rows
  like what will go in th and in what order
*/

const DataTable = ({ data, columns }) => {
  return (
    <table className='w-8/12 mt-6 text-gray-900 bg-gray-50 shadow-2xl'>
      <thead className='text-gray-50 bg-gray-600'>
        <tr>
          {columns.map((v) => (
            <th className='py-2 text-center' key={v.accessor}>
              {v.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td
                className='py-2 text-center border-b border-gray-1000 border-solid'
                key={col.accessor}
              >
                {col.render ? col.render(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
