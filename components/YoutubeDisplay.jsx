import React from 'react';
import styled from 'styled-components';

const Tooltip = (props) => {
  return (
    <StyledWrapper>
      <button className='scale-200' onClick= {() => window.open(props.link, '_blank')}> 
        <span className="icon"><svg fill="none" height={33} viewBox="0 0 120 120" width={33} xmlns="http://www.w3.org/2000/svg"><path d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z" fill="#cd201f" /><path d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z" fill="#fff" /><path d="m74 59.5-21 10.8253v-21.6506z" fill="#cd201f" /></svg></span>
        <span className="text1 text-black text-xs font-light karla">{props.name}</span>
        <span className="text2 tracking-wide">{props.subs}</span> 
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    width: 130px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
    border: 1px #cd201f solid;
    overflow: hidden;
  }

  .text1 {
    font-size: 12px;
    margin-left: 22%;
  }

  .text2 {
    position: absolute;
    top: 15%;
    left: -50px;
    font-weight: 600;
    font-size: 14px;
    color: white;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s;
  }

  .icon::before {
    position: absolute;
    left: -100px;
    top: 0;
    z-index: -1;
    content: '';
    width: 130px;
    height: 33px;
    border-radius: 30px;
    background-color: #cd201f;
  }

  button:hover .icon {
    transform: translateX(96px);
    transition: transform 0.5s;
  }

  button:hover .text2 {
    transform: translateX(100px);
    transition: transform 0.6s;
  }

  button:active {
    transform: scale(1.03);
  }`;

export default Tooltip;
