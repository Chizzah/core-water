import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'

import '../../static/fonts/fonts.css'

function Layout({ children }) {
  return (
    <>
      <main className='bg-gray-400 md:px-24 md:py-24'>
        <section className='flex flex-col items-center justify-center pb-2 background-header md:border-gray-100 md:border-t-16 md:border-l-16 md:border-r-16'>
          <Link to='/'>
            <StaticImage
              className='w-32 h-32 mt-6 md:w-48 md:h-48'
              src='../images/core-water-250x250.png'
              alt='Core Water Logo'
            />
          </Link>
        </section>
        <div className='w-full h-auto md:border-l-16 md:border-r-16 md:border-gray-100 md:border-solid md:shadow-xl background'>
          {children}
        </div>

        <footer className='pb-4 text-xs text-center text-gray-100 md:border-b-16 md:border-l-16 md:border-r-16 md:border-gray-100 md:border-solid background-footer'>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
