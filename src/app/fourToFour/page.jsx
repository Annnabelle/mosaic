"use client";
import React, { useState } from "react";
import "./styles.sass";
import FullscreenImage from "@/components/FullscreenImage";

const PageFourToFour = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageFourToFout'>
      <div className='container'>
        <div className='pageMainTitle'>
          <h1 className='title'>Серия 4X4</h1>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/4x4.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/4x4mix1.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mix1.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/4x4mixG1.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mixG1.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/4x4mixn3.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4mixn3.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/4x4n5.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4n5.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/4x4nl.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4nl.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/4x4z2.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4z2.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/4x4z8.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/4x4z8.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFourToFour;
