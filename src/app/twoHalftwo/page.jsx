"use client";
import React, { useState } from "react";
import FullscreenImage from "@/components/FullscreenImage";
import "./styles.sass";

const PageTwoHalfTwo = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (src) => {
    setCurrentImage(src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };
  return (
    <div className='pageTwoHalfTwo'>
      <div className='container'>
        <div className='pageMainTitle'>
          <h1 className='title'>Серия 2.5X2.5</h1>
        </div>
        <div className='pageOneToOneContainer'>
          <div className='firstBlock'>
            <FullscreenImage
              src='/double.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/double.png"}
            />
          </div>
          <div className='secondBlock'>
            <FullscreenImage
              src='/g1.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/g1.png"}
            />
          </div>
          <div className='thirdBlock'>
            <FullscreenImage
              src='/g6.png'
              alt='Sample Image 1'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/g6.png"}
            />
          </div>
          <div className='forthBlock'>
            <FullscreenImage
              src='/g10.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/g10.png"}
            />
          </div>
          <div className='fifthBlock'>
            <FullscreenImage
              src='/gold.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/gold.png"}
            />
          </div>
          <div className='sixBlock'>
            <FullscreenImage
              src='/blue.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/blue.png"}
            />
          </div>
          <div className='seventhBlock'>
            <FullscreenImage
              src='/red.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/red.png"}
            />
          </div>
          <div className='eighthBlock'>
            <FullscreenImage
              src='/pinck.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/pinck.png"}
            />
          </div>
          <div className='ninethBlock'>
            <FullscreenImage
              src='/azure.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/azure.png"}
            />
          </div>
          <div className='tenth'>
            <FullscreenImage
              src='/mixz.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/mixz.png"}
            />
          </div>
          <div className='eleventh'>
            <FullscreenImage
              src='/mixz2.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/mixz2.png"}
            />
          </div>
          <div className='twelveth'>
            <FullscreenImage
              src='/n2.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/n2.png"}
            />
          </div>
          <div className='thirteen'>
            <FullscreenImage
              src='/n5.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/n5.png"}
            />
          </div>
          <div className='fourteen'>
            <FullscreenImage
              src='/n6.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/n6.png"}
            />
          </div>
          <div className='fifteen'>
            <FullscreenImage
              src='/n10.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/n10.png"}
            />
          </div>
          <div className='sixteens'>
            <FullscreenImage
              src='/z1.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z1.png"}
            />
          </div>
          <div className='seventeenth'>
            <FullscreenImage
              src='/z12.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z12.png"}
            />
          </div>
          <div className='eighteenth'>
            <FullscreenImage
              src='/z2.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z2.png"}
            />
          </div>
          <div className='nineteens'>
            <FullscreenImage
              src='/z22.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z22.png"}
            />
          </div>
          <div className='twenty'>
            <FullscreenImage
              src='/z2l.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z2l.png"}
            />
          </div>
          <div className='twentyone'>
            <FullscreenImage
              src='/z9.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z9.png"}
            />
          </div>
          <div className='twentytwo'>
            <FullscreenImage
              src='/z10.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z10.png"}
            />
          </div>
          <div className='twentythree'>
            <FullscreenImage
              src='/z101.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z101.png"}
            />
          </div>
          <div className='twentyfour'>
            <FullscreenImage
              src='/z121.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z121.png"}
            />
          </div>
          <div className='twentyFife'>
            <FullscreenImage
              src='/z15.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/z15.png"}
            />
          </div>
          <div className='twentySix'>
            <FullscreenImage
              src='/zl1.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/zl1.png"}
            />
          </div>
          <div className='twentySeven'>
            <FullscreenImage
              src='/zw.png'
              alt='Sample Image 2'
              onOpen={handleOpen}
              onClose={handleClose}
              isOpen={currentImage === "/zw.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwoHalfTwo;
