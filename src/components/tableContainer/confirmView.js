import React from 'react'
import emailjs from 'emailjs-com'

const ConfirmView = ({ data, date, onViewChange, user }) => {
  let number = (Math.random() * 100000) | 0

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'basic', e.target, 'user_UtkHT9omV43EyjZuQ0UB6')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <p>{date.toDateString()}</p>
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
      <button
        className='px-3 py-2 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'
        onClick={() => onViewChange('table-view')}
      >
        Ammend
      </button>
      <form onSubmit={sendEmail}>
        <input type='hidden' name='number' value={number} />
        <input type='hidden' name='date' value={date.toDateString()} />
        <input type='hidden' name='name' value={user.name} />
        <input type='hidden' name='email' value={user.email} />
        <input
          type='hidden'
          name='order'
          value={JSON.stringify(data, null, 2)}
        />
        <button
          type='submit'
          className='px-3 py-2 ml-3 font-semibold bg-gray-800 rounded hover hover:bg-gray-700 focus:outline-none'
        >
          Confirm Order
        </button>
      </form>
    </>
  )
}

export default ConfirmView
