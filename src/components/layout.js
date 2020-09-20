import React from 'react'
import PropTypes from 'prop-types'

import '../../static/fonts/fonts.css'

function Layout({ children }) {
  return (
    <div>
      <main className='bg-gray-400 lg:px-24 lg:py-32'>
        <div className='w-full h-auto lg:border-t-8 lg:border-l-8 lg:border-r-8 lg:border-gray-100 lg:border-solid lg:shadow-2xl background'>
          {children}
        </div>

        <footer className='py-4 text-xs text-center text-gray-100 lg:border-b-8 lg:border-l-8 lg:border-r-8 lg:border-gray-100 lg:border-solid background-footer'>
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
