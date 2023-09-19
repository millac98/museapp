import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ToggleDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: #fff;
`; 

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`; 

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #00DAE8;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`; 

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    border-radius: 50%;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  &:hover {
    background-color: #1D1D1D;
    box-shadow: 0 10px 20px -5px rgba(0, 218, 232, 0.35);
  }
`; 