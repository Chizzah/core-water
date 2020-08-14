import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Water from '../../static/icons/product/water.png'
import DispenserWater from '../../static/icons/product/dispenser-water-bottle.png'
import StillWater from '../../static/icons/product/still-water-bottle.png'
import SparklingWater from '../../static/icons/product/sparkling-water-bottle.png'

import Coffee from '../../static/icons/product/coffee.png'
import Classic from '../../static/icons/product/nestle-classic.png'
import ClassicDecaf from '../../static/icons/product/nestle-classic-decaf.png'
import Gold from '../../static/icons/product/nestle-gold.png'
import GoldDecaf from '../../static/icons/product/nestle-gold-decaf.png'
import Ricoffy from '../../static/icons/product/nestle-ricoffy.png'

import Tea from '../../static/icons/product/tea.png'
import FiveRoses from '../../static/icons/product/five-roses.png'
import FreshPak from '../../static/icons/product/freshpak.png'

import HotChocolate from '../../static/icons/product/hot-chocolate.png'
import HotChoc from '../../static/icons/product/nestle-hot-chocolate.png'
import Milo from '../../static/icons/product/nestle-milo.png'

import CoffeeCreamers from '../../static/icons/product/coffee-creamers.png'
import Cremora from '../../static/icons/product/nestle-cremora.png'
import EllisBrown from '../../static/icons/product/ellis-brown-creamer.png'

import Sweeteners from '../../static/icons/product/sweeteners.png'
import WhiteSugar from '../../static/icons/product/hulettes-white.png'
import BrownSugar from '../../static/icons/product/hulettes-brown.png'
import Canderel from '../../static/icons/product/canderel.png'

import HandSanitiser from '../../static/icons/product/hand-sanitiser.png'
import WaterCooler from '../../static/icons/product/water-cooler.png'

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Products'
      />
      <section className='max-w-6xl pt-10 mx-auto mb-10 text-gray-100 md:pt-20 md:mb-20'>
        <h1 className='text-3xl font-semibold lg:text-6xl'>Our Products</h1>
      </section>
      <section className='max-w-5xl mx-auto'>
        {/* Water */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={Water}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={DispenserWater}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={StillWater}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={SparklingWater}
              alt=''
            />
          </div>
        </div>

        {/* Coffee */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={Coffee}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Classic}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={ClassicDecaf}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Gold}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={GoldDecaf}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Ricoffy}
              alt=''
            />
          </div>
        </div>

        {/* Tea */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={Tea}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={FiveRoses}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={FreshPak}
              alt=''
            />
          </div>
        </div>

        {/* Hot chocolate */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={HotChocolate}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={HotChoc}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Milo}
              alt=''
            />
          </div>
        </div>

        {/* Creamers */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={CoffeeCreamers}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Cremora}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={EllisBrown}
              alt=''
            />
          </div>
        </div>

        {/* Sweeteners */}

        <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
          <img
            className='w-48 h-48 border border-gray-100 border-dashed'
            src={Sweeteners}
            alt=''
          />
          <div className='max-w-5xl mx-auto '>
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={WhiteSugar}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={BrownSugar}
              alt=''
            />
            <img
              className='w-32 h-32 border border-gray-100 border-dashed'
              src={Canderel}
              alt=''
            />
          </div>
        </div>

        {/* Hand Sanitiser */}
        <div>
          <div className='flex flex-col items-start justify-center mb-12 md:mb-24'>
            <img
              className='w-48 h-48 border border-gray-100 border-dashed'
              src={HandSanitiser}
              alt=''
            />
          </div>

          {/* Water Cooler */}

          <div className='flex flex-col items-start justify-center pb-12 md:pb-24'>
            <img
              className='w-48 h-48 border border-gray-100 border-dashed'
              src={WaterCooler}
              alt=''
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductsPage
