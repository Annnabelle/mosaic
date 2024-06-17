import Image from "next/image";
import React from "react";
import { CgShapeRhombus } from "react-icons/cg";
import "./styles.sass";

const AboutMosaic = () => {
  return (
    <div className='aboutMosaic'>
      <div className='container'>
        <div className='aboutMosaicContainer'>
          <div className='aboutMosaicBox'>
            <Image
              src='/aboutMosaic2.svg'
              alt='aboutMosaic'
              className='aboutMosaicImage'
              width={100}
              height={100}
            />
          </div>
          <div className='aboutMosaicBox'>
            <div className='aboutMosaicInfo'>
              <p className='text'>
                Плитка имеет размер 31Х31 см, проклеенная снизу специальной сеткой для удобства кладки. Швы между чипами
                имеют международный стандарт.
              </p>
              <p className='text'>Сами чипы мозайки имеют размер:</p>
              <ul className='list'>
                <li className='listItem'>
                  <CgShapeRhombus />
                  4х4 см
                </li>
                <li className='listItem'>
                  <CgShapeRhombus /> 2.5х2.5 см
                </li>
                <li className='listItem'>
                  <CgShapeRhombus /> 2х2 см
                </li>
                <li className='listItem'>
                  <CgShapeRhombus />
                  1х1 см
                </li>
              </ul>
              <p className='text'>Так же в виде:</p>
              <ul className='list'>
                <li className='listItem'>
                  <CgShapeRhombus />
                  Капли Drops
                </li>
                <li className='listItem'>
                  <CgShapeRhombus />
                  Соты (шестигранники) двух размеров.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMosaic;
