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
      <section className='max-w-5xl pt-10 mx-auto mb-10 text-gray-100 md:pt-20 md:mb-20'>
        <h1 className='text-3xl font-semibold lg:text-6xl'>Our Products</h1>
      </section>
      <section className='max-w-4xl mx-auto text-gray-100'>
        <TreeView />
        {/* Hand Sanitiser */}
        <div className='flex items-center justify-start mb-12 md:mb-24'>
          <img className='w-32 h-32' src={HandSanitiser} alt='' />
          <p className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
            Hand Sanitiser (1 Litre Refill)
          </p>
        </div>

        {/* Water Cooler */}

        <div className='flex items-center justify-start pb-12 md:pb-24'>
          <img className='w-32 h-32' src={WaterCooler} alt='' />
          <p className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
            Hand Sanitiser (1 Litre Refill)
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ProductsPage
