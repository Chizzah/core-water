import React from 'react'

import '../../css/product.scss'

const TreeView = () => {
  return (
    <section>
      {/* WATER */}

      <div className='my-12 treeview js-treeview md:my-24'>
        <ul>
          <li>
            <div className='treeview__water'>
              <span className='ml-4 ml-6 text-lg font-semibold uppercase md:text-2xl md:ml-8 md:ml-12'>
                Water
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__water_dispenser'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Oasis Dispenser Water (5Gal/18,9L)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_still'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Oasis Bottled Still Water (Case of 24 x 500ml)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__water_sparkling'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Oasis Bottled Sparkling Water (Case of 24 x 330ml)
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
            <div className='treeview__coffee'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Coffee
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__coffee_classic'>
                  <span className='text-sm font-semibold capitalize md:text-lg'>
                    Nestlé Classic (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_classic_decaf'>
                  <span className='text-sm font-semibold capitalize md:text-lg'>
                    Nestlé Classic Decaf (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold'>
                  <span className='text-sm font-semibold capitalize md:text-lg'>
                    Nestlé Gold (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold_decaf'>
                  <span className='text-sm font-semibold capitalize md:text-lg'>
                    Nestlé Gold Decaf (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_ricoffy'>
                  <span className='text-sm font-semibold capitalize md:text-lg'>
                    Nestlé Ricoffy (750g Tin)
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
                <div className='treeview__five_roses'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Five Roses Ceylon Blend (102 Tagless Tea Bags)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__freshpak'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Freshpak Rooibos (160 Tagless Tea Bags)
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
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Nestlé Hot Chocolate (500g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__hotchocolate_milo'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
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
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Nestlé Cremora (750g Box)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffeecreamers_ellis'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
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
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Huletts White Sugar (5kg tubes)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__sweeteners_brown'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
                    Hullets Brown Sugar (5kg tubes)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__sweeteners_canderel'>
                  <span className='ml-2 text-sm font-semibold capitalize md:text-lg md:ml-4'>
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
