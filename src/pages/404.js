import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title='404: Not found' />
      <section>
        <h1>Sorry page not found.</h1>
      </section>
    </Layout>
  )
}

export default NotFoundPage
