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
            <div className='treeview__coffee'>
              <span className='ml-4 text-lg font-semibold uppercase md:text-2xl md:ml-8'>
                Coffee
              </span>
            </div>
            <ul>
              <li>
                <div className='treeview__coffee_classic'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Classic (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_classic_decaf'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Classic Decaf (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Gold (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_gold_decaf'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
                    Nestlé Gold Decaf (200g Jar)
                  </span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className='treeview__coffee_ricoffy'>
                  <span className='text-xs font-semibold capitalize md:text-lg'>
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
