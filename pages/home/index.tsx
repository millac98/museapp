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
      <main className={styles.main}>
        <section className={styles.listPageHeader}>
          <div className={styles.headerContent}>
            <div className={styles.libraryTitleContainer}>
              <h2 className={styles.libraryHeading}>Your Library</h2>
              <FavoriteComponent />
            </div>
            <p className={styles.libraryDescriptionText}>You have {songs?.length} songs in your library</p>
          </div>
          <div className={styles.filterContainer}>
            <ToggleComponent />
            <SearchComponent />
          </div>
        </section>

        <div>
          <section className={styles.listPageBody}>
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
                <p className={styles.white}><strong>Não há músicas no momento.</strong></p>
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
