import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`core water`, `water delivery`]}
        title='Water Delivery Made Easy'
      />
      <section className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold text-center text-gray-100 uppercase md:text-4xl'>
          PREMIER WATER & RELATED PRODUCTS
        </h1>
        <h2 className='text-lg font-semibold text-center text-gray-100 capitalize md:text-3xl'>
          Water Delivery Made Easy
        </h2>
        <section className='w-full pt-2 pb-5 md:pt-4 md:pb-10 md:mx-auto md:max-w-4xl'>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/products'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-112 xl:h-112'>
                <StaticImage
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src='../images/products.jpg'
                  alt='Image for our products page'
                  placeholder='blurred'
                  width={480}
                  height={480}
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-2xl font-semibold text-center uppercase xl:text-4xl'>
                    Our Products
                  </h2>
                </div>
              </div>
            </Link>
            <Link to='/services'>
              <div className='relative flex items-end justify-center text-gray-100 bg-local w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-112 xl:h-112'>
                <StaticImage
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src='../images/services.jpg'
                  alt='Image for our services page'
                  placeholder='blurred'
                  width={480}
                  height={480}
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-2xl font-semibold text-center uppercase xl:text-4xl'>
                    Our Services
                  </h2>
                </div>
              </div>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/account'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-112 xl:h-112'>
                <StaticImage
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src='../images/customers.jpg'
                  alt='Image for customer zone page'
                  width={480}
                  height={480}
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-2xl font-semibold text-center uppercase xl:text-4xl'>
                    Customer Zone
                  </h2>
                </div>
              </div>
            </Link>
            <Link to='/contact'>
              <div className='relative flex items-end justify-center text-gray-100 w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-112 xl:h-112'>
                <StaticImage
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full'
                  src='../images/contact.jpg'
                  alt='Image for contact page'
                  placeholder='blurred'
                  width={480}
                  height={480}
                />
                <div className='z-10 flex items-center justify-center w-full py-2 overlay'>
                  <h2 className='text-2xl font-semibold text-center uppercase xl:text-4xl'>
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
