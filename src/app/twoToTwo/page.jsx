"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import "./styles.sass";

const PageTwoToTwo = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageTwoToTwo'>
      <div className='container'>
        <div className='headingComponent'>
          <div className='headingContainer'>
            <div className='headingBox'>
              <p className='text'>Серия 2X2</p>
            </div>
          </div>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='blob first'></div>

          <div className='blob second'></div>

          <div className='blob third'></div>

          <div className='blob forth'></div>
          <div className='firstBlock'>
            <FullscreenImage
              src='/2x2mix.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/2x2mix.png"}
            />
            <div className='blob third'></div>

            <div className='blob forth'></div>
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/2x2mix2.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/2x2mix2.png"}
            />
            <div className='blob first'></div>

            <div className='blob second'></div>
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/2x2z2.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/2x2z2.png"}
            />
            <div className='blob third'></div>

            <div className='blob forth'></div>
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/2x2z8.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/2x2z8.png"}
            />
            <div className='blob first'></div>

            <div className='blob second'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwoToTwo;
