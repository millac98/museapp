import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 29px 0;
  justify-content: flex-start;
  align-items: center;
  background-color: #1D1D1D;

  @media (max-width: 600px) {
    padding-left: 16px;
  }
`;

export const MainHeading = styled.h1`
  background: linear-gradient(180deg, #00F2D5 0%, #AD00FF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-family: 'Nokora', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  cursor: pointer;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 54px; 
  max-width: 1200px;
  margin: 0 auto;
`;