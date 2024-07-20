"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import HeadingComponent from "@/components/headingComponent";
import "./styles.sass";

const Drop = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageDrop'>
      <div className='container'>
        <div className='headingComponent'>
          <div className='container'>
            <div className='headingContainer'>
              <div className='headingBox'>
                <p className='text'>Drop</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/drop1.png'
              alt='drop1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop1.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/drop2.png'
              alt='drop2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop2.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/drop3.png'
              alt='drop3'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop3.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/drop4.png'
              alt='drop4'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop4.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/drop5.png'
              alt='drop5'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop5.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/drop6.png'
              alt='drop6'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop6.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/drop7.png'
              alt='drop7'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop7.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/drop8.png'
              alt='drop8'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop8.png"}
            />
          </div>
          <div className='ninethBlock'>
            <FullscreenImage
              src='/drop9.png'
              alt='drop0'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/drop9.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drop;
