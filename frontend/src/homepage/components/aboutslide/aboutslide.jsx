import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../assests/blood1.webp';
import image2 from '../../assests/slide2.jpg';
import image3 from '../../assests/slide3.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './aboutslide.css';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1200px;
  height: 500px;
  margin: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%; /* Only one image at a time */
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const images = [image1, image2, image3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <section className='ImageSlider'>
        <div className='heading2'></div>
        <div className='paragraph'>Our blood bank system connects various blood banks and supplies blood to different locations.</div>
        <SliderWrapper>
          <Slide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <SlideImage key={index} src={image} alt={`Slide ${index + 1}`} />
            ))}
          </Slide>
          <LeftArrow onClick={handlePrev}>
            <FaArrowLeft size={20} />
          </LeftArrow>
          <RightArrow onClick={handleNext}>
            <FaArrowRight size={20} />
          </RightArrow>
        </SliderWrapper>
      </section>
    </PageWrapper>
  );
};

export default ImageSlider;
