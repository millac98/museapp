import Image from 'next/image';
import * as Styled from './style';
import { useRouter } from "next/navigation";
import { useSongs } from '../../shared/context/songs.context';
import { ISong } from '../../shared/models/song.model';

interface CardProps {
  song: ISong,
}

export default function CardComponent({ song }: CardProps) {
  const { state, dispatch } = useSongs();
  const router = useRouter();
  const isFavorite = state?.favorites?.some((detail) => detail === song.id);

  const handleFavorite = (id: number): void => {
    if (isFavorite) {
      dispatch({ type: 'removeFavorites', payload: id });
    } else {
      dispatch({ type: 'saveFavorites', payload: id });
    }
  }

  return (
    <Styled.Card>
      <Styled.CustomImage
        src={`/assets/images/${song.song.files.coverArt}`}
        width={200}
        height={200}
        alt="CoverArt da música"
        onClick={() => {
          router.push(`/song/${song.id}`);
        }}
      />
      <Styled.CardDescription>
        <Styled.SongTitle
          title={song.song.title}
        >
          {song.song.title}
        </Styled.SongTitle>
        <Styled.ArtistContainer>
          <Styled.ArtistParagraph
            title={song.song.artist}
          >
            {song.song.artist}
          </Styled.ArtistParagraph>
          <Styled.FavoriteButton
            type="button"
            onClick={() => handleFavorite(song.id)}
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
        </Styled.ArtistContainer>
      </Styled.CardDescription>
    </Styled.Card>
  )
}