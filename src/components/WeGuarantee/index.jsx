import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import "./styles.sass";

const WeGuarantee = () => {
  return (
    <div className='weGuarantee'>
      <div className='container'>
        <div className='weGuranteeContainer'>
          <div className='weGurantHeading'>
            <h3 className='title'>Мы гарантируем</h3>
            <p className='text'>
              Несмотря на то, что мозаика сделана из стекла, она гораздо прочнее, чем обычное стекло. Это обусловлено
              тем, что она проходит через печь с высокой температурой. Стеклянная мозаика не поддается воздействию
              химических реагентов и многих неорганических и органических кислот, содержащихся в большинстве моющих
              средств.
            </p>
          </div>
          <div className='weGurantBody'>
            <div className='box'>
              <div className='gurantContainer'>
                <div className='gurantHeading'>
                  <BsFillPatchCheckFill />
                  <h4 className='title'>Водонепроницаемость</h4>
                </div>
                <div className='gurantBody'>
                  <p className='text'>
                    Мозаика из стекла абсолютно водонепроницаема. Потому ею можно облицовывать ванные комнаты, бани,
                    хамамы, бассейны, аквапарки, фонтаны и другие влажные помещения. Коэффициент водопоглащения
                    стеклянной мозаики - меньше 0.1%
                  </p>
                </div>
              </div>
              <div className='gurantContainer'>
                <div className='gurantHeading'>
                  <BsFillPatchCheckFill />
                  <h4 className='title'>Морозостойкость</h4>
                </div>
                <div className='gurantBody'>
                  <p className='text'>
                    Мозаика из стекла морозоустойчива - способна выдержать не менее 100 циклов перехода от минусовых
                    температур к плюcовым без потери качества. Следовательно, этот материал пригоден для облицовки
                    открытых замерзающих бассейнов, в которых на зиму оставляют воду, и фасадов зданий. Отметим, что эти
                    свойства больше всего связаны с отсутствием в материале пор и воды ы них. Поэтому стеклянная мозаика
                    более морозоустойчивая, чем керамическая плитка, и способна выдержать большее число циклов, а так же
                    температуру до -30С.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='gurantContainer'>
                <div className='gurantHeading'>
                  <BsFillPatchCheckFill />
                  <h4 className='title'>Жаропрочность</h4>
                </div>
                <div className='gurantBody'>
                  <p className='text'>
                    Мозаика из стекла - жаропрочный материал. Он устойчив к резким температурным перепадам в диапазоне
                    от +15 до +150С. Это позволяет его использовать для облицовки каминов и печей наружи (но не изнутри,
                    где температура может быть намного выше)
                  </p>
                </div>
              </div>
              <div className='gurantContainer'>
                <div className='gurantHeading'>
                  <BsFillPatchCheckFill />
                  <h4 className='title'>Устойчивость к лучам света</h4>
                </div>
                <div className='gurantBody'>
                  <p className='text'>
                    Цвета изделий из стеклянной мозаики не выгорают под длительным воздействием света с ультрафиолетовой
                    составляющей. Материал стойкий к влажности помещений и агрессивным химическим веществам. Поэтому ею
                    выкладывают стены и полы в помещениях, где часто работают с различными кислотами. Выдерживает
                    перепады температур: -30 -- +150 градусов. Поверхность может быть рифленая или гладкая.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeGuarantee;
