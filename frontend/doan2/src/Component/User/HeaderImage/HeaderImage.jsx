import React, { useEffect, useRef, useState } from "react";
import './HeaderImage.css'
import DataSidebarImage from "../Data/DataSidebarImage";

const HeaderImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === DataSidebarImage.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [currentImage]);

  const ClickToChange = (index) => {
    setCurrentImage(index);
  };
  return (
    <div id="HeaderImage">
      <header className="slider-container">
        <div className="slider">
          {DataSidebarImage.map((image, index) => (
            <div
              key={image.id}
              className={`slide ${index === currentImage ? 'active' : ''}`}
            >
              <img src={image.image} alt={`Slide ${index + 1}`} className="img-headerimage" />
              <div>
                <div className="description-headerimage">{image.price}$</div>
                <div className="description-headerimage">{image.sale}%</div>
                <div className="description-headerimage">{image.descriptionToImg}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {DataSidebarImage.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => ClickToChange(index)}
            ></span>
          ))}
        </div>
      </header>
    </div>
  );
};

export default HeaderImage;
