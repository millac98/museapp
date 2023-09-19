import Image from 'next/image';
import * as Styled from './style';
import { useEffect, useRef, useState } from 'react';
import { ISong } from '../../shared/models/song.model';
import { useSongs } from '../../shared/context/songs.context';

interface PlayerProps {
  songDetails: ISong,
}

export default function PlayerComponent({ songDetails }: PlayerProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { dispatch } = useSongs();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFavorite = (): void => {
    if (isFavorite) {
      setIsFavorite(false);
      dispatch({ type: 'removeFavorites', payload: songDetails.id });
    } else {
      setIsFavorite(true);
      dispatch({ type: 'saveFavorites', payload: songDetails.id });
    }
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const getLocalFavorite = localStorage.getItem('favorites');
    const initialIsFavorite = getLocalFavorite.includes(songDetails?.id?.toString());
    setIsFavorite(initialIsFavorite);
  }, [])

  return (
    <Styled.PlayerContainer>
      <Image
        src={`/assets/images/${songDetails?.song?.files?.coverArt}`}
        width={200}
        height={200}
        alt="CoverArt do álbum"
      />
      <Styled.PlayerContent>
        <Styled.SongDetails>
          <Styled.PlayButton onClick={() => togglePlayback()}>
            <Image
              src="/assets/images/play-pause.svg"
              width={64}
              height={64}
              alt="Ícone de Play"
            />
          </Styled.PlayButton>
          <div>
            <Styled.SongDetailsHeader>
              <Styled.SongDetailsHeading>{songDetails?.song?.title}</Styled.SongDetailsHeading>
              <Styled.FavoriteButton
                type="button"
                onClick={() => handleFavorite()}
              >
                {isFavorite ? (
                  <Image
                    src="/assets/images/ic-heart-checked.svg"
                    width={20}
                    height={20}
                    alt="Ícone de coração vermelho"
                  />
                ) : (
                  <Image
                    src="/assets/images/ic-heart.svg"
                    width={20}
                    height={20}
                    alt="Ícone de coração branco"
                  />
                )}
              </Styled.FavoriteButton>
            </Styled.SongDetailsHeader>
            <Styled.SongDetailsDescription>
              <p>{songDetails?.song?.artist}</p>
              <span>{' | '}</span>
              <p>{songDetails?.song?.album?.title}</p>
              <span>{' | '}</span>
              <p>{songDetails?.song?.album?.year}</p>
            </Styled.SongDetailsDescription>
          </div>
        </Styled.SongDetails>
        <audio
          controls
          ref={audioRef}
          src={`/assets/audio/${songDetails?.song?.files?.audio}`}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </Styled.PlayerContent>
    </Styled.PlayerContainer>
  )
}