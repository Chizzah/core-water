import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Products'
      />
      <section className='mx-4 text-lg text-gray-100 md:text-2xl md:mx-0'>
        {/* Business Details */}

        <section className='flex flex-col items-center justify-around py-10 md:flex-row md:py-20'>
          <div>
            <h2 className='mb-8 text-2xl font-semibold text-center underline uppercase md:text-5xl'>
              Business Details
            </h2>
            <address className='flex flex-col items-center justify-center mb-8'>
              <ul>
                <li>
                  <strong>Address:</strong> 21 Lowestoft Street, Paarden Eiland,{' '}
                  <br />
                  Cape Town, Western Cape, South Africa
                </li>
                <li>
                  <strong>Phone:</strong> 021 510-3788
                </li>
                <li className='flex items-start justify-start'>
                  <div>
                    <strong>Hours:</strong>
                  </div>
                  <div className='ml-2'>
                    {' '}
                    Monday 08:00-16:30 <br /> Tuesday 08:00-16:30 <br />{' '}
                    Wednesday 08:00-16:30 <br /> Thursday 08:00-16:30 <br />{' '}
                    Friday 08:00-16:00 <br /> Saturday Closed <br /> Sunday
                    Closed
                  </div>
                </li>
              </ul>
            </address>
          </div>
          <div className='map'>
            <a
              href='https://www.google.com/maps/place/21+Lowestoft+St,+Paarden+Eiland,+Cape+Town,+7420/@-33.9166745,18.4736006,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc5c4d3277ef3d:0xfc7d665b02e9d381!8m2!3d-33.9166745!4d18.4757893'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Img fluid={data.googleMaps.childImageSharp.fluid} />
            </a>
          </div>
        </section>

        {/* Contact Section */}

        <section className='flex flex-col items-center justify-around py-10 md:flex-row md:py-20'>
          <div className='flex flex-col items-center justify-center text-center md:w-7/12'>
            <h2 className='mb-4 text-xl font-semibold uppercase md:mb-8 md:text-5xl'>
              Looking forward to <br /> hearing from you!
            </h2>
            <p className='mx-2 mb-8 md:w-9/12 md:text-2xl'>
              Get in touch with us for any questions or concerns you may have
              and we`ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    googleMaps: file(relativePath: { eq: "core-water-google-maps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
ContactPage.propTypes = {
  data: PropTypes.object,
}

export default ContactPage
