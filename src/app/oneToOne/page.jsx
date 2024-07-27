"use client";
import React, { useState } from "react";
import "./styles.sass";
import FullscreenImage from "@/components/FullscreenImage";
import HeadingComponent from "@/components/headingComponent";

const PageOneToOne = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageOneToOne'>
      <div className='container'>
        <div className='headingComponent'>
          <div className='container'>
            <div className='headingContainer'>
              <div className='headingBox'>
                <p className='text'>Серия 1X1</p>
              </div>
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
              src='/1x1mix.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1mix.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/1x1p.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1p.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/1x1z.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1z.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/1x1z1.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1z1.png"}
            />
            <div className='blob first'></div>

            <div className='blob second'></div>
          </div>
          {/* <div className='fifthBlock'>
            <FullscreenImage
              src='/1x1z5.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1z5.png"}
            />
          </div> */}
          <div className='fifthBlock '>
            <FullscreenImage
              src='/1x1z8.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1z8.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/1x1z9.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/1x1z9.png"}
            />
            <div className='blob third'></div>

            <div className='blob forth'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOneToOne;
