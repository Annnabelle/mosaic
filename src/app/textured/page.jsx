"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import HeadingComponent from "@/components/headingComponent";
import "./styles.sass";

const Textured = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageTextured'>
      <div className='container'>
        <div className='headingComponent'>
          <div className='container'>
            <div className='headingContainer'>
              <div className='headingBox'>
                <p className='text'>Текстурная</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/textured1.png'
              alt='textured1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured1.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/textured2.png'
              alt='textured2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured2.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/textured3.png'
              alt='textured3'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured3.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/textured4.png'
              alt='textured4'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured4.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/textured5.png'
              alt='textured5'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured5.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/textured6.png'
              alt='textured6'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured6.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/textured7.png'
              alt='textured7'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured7.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/textured8.png'
              alt='textured8'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured8.png"}
            />
          </div>
          <div className='ninethBlock'>
            <FullscreenImage
              src='/textured9.png'
              alt='textured9'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/textured9.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textured;
