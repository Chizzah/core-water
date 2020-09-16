import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import '../../static/fonts/fonts.css'

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main className='px-3 py-4 bg-gray-300'>
        <div className='w-full h-auto shadow-2xl background'>{children}</div>

        <footer className='py-4 text-xs text-center text-gray-100 background-footer'>
          <p>Copyright ©Core Water, 2020. All rights reserved.</p>
          <p>
            JAMstack Website by {''}
            <a
              className='font-bold no-underline hover:text-green-500'
              href='https://chaddwebdesign.co.za'
              target='_blank'
              rel='noopener noreferrer'
            >
              Chadd Web Design
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
