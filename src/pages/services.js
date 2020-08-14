import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Services'
      />

      <section className='max-w-6xl pt-10 mx-auto text-gray-100 md:pt-20'>
        <h1 className='text-3xl font-semibold lg:text-6xl'>Our Services</h1>
      </section>
      <section className='max-w-5xl mx-auto text-gray-100'>
        <div className='flex flex-col items-start justify-start w-full h-auto'>
          <div className='mt-6 md:mt-12'>
            <div>
              <div>
                <h2 className='text-3xl font-bold uppercase md:text-4xl'>
                  Delivery Service
                </h2>
                <p className='mb-6 md:mb-12'>
                  We are primarily a water delivery service but also deliver
                  several key water related products to your office or home (
                  <Link className='font-semibold text-SA-blue' to='/products'>
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
                <h2 className='text-3xl font-bold uppercase md:text-4xl'>
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
                <h2 className='text-3xl font-bold uppercase md:text-4xl'>
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
                <h2 className='text-3xl font-bold uppercase md:text-4xl'>
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
                <h2 className='text-3xl font-bold uppercase md:text-4xl'>
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
          </div>
        </div>
      </section>

      <section className='max-w-6xl pb-10 mx-auto text-gray-100 md:pb-20'>
        <p>
          Please contact us for a free quotation or further information
          regarding any of our above services.
        </p>
      </section>
    </Layout>
  )
}

export default ServicesPage
