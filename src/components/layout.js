import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import '../../static/fonts/fonts.css'

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main className='px-12 py-16 bg-gray-400'>
        <div className='w-full h-auto border-t-8 border-l-8 border-r-8 border-gray-100 border-solid shadow-2xl background'>
          {children}
        </div>

        <footer className='py-4 text-xs text-center text-gray-100 border-b-8 border-l-8 border-r-8 border-gray-100 border-solid background-footer'>
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
