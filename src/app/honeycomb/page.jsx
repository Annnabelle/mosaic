"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import HeadingComponent from "@/components/headingComponent";
import "./styles.sass";

const Honeycomb = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageHoneycomb'>
      <div className='container'>
        <div className='headingComponent'>
          <div className='container'>
            <div className='headingContainer'>
              <div className='headingBox'>
                <p className='text'>Соты</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/honeycomb1.png'
              alt='honeycomb1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb1.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/honeycomb2.png'
              alt='honeycomb2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb2.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/honeycomb3.png'
              alt='honeycomb3'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb3.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/honeycomb4.png'
              alt='honeycomb4'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb4.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/honeycomb5.png'
              alt='honeycomb5'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb5.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/honeycomb6.png'
              alt='honeycomb6'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb6.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/honeycomb7.png'
              alt='honeycomb7'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb7.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/honeycomb8.png'
              alt='honeycomb8'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb8.png"}
            />
          </div>
          <div className='ninethBlock'>
            <FullscreenImage
              src='/honeycomb9.png'
              alt='honeycomb9'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/honeycomb9.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honeycomb;
