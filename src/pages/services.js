import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Services'
      />

      <section className='max-w-6xl mx-auto text-gray-50 md:pt-4'>
        <h1 className='ml-6 text-3xl font-semibold leading-none md:text-5xl'>
          Our <br /> Services
        </h1>
      </section>
      <section className='max-w-5xl mx-auto text-gray-50'>
        <div className='flex flex-col items-start justify-start w-full h-auto px-4 md:px-0'>
          <div className='mt-6 md:mt-12'>
            <div>
              <div>
                <StaticImage
                  className='w-20 h-20 lg:w-40 lg:h-40'
                  src='../images/truck.png'
                  alt=''
                  placeholder='blurred'
                />
                <h2 className='text-xl font-bold uppercase md:text-3xl'>
                  Delivery Service
                </h2>
                <p className='mb-6 md:mb-12'>
                  We are primarily a water delivery service but also deliver
                  several key water related products to your office or home (
                  <Link
                    className='font-semibold text-SA-yellow hover:text-yellow-400'
                    to='/products'
                  >
                    see Our Products
                  </Link>
                  ). Please check our delivery area map below. Please contact us
                  on the contact link below for a quotation. Please also contact
                  us if your delivery location lies on our area fringes as we
                  may be able to accommodate you.
                </p>
              </div>
            </div>

            <div>
              <div>
                <StaticImage
                  className='w-20 h-20 lg:w-40 lg:h-40'
                  src='../images/map.png'
                  alt=''
                  placeholder='blurred'
                />
                <h2 className='text-xl font-bold uppercase md:text-3xl'>
                  Delivery Area
                </h2>
                <p className='mb-6 md:mb-12'>
                  Our delivery area is continuously expanding. Please click here
                  to check the latest map.
                </p>
              </div>
            </div>

            <div>
              <div>
                <StaticImage
                  className='w-20 h-20 lg:w-40 lg:h-40'
                  src='../images/water-cooler-sanitise.png'
                  alt=''
                  placeholder='blurred'
                />
                <h2 className='text-xl font-bold uppercase md:text-3xl'>
                  Water Cooler Cleaning & Sanitising
                </h2>
                <p className='mb-6 md:mb-12'>
                  We clean & sanitise our existing customers’ water coolers
                  free-of-charge after every 6 months of use on request. Please
                  contact us on the contact link below to request this service
                  or for further information.
                </p>
              </div>
            </div>

            <div>
              <div>
                <StaticImage
                  className='w-20 h-20 lg:w-40 lg:h-40'
                  src='../images/water-cooler-repairs.png'
                  alt=''
                  placeholder='blurred'
                />
                <h2 className='text-xl font-bold uppercase md:text-3xl'>
                  Water Cooler Repairs
                </h2>
                <p className='mb-6 md:mb-12'>
                  We repair our existing customers’ water coolers on request.
                  Please contact us on the contact link below to request this
                  service or for further information.
                </p>
              </div>
            </div>

            <div>
              <div>
                <StaticImage
                  className='w-20 h-20 lg:w-40 lg:h-40'
                  src='../images/water-cooler-refill-outlets.png'
                  alt=''
                  placeholder='blurred'
                />
                <h2 className='text-xl font-bold uppercase md:text-3xl'>
                  Water Refill Outlets
                </h2>
                <p className='mb-6 md:mb-12'>
                  Our brand partner Oasis Water Paarden Eiland, operate 4
                  walk-in water refill outlets in Fish Hoek, Bergvliet, Paarden
                  Eiland and Tableview. Please contact us on the contact link
                  below for further information regarding location, prices, and
                  operating hours.
                </p>
              </div>
            </div>
            <div>
              <StaticImage
                className='w-20 h-20 lg:w-40 lg:h-40'
                src='../images/contact.png'
                alt=''
                placeholder='blurred'
              />
              <h2 className='text-xl font-bold uppercase md:text-3xl'>
                Contact Us
              </h2>
              <p className='pb-12 md:pb-24'>
                Please{' '}
                <Link
                  className='font-semibold text-SA-yellow hover:text-yellow-400'
                  to='/contact'
                >
                  contact us
                </Link>{' '}
                for a free quotation or further information regarding any of our
                above services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
