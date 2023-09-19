import styled from 'styled-components';

export const Search = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  max-width: 250px;
  max-height: 36px;
`;

export const Input = styled.input`
  padding: 0;
  border: 0;
  background: transparent;
  outline: none;
  width: 100%;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 4px; 
  max-width: 250px;
  position: relative;
`;

export const SearchItemList = styled.div`
  background: #2D2D2D; 
  border-radius: 5px; 
  padding: 0 15px; 
  position: absolute; 
  top: 40px; 
  width: 100%; 
  z-index: 10000;
`;

export const Items = styled.p`
  color: #D1D1D1; 
  text-overflow: ellipsis; 
  white-space: nowrap;  
  overflow: hidden;
  max-width: 200px;
  padding-bottom: 14px; 
  border-bottom: 1px solid #545454; 
  cursor: pointer;
`;