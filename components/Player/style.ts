import styled from 'styled-components';

export const PlayerContainer = styled.section`
  display: flex;
  gap: 34px;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 16px;
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
`;

export const SongDetails = styled.div`
  display: flex; 
  flex-wrap: wrap;
  align-items: center; 
  gap: 36px;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const PlayButton = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const FavoriteButton = styled.button`
  background: transparent; 
  border: none; 
  cursor: pointer;
`;

export const SongDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 22px; 
`;

export const SongDetailsHeading = styled.h2`
  margin: 0;
  color: white;
`;

export const SongDetailsDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 

  & p, span {
    color: #fff;
  }
`;

export const PlayerContent = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;


