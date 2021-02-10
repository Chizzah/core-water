import React from 'react'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

import '../../css/product.scss'

import DispenserBottle from '../../images/18.9l-dispenser-bottle.png'
import StillWater from '../../images/500ml-and-330ml-still-water.png'
import SparklingWater from '../../images/500ml-and-330ml-sparkling-water.png'
import NescafeClassic from '../../images/nescafe-classic-200g-jar.png'
import NescafeClassicDecaf from '../../images/nescafe-classic-decaf-200g-jar.png'
import NescafeGold from '../../images/nescafe-gold-200g-jar.png'
import NescafeGoldDecaf from '../../images/nescafe-gold-decaf-200g-jar.png'
import NescafeRifcoffy from '../../images/nescafe-ricoffy-750g-tin.png'

const options = {
  settings: {
    disableKeyboardControls: true,
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px',
  },
  thumbnails: {
    showThumbnails: false,
  },
}

const TreeView = () => {
  const { openLightbox } = useLightbox()

  return (
    <section>
      <SRLWrapper options={options}>
        <img className='hidden' src={DispenserBottle} alt='' />
        <img className='hidden' src={StillWater} alt='' />
        <img className='hidden' src={SparklingWater} alt='' />
        <img className='hidden' src={NescafeClassic} alt='' />
        <img className='hidden' src={NescafeClassicDecaf} alt='' />
        <img className='hidden' src={NescafeGold} alt='' />
        <img className='hidden' src={NescafeGoldDecaf} alt='' />
        <img className='hidden' src={NescafeRifcoffy} alt='' />
      </SRLWrapper>
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
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={() => openLightbox(0)}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_still'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Oasis Bottled Still Water (24x500ml)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={() => openLightbox(1)}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_sparkling'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Oasis Bottled Sparkling Water (24x330ml)
                  </span>
                </div>
                <span className='bg-transparent img_hover'>
                  <button
                    onClick={() => openLightbox(2)}
                    className='w-full h-full text-transparent'
                  >
                    click
                  </button>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* COFFEE */}

      <div className='mb-12 treeview js-treeview md:mb-24'>
        <ul>
          <li>
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
                    onClick={() => openLightbox(4)}
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
                    onClick={() => openLightbox(5)}
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
                    onClick={() => openLightbox(6)}
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
                    onClick={() => openLightbox(7)}
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
                      onClick={() => openLightbox(8)}
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
