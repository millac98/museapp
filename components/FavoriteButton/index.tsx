import { useEffect, useState } from 'react';
import { useSongs } from '../../shared/context/songs.context';
import * as Styled from './style';
import Image from 'next/image'
import { ISong } from '../../shared/models/song.model';

export default function FavoriteComponent() {
  const [isFavoritesSorted, setIsFavoritesSorted] = useState<boolean>(false);
  const { state, dispatch } = useSongs();

  const handleFilterFavorites = () => setIsFavoritesSorted(!isFavoritesSorted);

  useEffect(() => {
    if (isFavoritesSorted) {
      const fav = state?.songs?.filter((song: ISong) =>
        state?.favorites?.includes(song.id)
      );
      dispatch({ type: 'filterSongs', payload: fav });
    } else {
      dispatch({ type: 'filterSongs', payload: state?.songs });
    }
  }, [isFavoritesSorted]);

  return (
    <Styled.Button type="button" onClick={() => handleFilterFavorites()}>
      {isFavoritesSorted ? (
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
      Favorites
    </Styled.Button>
  )
}