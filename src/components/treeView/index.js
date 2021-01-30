import React, { useState } from 'react'

import '../../css/product.scss'

import NescafeClassic from '../../images/nescafe-classic-200g-jar.png'
import NescafeClassicDecaf from '../../images/nescafe-classic-decaf-200g-jar.png'
import NescafeGold from '../../images/nescafe-gold-200g-jar.png'
import NescafeGoldDecaf from '../../images/nescafe-gold-decaf-200g-jar.png'
import NescafeRifcoffy from '../../images/nescafe-ricoffy-750g-tin.png'

const TreeView = () => {
  const [toggle, isToggle] = useState(false)
  const [toggle1, isToggle1] = useState(false)
  const [toggle2, isToggle2] = useState(false)
  const [toggle3, isToggle3] = useState(false)
  const [toggle4, isToggle4] = useState(false)

  console.log(toggle, 'button 1')
  console.log(toggle1, 'button 2')

  const handleClickToggle = () => {
    isToggle1(false)
    isToggle2(false)
    isToggle3(false)
    isToggle4(false)
    isToggle(!toggle)
  }

  const handleClickToggle1 = () => {
    isToggle(false)
    isToggle2(false)
    isToggle3(false)
    isToggle4(false)
    isToggle1(!toggle1)
  }

  const handleClickToggle2 = () => {
    isToggle1(false)
    isToggle(false)
    isToggle3(false)
    isToggle4(false)
    isToggle2(!toggle2)
  }

  const handleClickToggle3 = () => {
    isToggle1(false)
    isToggle2(false)
    isToggle(false)
    isToggle4(false)
    isToggle3(!toggle3)
  }

  const handleClickToggle4 = () => {
    isToggle1(false)
    isToggle2(false)
    isToggle3(false)
    isToggle(false)
    isToggle4(!toggle4)
  }

  return (
    <section>
      {/* WATER */}

      <div className='my-12 treeview js-treeview md:my-24'>
        <ul>
          <li>
            <div className='treeview__water'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Water
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__water_dispenser'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Oasis Dispenser Water (5Gal/18,9L)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_still'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Oasis Bottled Still Water (24x500ml)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_sparkling'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Oasis Bottled Sparkling Water (24x330ml)
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* COFFEE */}

      <div className='mb-12 treeview js-treeview md:mb-24'>
        <ul>
          <li>
            {toggle === true ? (
              <img
                className='absolute top-0 right-0'
                src={NescafeClassic}
                alt=''
              />
            ) : null}
            {toggle1 === true ? (
              <img
                className='absolute top-0 right-0'
                src={NescafeClassicDecaf}
                alt=''
              />
            ) : null}
            {toggle2 === true ? (
              <img
                className='absolute top-0 right-0'
                src={NescafeGold}
                alt=''
              />
            ) : null}
            {toggle3 === true ? (
              <img
                className='absolute top-0 right-0'
                src={NescafeGoldDecaf}
                alt=''
              />
            ) : null}
            {toggle4 === true ? (
              <img
                className='absolute top-0 right-0'
                src={NescafeRifcoffy}
                alt=''
              />
            ) : null}
            <div className='treeview__coffee'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Coffee
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__coffee_classic'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nescafé Classic (200g Jar)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={handleClickToggle}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_classic_decaf'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nescafé Classic Decaf (200g Jar)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={handleClickToggle1}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nescafé Gold (200g Jar)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={handleClickToggle2}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold_decaf'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nescafé Gold Decaf (200g Jar)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={handleClickToggle3}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_ricoffy'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nescafé Ricoffy (750g Tin)
                  </span>
                  <span className='bg-transparent img_hover img_hover_last'>
                    <button
                      onClick={handleClickToggle4}
                      className='w-full h-full text-transparent'
                    >
                      click
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* TEA */}

      <div className='mb-12 treeview js-treeview md:mb-24'>
        <ul>
          <li>
            <div className='treeview__tea'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Tea
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__tea_five_roses'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Five Roses Ceylon (102 Tea Bags)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__tea_freshpak'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Freshpak Rooibos (160 Tea Bags)
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* HOT CHOCOLATE */}

      <div className='mb-12 treeview js-treeview md:mb-24'>
        <ul>
          <li>
            <div className='treeview__hotchocolate'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Hot Chocolate
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__hotchocolate_nestle'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Hot Chocolate (500g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__hotchocolate_milo'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Milo (500g Jar)
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* COFFEE CREAMER */}

      <div className='mb-12 treeview js-treeview md:mb-24'>
        <ul>
          <li>
            <div className='treeview__coffeecreamers'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Coffee Creamers
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__coffeecreamers_cremora'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Cremora (750g Box)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffeecreamers_ellis'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Ellis Brown Creamer (750g Box)
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* SWEETENERS */}

      <div className='pb-12 md:pb-24 treeview js-treeview'>
        <ul>
          <li>
            <div className='treeview__sweeteners'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Sweeteners
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__sweeteners_white'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Huletts White Sugar (5kg tubes)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__sweeteners_brown'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Hullets Brown Sugar (5kg tubes)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__sweeteners_canderel'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Canderel (1 000 sticks)
                  </span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TreeView
