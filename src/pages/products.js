import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Products'
      />
      <section className='flex items-center justify-center w-full h-screen text-gray-100'>
        <h1 className='text-3xl font-semibold text-center lg:text-5xl'>
          Product page coming soon...
        </h1>
      </section>
    </Layout>
  )
}

export default ProductsPage
