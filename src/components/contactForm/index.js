import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  function sendEmail(e) {
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
    <form
      className='flex flex-col items-center justify-center text-gray-900'
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input type='text' name='name' />
      <label>Email</label>
      <input type='email' name='email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
  )
}

export default ContactForm
