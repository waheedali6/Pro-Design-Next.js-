import React from 'react';
import styled from 'styled-components';

const Card = ({ iconSrc, title, content, className }) => {
  return (
    <StyledWrapper>
      <div className="card-outer">
        <div className={`card ${className}`}>
          <div className="card-head flex flex-col gap-6">
            <img src={iconSrc} alt="" className='mx-auto w-auto h-auto max-w-14!' />
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="card-countent flex-col gap-3 items-center justify-center">
            <h5 className="card-title">{title}</h5>
            <p className='card-para m-0!'>
              {content}
            </p>
          </div>
        </div>

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 6px;
    transition: .3s;
  }

   .card img {
    filter: invert(53%) sepia(67%) saturate(417%) hue-rotate(127deg) brightness(184%) contrast(95%);
   }


  .card::after {
    content: "";
    position: absolute;
    z-index: -6;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    background-color: #2bb1a8;
  }

  .card-countent {
    padding: 20px;
    text-align: center;
    transition: all .7s;
    display: none;
  }

  .card-outer:hover .card{
    transition: .5s;
    transform: rotateY(180deg);
  }

  .card-outer:hover .card-head {
    display: none;
  }

  .card-outer:hover .card-countent {
  display: flex;
    color: #fff;
    transform: rotateY(-180deg);
  }`;

export default Card;
