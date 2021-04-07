import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HandSanitiser from '../../static/icons/product/hand-sanitiser.png'
import WaterCooler from '../../static/icons/product/water-cooler.png'
import TreeView from '../components/treeView'

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Products'
      />
      <section className='max-w-6xl mx-auto text-gray-50'>
        <h1 className='ml-6 text-3xl font-semibold leading-none md:text-5xl'>
          Our <br /> Products
        </h1>
      </section>
      <section className='max-w-4xl mx-auto -mt-10 text-gray-50'>
        <TreeView />
        {/* Hand Sanitiser */}
        <div className='flex items-center justify-start mb-12 md:mb-24'>
          <img
            className='w-24 h-24 ml-5 md:w-32 md:h-32'
            src={HandSanitiser}
            alt=''
          />
          <p className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
            Hand Sanitiser (1 Litre Refill)
          </p>
        </div>

        {/* Water Cooler */}

        <div className='flex items-center justify-start pb-12 md:pb-24'>
          <img
            className='w-24 h-24 ml-5 md:w-32 md:h-32'
            src={WaterCooler}
            alt=''
          />
          <p className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
            Water Cooler (1 Litre Refill)
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ProductsPage
