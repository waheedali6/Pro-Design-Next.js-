import React from 'react';
import styled from 'styled-components';

const ThemeBtn = ({title, link = "#", className = "rounded py-3 px-1.5", textClass, children}) => {
  return (
    <StyledWrapper>
      <a href={link} className={`theme-btn btn-17 theme-color-bg ${className}`}>
        <span className="text-container">
          <span className={`text ${textClass}`}>{title || children}</span>
        </span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-17,
  .btn-17 *,
  .btn-17 :after,
  .btn-17 :before,
  .btn-17:after,
  .btn-17:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-17 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-image: none;
    color: #fff !important;
    cursor: pointer;
    font-weight: 900;
    line-height: 1.5;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  }

  .btn-17:disabled {
    cursor: default;
  }

  .btn-17:-moz-focusring {
    outline: auto;
  }

  .btn-17 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-17 [hidden] {
    display: none;
  }

  .btn-17 {
    z-index: 0;
  }

  .btn-17,
  .btn-17 .text-container {
    overflow: hidden;
    position: relative;
  }

  .btn-17 .text-container {
    display: block;
    mix-blend-mode: normal !important;
  }

  .btn-17 .text {
    display: block;
    position: relative;
  }

  .btn-17:hover .text {
  color: #000 !important;
    -webkit-animation: move-up-alternate 0.3s forwards;
    animation: move-up-alternate 0.3s forwards;
  }

  @-webkit-keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }

  .btn-17:after,
  .btn-17:before {
    --skew: 0.2;
    background: #fff;
    content: "";
    display: block;
    height: 102%;
    left: calc(-50% - 50% * var(--skew));
    pointer-events: none;
    position: absolute;
    top: -104%;
    transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    transition: transform 0.2s ease;
    width: 100%;
  }

  .btn-17:after {
    --progress: 0%;
    left: calc(50% + 50% * var(--skew));
    top: 102%;
    z-index: -1;
  }

  .btn-17:hover:before {
    --progress: 100%;
  }

  .btn-17:hover:after {
    --progress: -102%;
  }`;

export default ThemeBtn;
