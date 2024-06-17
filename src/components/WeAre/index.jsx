import Image from "next/image";
import React from "react";
import "./styles.sass";

const WeAre = () => {
  return (
    <div className='weAre'>
      {/* <div className='imageBox'>
        <Image
          src='/weAreBg.svg'
          alt='weareImage'
          className='img'
          width={150}
          height={150}
        />
      </div> */}
      <div className='container'>
        <div className='weAreContainer'>
          <div className='weAreBox'>
            <p className='text'>Производитель мозаичной плитки из стекла</p>
            <Image
              src='/premiumLogo2.svg'
              alt='weareImage'
              className='img'
              width={150}
              height={150}
            />
            <p className='text'>
              Представляет вашему вниманию продукцию, которая отличается высоким качеством, безупречным внешним видом и
              легкостью кладки.
            </p>
            <p className='text'>
              В ассортименте имеются несколько сот видов сочетаний цветовых гамм и оттенков. По желанию заказчика, мы
              можем миксовать цвета и разнообразные оттенки, тем самым воплощая в реальность самые смелые и неординарные
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
