import React from "react";
import "./styles.sass";
import Image from "next/image";

const HeadingComponent = (bgImage) => {
  return (
    <div
      className='headingComponent'
      style={{ background: `url(${bgImage})`, backgroundRepeat: "no-repeat" }}
    >
      <div className='container'>
        <div className='headingContainer'>
          <div className='headingBox'>
            <p className='text'>Серия 1X1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingComponent;
