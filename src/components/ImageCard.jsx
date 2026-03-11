import React from 'react';
import styled from 'styled-components';

const ImageCard = ({src, className, title, content}) => {
  return (
    <StyledWrapper>
      <div className={`card cursor-pointer ${className}`}>
        <img src={`${src}`} alt="image" />
        <div className="card__content flex flex-col items-center justify-center">
          {title ? <h5 className="card-title">{title}</h5> : ""}
          {content ? <p className="para text-center">{content}</p> : ""}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

`;

export default ImageCard;
