import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Logo from '../../static/logo/core-water-250x250.png'
import '../../static/fonts/fonts.css'

function Layout({ children }) {
  return (
    <div>
      <main className='bg-gray-400 lg:px-24 lg:py-24'>
        <section className='flex flex-col items-center justify-center background-header lg:border-gray-100 lg:border-t-16 lg:border-l-16 lg:border-r-16'>
          <Link to='/'>
            <img
              className='w-32 h-32 mt-6 md:w-48 md:h-48 lg:mt-12'
              src={Logo}
              alt='Core Water Logo'
            />
          </Link>
        </section>
        <div className='w-full h-auto lg:border-l-16 lg:border-r-16 lg:border-gray-100 lg:border-solid lg:shadow-xl background'>
          {children}
        </div>

        <footer className='pb-4 text-xs text-center text-gray-100 lg:border-b-16 lg:border-l-16 lg:border-r-16 lg:border-gray-100 lg:border-solid background-footer'>
          <p>Copyright © Core Water 2020 | All rights reserved</p>
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
