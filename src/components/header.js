import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../static/logo/core-water-250x250.png'

const Header = () => {
  return (
    <header className='flex items-center justify-center w-full h-full py-4 text-gray-900 bg-white'>
      <Link to='/'>
        <img
          className='w-24 h-24 md:w-48 md:h-48'
          src={Logo}
          alt='Core Water Logo'
        />
      </Link>
    </header>
  )
}

export default Header
