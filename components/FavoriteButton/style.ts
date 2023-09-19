import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  font-family: 'Articulat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  cursor: pointer;

  &:hover {
    background-color: #1D1D1D;
    box-shadow: 0 10px 20px -5px rgba(0, 218, 232, 0.35);
  }
`;