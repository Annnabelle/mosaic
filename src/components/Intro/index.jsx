import React from "react";
import "./styles.sass";
import Image from "next/image";
const Intro = () => {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='introInner'>
          <Image
            src='/introBg.svg'
            alt='introBg'
            className='logo'
            width={100}
            height={100}
          />
          <div className='introText'>
            <p className='text'>Каталог | 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
