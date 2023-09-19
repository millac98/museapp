'use client';

import { useEffect, useState } from 'react';
import { ISong } from '../../shared/models/song.model';

import HeaderComponent from '../../components/Header';
import FavoriteComponent from '../../components/FavoriteButton';
import styles from '../../styles/Home.module.css';
import SearchComponent from '../../components/Search';
import ToggleComponent from '../../components/Toggle';
import { useSongs } from '../../shared/context/songs.context';
import { getAllSongs } from '../../shared/services/SongsService';
import CardComponent from '../../components/Card';

export default function Home() {
  const [songs, setSongs] = useState<ISong[]>([]);
  const { state, dispatch } = useSongs();

  const fetchSongs = async () => {
    const songData = await getAllSongs();

    const songDataList = songData.songs;

    setSongs(songDataList);
    dispatch({ type: 'saveSongs', payload: songDataList });
  }

  useEffect(() => {
    fetchSongs();
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state?.favorites));
  }, [state?.favorites])

  const sortList = (): ISong[] => {
    const sortedFields = [...state?.sortedSongs].sort((a, b) => {
      if (a.song['title'] > b.song['title']) return 1;

      if (b.song['title'] > a.song['title']) return -1;

      return 0;
    });

    return sortedFields;
  }

  useEffect(() => {
    if (state?.sortedSongs) {
      const sort = sortList();
      if (!state?.isSortedList) {
        sort.reverse();
      }
      setSongs(sort);
    }
  }, [state?.isSortedList, state?.sortedSongs]);

  return (
    <div className={styles.container}>
      <HeaderComponent />
      <main style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '40px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: '0 0 12px', display: 'flex', gap: 8 }}>
              <h2 style={{ color: "#fff", margin: 0, fontSize: 32, fontWeight: 'medium' }}>Your Library</h2>
              <FavoriteComponent />
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.50)", margin: 0, fontWeight: 'medium' }}>You have {songs?.length} songs in your library</p>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <ToggleComponent />
            <SearchComponent />
          </div>
        </section>

        <div>
          <section style={{ display: 'flex', marginTop: 40, gap: 30, flexWrap: 'wrap', marginBottom: 40 }}>
            {songs?.length ? (
              <>
                {songs?.map((item: ISong) => (
                  <CardComponent
                    key={item.id}
                    song={item}
                  />
                ))}
              </>
            )
              : (
                <p style={{ color: "#fff" }}>Não há músicas no momento.</p>
              )}
          </section>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Nokora', 'ArticulatCF', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
