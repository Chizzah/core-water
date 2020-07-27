import React, { useState } from 'react'

import ProductPicker from './productPicker'
import { ProductItems } from './data'
import DataTable from './dataTable'
import Stepper from './stepper'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Remove from '../../../static/icons/remove.svg'

const TableView = ({ onViewChange }) => {
  const [selectedOption, setSelectedOption] = useState(ProductItems[0].id)
  const [cartItems, setCartItems] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const minDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  const maxDate = new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)

  const handleAddItem = (e) => {
    // if item already in the cart just ignore this functino
    if (cartItems.find((v) => v.id === selectedOption)) return
    // otherwise add it
    let item = ProductItems.find((v) => v.id === selectedOption)
    setCartItems([
      ...cartItems,
      {
        ...item,
        quantity: 1, // start with one later user can inc/dec ti
      }, // immutability
    ])
  }

  const handleDeleteAll = (e) => {
    setCartItems([])
  }

  const handlePlus = (id) => {
    let items = cartItems.slice()
    let idx = items.findIndex((v) => v.id === id)
    items[idx].quantity++
    setCartItems(items)
  }

  const handleMinus = (id) => {
    let items = cartItems.slice()
    let idx = items.findIndex((v) => v.id === id)
    // make sure if quantity is at 1, then dont reduce it further
    if (items[idx].quantity === 1) return
    items[idx].quantity--
    setCartItems(items)
  }

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((v) => v.id !== id))
  }

  return (
    <>
      <DatePicker
        className='font-semibold text-center text-gray-900'
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/yyy'
        minDate={minDate}
        maxDate={maxDate}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      />
      <DataTable
        columns={[
          { accessor: 'name', label: 'Product' },
          {
            accessor: 'quantity',
            label: 'Qty',
            render: (row) => (
              <Stepper
                value={row.quantity}
                onIncrease={() => handlePlus(row.id)}
                onDecrease={() => handleMinus(row.id)}
              />
            ),
          },
          {
            accessor: 'price',
            label: 'Price',
            render: (row) => `R${row.price}`,
          },
          {
            accessor: 'subtotal',
            label: 'Subtotal',
            render: (row) => `R${row.price * row.quantity}`,
          },
          {
            accessor: 'actions',
            label: '',
            render: (row) => (
              <button
                className='focus:outline-none'
                onClick={(e) => handleDelete(row.id)}
              >
                <img
                  className='w-4 h-4'
                  src={Remove}
                  alt='Remove item button'
                />
              </button>
            ),
          },
        ]}
        data={cartItems}
      />

      <div className='flex items-start justify-between w-8/12 mt-8'>
        <div className='flex items-center justify-center w-5/12 p-3 bg-gray-600'>
          <ProductPicker
            options={ProductItems}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <button
            className='px-3 py-1 mr-3 font-semibold bg-green-600 rounded hover hover:bg-green-500 focus:outline-none'
            onClick={handleAddItem}
          >
            Add Item
          </button>
          <button
            className='px-3 py-1 mr-3 font-semibold bg-red-600 rounded hover hover:bg-red-500 focus:outline-none'
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </div>
        <div className='w-5/12 p-3 bg-gray-600 '>
          <div className='flex items-center justify-between w-full'>
            <span className='font-semibold uppercase'>Total excluding VAT</span>
            <p className='mr-16'>
              R
              {cartItems
                .map((v) => v.quantity * v.price)
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <span className='font-semibold uppercase'>Total VAT</span>
            <p className='mr-16'>
              R
              {cartItems
                .map((v) => [v.quantity * v.price] * 0.15)
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <span className='font-semibold uppercase'>Total including VAT</span>
            <p className='mr-16'>
              R
              {cartItems
                .map((d) => [d.price * 1.15] * d.quantity)
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <button
            className='w-full h-8 mt-3 font-semibold bg-gray-800 hover hover:bg-gray-700 focus:outline-none'
            onClick={() => onViewChange('confirm-view')}
          >
            Submit Order
          </button>
        </div>
      </div>
    </>
  )
}

export default TableView
