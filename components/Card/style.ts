import Image from 'next/image';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  max-width: 200px;

  &:hover {
    box-shadow: 0 10px 20px -5px rgba(0, 218, 232, 0.15),
                -10px 0 20px -5px rgba(0, 218, 232, 0.15);
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #262626;
  border-radius: 0 0 5px 5px;
  padding: 16px;
  max-width: 200px;
  flex-wrap: wrap;
`;

export const SongTitle = styled.p`
  font-family: 'Articulat CF', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 108%;
  color: #fff;
  margin-top: 0;
  margin-bottom: 10px;
  text-overflow: ellipsis; 
  max-width: 160px;
  white-space: nowrap;                  
  overflow: hidden;
`;

export const ArtistParagraph = styled.p`
  font-family: 'Articulat CF', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; 
  color: #666;
  margin: 0;
  text-overflow: ellipsis; 
  max-width: 120px;
  white-space: nowrap;                  
  overflow: hidden;
`;

export const ArtistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const CustomImage = styled(Image)`
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none; 
  cursor: pointer;
`;