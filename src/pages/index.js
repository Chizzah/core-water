import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Truck from '../../static/backgrounds/delivery-truck.jpg'
import Water from '../../static/backgrounds/water-cooler.jpg'
import Users from '../../static/backgrounds/multiple-users.png'
import Mail from '../../static/backgrounds/send-email.png'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Water Delivery Made Easy'
      />
      <section>
        <h1 className='pt-8 text-3xl font-semibold text-center text-gray-100 uppercase md:text-6xl'>
          Core Premier Water
          <br />
          <span className='text-xl font-semibold text-center text-gray-100 capitalize md:text-3xl'>
            Water Delivery Made Easy.
          </span>
        </h1>
        <section className='w-full py-8 md:py-16 md:mx-auto md:max-w-4xl'>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/services'>
              <div className='relative flex items-center justify-center text-gray-100 bg-local w-80 h-80 lg:w-112 lg:h-112 bg-SA-green'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-25'
                  src={Truck}
                  alt=''
                />
                <h2 className='z-10 text-3xl font-bold text-center uppercase md:text-5xl'>
                  Our <br className='hidden md:block' /> Services
                </h2>
              </div>
            </Link>
            <Link to='/products'>
              <div className='relative flex items-center justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112 bg-SA-blue'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-25'
                  src={Water}
                  alt=''
                />
                <h2 className='z-10 text-3xl font-bold text-center uppercase md:text-5xl'>
                  Our <br className='hidden md:block' /> Products
                </h2>
              </div>
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:flex-row'>
            <Link to='/account'>
              <div className='relative flex items-center justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112 bg-SA-red'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-25'
                  src={Users}
                  alt=''
                />
                <h2 className='z-10 text-3xl font-bold text-center uppercase md:text-5xl'>
                  Customer <br className='hidden md:block' /> Zone
                </h2>
              </div>
            </Link>
            <Link to='/contact'>
              <div className='relative flex items-center justify-center text-gray-100 w-80 h-80 lg:w-112 lg:h-112 bg-SA-yellow'>
                <img
                  className='absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-25'
                  src={Mail}
                  alt=''
                />
                <h2 className='z-10 text-3xl font-bold text-center uppercase md:text-5xl'>
                  Contact <br className='hidden md:block' /> Us
                </h2>
              </div>
            </Link>
          </div>
        </section>
        {/* water cooler - Image by <a href="https://pixabay.com/users/Picsues-1416498/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=981167">Susan Sewert</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=981167">Pixabay</a>

        multiple users - Image by <a href="https://pixabay.com/users/toufik-amazigh-2076208/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1331579">toufik-amazigh</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1331579">Pixabay</a>

        delivery truck - Image by <a href='https://www.freepik.com/free-photos-vectors/medical'>Medical vector created by freepik - www.freepik.com</a>

        send mail - Image by <a href="https://pixabay.com/users/talhakhalil007-5671515/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">talha khalil</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">Pixabay</a> */}
      </section>
    </Layout>
  )
}

export default IndexPage
