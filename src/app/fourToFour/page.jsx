"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import HeadingComponent from "@/components/headingComponent";
import "./styles.sass";

const FourToFour = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageFourToFour'>
      <div className='container'>
        <div className='pageMainTitle'>
          <h1 className='title'>Серия 4X4</h1>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/4x4.png'
              alt='4x4'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/4x4mix1.png'
              alt='4x4mix1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mix1.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/4x4mixG1.png'
              alt='4x4mixG1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mixG1.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/4x4mixn3.png'
              alt='4x4mixn3'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mixn3.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/4x4n5.png'
              alt='4x4n5'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4n5.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/4x4nl.png'
              alt='4x4nl'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4nl.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/4x4z2.png'
              alt='4x4z2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4z2.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/4x4z8.png'
              alt='4x4z8'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4z8.png"}
            />
          </div>
          {/* <div className='ninethBlock'>
            <FullscreenImage
              src='/drop9.png'
              alt='drop0'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop9.png"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FourToFour;
