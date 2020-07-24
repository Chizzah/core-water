import React, { useState } from 'react'
import TableData from './tableData'

const ItemOptions = [
  {
    id: '1',
    product: 'T-Shirt Black',
    price: 1250,
  },
  {
    id: '2',
    product: 'Coffee Mug',
    price: 240,
  },
  {
    id: '3',
    product: 'Bananas',
    price: 80,
  },
  {
    id: '4',
    product: 'Cool Yoyo',
    price: 120,
  },
]

const TableView = ({ onViewChange }) => {
  const [option, setOption] = useState('1')
  const [cartItems, setCartItems] = useState([])

  const handleAction = (rowId, action) => {
    // find the row with the given id
    let idx = cartItems.findIndex((v) => v.id === rowId)
    // make a copy to avoid mutation
    let items = cartItems.slice()
    if (action === 'x') {
      items = items.filter((v) => v.id !== rowId)
      setCartItems(items)
    } else if (action === '+') {
      items[idx].quantity++
      setCartItems(items)
    } else if (action === '-') {
      // if quantity is 1 not allow further reduction
      if (items[idx].quantity === 1) return
      items[idx].quantity--
      setCartItems(items)
    }
  }

  const handleAddItem = () => {
    // check if item is already in the cart
    if (cartItems.findIndex((v) => v.id === option) > -1) return
    // find the product object from selected option
    let product = ItemOptions.find((v) => v.id === option)
    // append to list of products
    // make sure we dont just copy references
    setCartItems([...cartItems, { ...product, quantity: 1 }])
  }

  const handleClearCart = () => {
    // find the product object from selected option
    let product = ItemOptions.find((v) => v.id === option)
    // remove all products from cart
    setCartItems((currentCartItems) =>
      currentCartItems.filter((c) => c.name !== product.name)
    )
  }

  return (
    <>
      <TableData
        columns={[
          { accessor: 'product', label: 'Product' },
          {
            accessor: 'price',
            label: 'Price',
            renderAs: (row) => 'Rs' + row.price,
          }, // this will render price
          { accessor: 'qty', label: 'Quantity' }, // this will render quantity

          {
            accessor: 'total', // this does not exsit in the data but should still be provided for proper keying
            label: 'Total',
            renderAs: (row) => row.qty * row.price,
          }, // renderAs will be called with the particular row
        ]}
        data={cartItems}
        onAction={handleAction}
      />
      <div className='w-8/12 text-gray-900 bg-gray-100'>
        <div className='flex items-center justify-start '>
          <select
            className='mr-2 ml-30'
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            {ItemOptions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.product}
              </option>
            ))}
          </select>
          <div
            className='w-16 px-3 py-1 mr-1 font-semibold text-center text-gray-100 bg-green-600'
            onClick={handleAddItem}
          >
            Add
          </div>
          <div
            className='w-16 px-3 py-1 font-semibold text-center text-gray-100 bg-red-600'
            onClick={handleClearCart}
          >
            Clear
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end justify-start w-8/12 mt-16'>
        <div className='flex items-center justify-between w-4/12 h-full p-2 bg-gray-600'>
          <span className='font-semibold uppercase'>Total excluding VAT</span>
          <p className='mr-16'>
            R
            {cartItems
              .map((v) => v.quantity * v.price)
              .reduce((a, b) => a + b, 0)}
          </p>
        </div>
        <div className='flex items-center justify-between w-4/12 h-full p-2 bg-gray-600'>
          <span className='font-semibold uppercase'>Total VAT</span>
          <p className='mr-16'>
            R
            {cartItems
              .map((v) => [v.quantity * v.price] * 0.15)
              .reduce((a, b) => a + b, 0)}
          </p>
        </div>
        <div className='flex items-center justify-between w-4/12 h-full p-2 bg-gray-600'>
          <span className='font-semibold uppercase'>Total including VAT</span>
          <p className='mr-16'>
            R
            {cartItems
              .map((d) => [d.price * 1.15] * d.quantity)
              .reduce((a, b) => a + b, 0)}
          </p>
        </div>
        <button
          className='w-4/12 py-3 text-xs font-semibold text-gray-100 uppercase bg-gray-900 hover:bg-gray-800 focus:outline-none'
          onClick={(e) => onViewChange('confirm-view')}
        >
          Proceed to Confirmation
        </button>
      </div>
    </>
  )
}

export default TableView
