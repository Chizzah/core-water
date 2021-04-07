import React from 'react'

const ContactForm = () => {
  return (
    <form
      className='flex flex-col items-center justify-center w-full text-gray-900 md:w-128'
      target='_blank'
      action='https://formsubmit.co/admin@corewater.co.za'
      method='POST'
    >
      <input
        className='w-full mb-2 md:w-3/4 form-input'
        type='text'
        placeholder='Name'
        name='Name'
        required
      />
      <input
        className='w-full mb-2 md:w-3/4 form-input'
        type='email'
        placeholder='Email'
        name='Email'
        required
      />
      <textarea
        className='w-full mb-2 md:w-3/4 form-textarea'
        name='Message'
        placeholder='Message'
        required
        rows='6'
      />

      <input
        className='w-full px-3 py-1 text-lg font-semibold text-gray-50 uppercase rounded-md cursor-pointer md:w-3/4 bg-SA-green hover:bg-green-400 hover'
        type='submit'
      />
    </form>
  )
}

export default ContactForm
