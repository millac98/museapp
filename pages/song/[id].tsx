'use client';

import HeaderComponent from "../../components/Header";
import styles from '../../styles/Song.module.css';
import { useSongs } from "../../shared/context/songs.context";
import SearchComponent from "../../components/Search";
import { useEffect, useState } from "react";
import { getSong } from "../../shared/services/SongsService";
import { useRouter } from "next/router";
import PlayerComponent from "../../components/Player";
import CardComponent from "../../components/Card";
import { ISong } from "../../shared/models/song.model";

export default function Song() {
  const { state } = useSongs();
  const router = useRouter();
  const [songDetails, setSongDetails] = useState<ISong>(null);
  const [relatedSongs, setRelatedSongs] = useState<ISong[]>([]);

  const fetchSong = async () => {
    const response = await getSong(router?.query?.id?.toString());

    setSongDetails(response);
  }

  useEffect(() => {
    if (router?.query?.id) {
      fetchSong();
    }
  }, [router?.query?.id])

  useEffect(() => {
    const related = state?.songs?.filter((song) =>
      songDetails?.related?.includes(song.id)
    );
    setRelatedSongs(related)
  }, [songDetails]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state?.favorites));
  }, [state?.favorites])

  return (
    <div className={styles.container}>
      <HeaderComponent>
        <SearchComponent />
      </HeaderComponent>
      <main
        className={styles.main}
        style={{
          backgroundImage: `linear-gradient(90deg, #12303B 0%, rgba(18, 48, 59, 0.00) 100%),
            url("/assets/images/${songDetails?.song?.files?.poster}")`
        }}
      >
        <div className={styles.songDetailsContainer}>
          {songDetails && (
            <div className={styles.songDetails}>
              <PlayerComponent songDetails={songDetails} />
              <section className={styles.section}>
                <p className={styles.subtitle}>Other albums</p>
                <div className={styles.cards}>
                  {relatedSongs.map((song: ISong) => (
                    <CardComponent
                      key={song.id}
                      song={song}
                    />
                  ))}
                </div>
              </section>
            </div>
          )}
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
    </div >
  )
};