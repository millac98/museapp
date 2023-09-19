import { useState } from 'react';
import { useSongs } from '../../shared/context/songs.context';
import * as Styled from './style';
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { ISong } from '../../shared/models/song.model';

export default function SearchComponent() {
  const [search, setSearch] = useState<string>('');
  const [searchItems, setSearchItems] = useState<ISong[]>([]);
  const { state } = useSongs();
  const router = useRouter();

  const handleChangeSearch = (term: string): void => {
    if (term.trim() !== '') {
      setSearch(term);
      const searchItems = state?.songs?.filter((item) =>
        item?.song?.title?.toLowerCase().includes(term.toLowerCase()) ||
        item?.song?.album?.title?.toLowerCase().includes(term.toLowerCase()) ||
        item?.song?.artist?.toLowerCase().includes(term.toLowerCase())
      );

      setSearchItems(searchItems)
    } else {
      setSearch('');
      setSearchItems([]);
    }
  }

  return (
    <Styled.SearchContainer>
      <Styled.Search>
        <Image
          src="/assets/images/ic-search.svg"
          width={20}
          height={20}
          alt="Ícone de pesquisa"
        />
        <Styled.Input type="search" placeholder="Search in your library" value={search} onChange={(e) => handleChangeSearch(e.target.value)} />
      </Styled.Search>
      
        {searchItems.length ? (
          <Styled.SearchItemList>
            {searchItems?.map((searchedItem) => (
              <Styled.Items
                key={searchedItem.id}
                onClick={() => router.push(`/song/${searchedItem.id}`)}
                title={searchedItem.song.title}
              >
                {searchedItem.song.title}
              </Styled.Items>
            ))}
          </Styled.SearchItemList>
        ): null}
    </Styled.SearchContainer>
  )
}