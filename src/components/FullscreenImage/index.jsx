"use client";
import React, { useRef } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullscreenImage = ({ src, alt, onOpen, onClose, isOpen }) => {
  const handle = useFullScreenHandle();
  const imgRef = useRef(null);

  const handleClick = () => {
    if (!isOpen) {
      onOpen(src);
      handle.enter();
    }
  };

  const handleClose = (e) => {
    if (imgRef.current && !imgRef.current.contains(e.target)) {
      onClose();
      handle.exit();
    }
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        style={{ width: "100%", cursor: "pointer" }}
      />
      <FullScreen handle={handle}>
        {isOpen && (
          <div
            onClick={handleClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 1000,
            }}
          >
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        )}
      </FullScreen>
    </div>
  );
};

export default FullscreenImage;
