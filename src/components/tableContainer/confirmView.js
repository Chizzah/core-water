import React, { useState } from 'react'
import axios from 'axios'

const ConfirmView = ({ data, onViewChange }) => {
  const [mail, setMail] = useState(data)

  console.log(mail)

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      mail: mail,
    }

    axios
      .post('https://formsubmit.co/chizzah69@gmail.com', { message })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }

  const onChange = (e) => {
    setMail({ mail: e.target.value })
  }

  return (
    <>
      <form
        action='https://formsubmit.co/chizzah69@gmail.com'
        onSubmit={handleSubmit}
        method='POST'
      >
        {data.map((v) => {
          return (
            <div
              className='flex items-center justify-between max-w-xl mx-auto'
              key={v.id}
            >
              <div className='flex items-center justify-start'>
                <p className='mr-3'>{v.quantity}</p>
                <p className='mr-3'>x</p>
                <p className='mr-10'>{v.name}</p>
              </div>
              <div>
                <p>R{v.price * v.quantity}</p>
              </div>
            </div>
          )
        })}
        <div>
          <div className='mt-6'>
            <span className='font-semibold uppercase'>Total excluding VAT</span>
            <p className='mr-16'>
              R
              {data.map((v) => v.quantity * v.price).reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className='mt-6'>
            <span className='font-semibold uppercase'>Total VAT</span>
            <p className='mr-16'>
              R
              {data
                .map((v) => [v.quantity * v.price] * 0.15)
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div className='mt-6'>
            <span className='font-semibold uppercase'>Total including VAT</span>
            <p className='mr-16'>
              R
              {data
                .map((d) => [d.price * 1.15] * d.quantity)
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
          <div>
            <button
              className='px-3 py-2 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'
              onClick={() => onViewChange('table-view')}
            >
              Amend Order
            </button>
            <input
              name='payload'
              type='hidden'
              value={mail}
              onChange={onChange}
            />
            <button
              type='submit'
              className='px-3 py-2 ml-3 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ConfirmView
