import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Services from '../../static/backgrounds/services.jpg'
import Products from '../../static/backgrounds/products.jpg'
import Customers from '../../static/backgrounds/customers.jpg'
import Contact from '../../static/backgrounds/contact.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Water Delivery Made Easy'
      />
      <section className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold text-center text-gray-100 uppercase md:text-6xl'>
          Core Premier Water
          <br />
          <span className='text-lg font-semibold text-center text-gray-100 capitalize md:text-3xl'>
            Water Delivery Made Easy
          </span>
        </h1>
        <section className='w-full py-8 md:py-16 md:mx-auto md:max-w-4xl'>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/services'>
              <div className='relative flex items-end justify-center text-gray-100 bg-local w-80 h-80 lg:w-112 lg:h-112'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src={Services}
                  alt=''
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-3xl font-bold text-center uppercase md:text-4xl'>
                    Our Services
                  </h2>
                </div>
              </div>
            </Link>
            <Link to='/products'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src={Products}
                  alt=''
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-3xl font-bold text-center uppercase md:text-4xl'>
                    Our Products
                  </h2>
                </div>
              </div>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/account'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src={Customers}
                  alt=''
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-3xl font-bold text-center uppercase md:text-4xl'>
                    Customer Zone
                  </h2>
                </div>
              </div>
            </Link>
            <Link to='/contact'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src={Contact}
                  alt=''
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-3xl font-bold text-center uppercase md:text-4xl'>
                    Contact Us
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
